import { TwitterButtonSync, TwitterButtonFollow, ReIDLogoColor } from '@/content-script/components/twitter';
import syncControl from '@/common/sync-control';
import ipfs from '@/common/ipfs';
import RSS3 from '@/common/rss3';
import reidInvite from '@/common/invite';
import { debounce } from 'lodash';

async function checkBind(address: string, privateKey: string) {
    if (window.location.pathname === '/home') {
        // Only check in homepage
        const username = (<HTMLAnchorElement>document.querySelector('main[role=main] a[role=link]'))?.pathname.replace(
            '/',
            '',
        );
        if (username) {
            // send bind request
            await reidInvite.bind.new(address, 'twitter', username, privateKey);
        }
    }
}

async function syncPost() {
    const summary = (<HTMLElement>document.querySelector('[data-testid=tweetTextarea_0]'))?.innerText;

    const attachments = document.querySelectorAll(
        '[data-testid="attachments"] img, [data-testid="attachments"] source',
    );

    const contents = await Promise.all(
        [...attachments].map(async (attachment) => {
            const result = await fetch((<HTMLImageElement | HTMLSourceElement>attachment).src);
            const blob = await result.blob();
            return {
                address: [await ipfs.upload(blob)],
                mime_type: blob.type,
                size_in_bytes: blob.size + '',
            };
        }),
    );

    if (await syncControl.get()) {
        const rss3 = await RSS3.get();
        if (rss3) {
            const twitItem = {
                summary,
                tags: ['Re: ID', 'Twitter'],
                contents,
            };
            const tagsInTwit = [...summary?.matchAll(/#(\S+)/g)];
            tagsInTwit.forEach((tagMatch) => {
                twitItem.tags.push(tagMatch[1]);
            });
            await rss3.item.post(twitItem);
            await rss3.persona.sync();

            await checkBind(rss3.persona.id, rss3.persona.privateKey);
        }
    }
}

async function mountControlButton(ele: Element) {
    if (ele.lastElementChild?.id !== 'reid-sync-switch') {
        ele.insertAdjacentHTML('beforeend', TwitterButtonSync);

        {
            // Listen events
            function updateSyncStatusClass(enabled: boolean) {
                const twiBtnSyncUut = ele.getElementsByClassName('reid-sync-active-status')[0];
                if (twiBtnSyncUut !== null) {
                    if (enabled) {
                        twiBtnSyncUut.classList.add('active');
                    } else {
                        twiBtnSyncUut.classList.remove('active');
                    }
                }
            }

            async function setRSS3Sync(enabled: boolean) {
                await syncControl.set(enabled);
                updateSyncStatusClass(enabled);
                window.dispatchEvent(new Event('reid-sync-status-change'));
            }

            window.addEventListener('reid-sync-status-change', async () => {
                updateSyncStatusClass(await syncControl.get());
            });

            updateSyncStatusClass(await syncControl.get());
            const twiBtnSyncEnaUut = ele.getElementsByClassName('reid-sync-button-activate')[0];
            if (twiBtnSyncEnaUut !== null) {
                twiBtnSyncEnaUut.addEventListener('click', () => {
                    setRSS3Sync(true);
                });
            }
            const twiBtnSyncDeUut = ele.getElementsByClassName('reid-sync-button-deactivate')[0];
            if (twiBtnSyncDeUut !== null) {
                twiBtnSyncDeUut.addEventListener('click', () => {
                    setRSS3Sync(false);
                });
            }
        }
    }
}

function setTwitterColor(baseColor: string) {
    if (document.documentElement.style.getPropertyValue('--twitter-theme-color') !== baseColor) {
        document.documentElement.style.setProperty('--twitter-theme-color', baseColor);
        const hoverBG = baseColor.replace('rgb(', 'rgba(').replace(')', ', 0.1)');
        document.documentElement.style.setProperty('--twitter-theme-hover-background', hoverBG);
    }
}

async function syncPostWhenTweet(ele: Element) {
    const baseColor = window.getComputedStyle(ele, '').backgroundColor;
    setTwitterColor(baseColor);

    ele.removeEventListener('click', syncPost); // if any, prevent multiple trigger
    ele.addEventListener('click', syncPost);
}

async function loadFiles(ele: Element) {
    ele.addEventListener('change', (): void => {
        const files = (<HTMLInputElement>ele).files;
        if (files?.[0]) {
            for (let i = 0; i < files.length; i++) {
                console.log(URL.createObjectURL(files[i]));
            }
        }
    });
}

const rss3BindRecords = new Map();

async function getRSS3BindAddress(username: string): Promise<string | undefined> {
    if (!rss3BindRecords.has(username)) {
        const userAddr = await reidInvite.bind.searchByUsername('twitter', username);
        rss3BindRecords.set(username, userAddr);
        return userAddr;
    } else {
        return rss3BindRecords.get(username);
    }
}

async function mountRSS3FollowButton(ele: Element) {
    let followStatus = false;

    const rss3 = await RSS3.get();

    let userAddr = await getRSS3BindAddress(window.location.pathname.replace('/', ''));
    if (rss3 && typeof userAddr !== 'undefined') {
        // User has joined and bind username

        let followList = await rss3.links.get(rss3.persona.id, 'following');
        console.log(followList);

        if (typeof followList === 'undefined') {
            followList = await rss3.links.post({
                type: 'following',
            });
        }
        if (followList?.list?.includes(userAddr)) {
            followStatus = true;
        }

        if (document.getElementById('reid-follow-button-toggle') === null) {
            const tweetButton = document.querySelector('[data-testid=SideNav_NewTweet_Button]');
            if (tweetButton !== null) {
                const baseColor = window.getComputedStyle(tweetButton, '').backgroundColor;
                setTwitterColor(baseColor);
            }

            ele.insertAdjacentHTML('beforebegin', TwitterButtonFollow);

            {
                // Listen events

                function updateFollowStatusClass(fostat: boolean) {
                    const twiBtnFoUut = document.getElementById('reid-follow');
                    if (twiBtnFoUut !== null) {
                        if (fostat) {
                            twiBtnFoUut.classList.add('active');
                        } else {
                            twiBtnFoUut.classList.remove('active');
                        }
                    }
                }

                async function toggleFollowStatus() {
                    followStatus = !followStatus;

                    if (typeof userAddr !== 'undefined') {
                        if (followStatus) {
                            await rss3?.link.post('following', userAddr);
                        } else {
                            await rss3?.link.delete('following', userAddr);
                        }
                    }
                    console.log(followList);

                    await rss3?.persona.sync();

                    updateFollowStatusClass(followStatus);
                }

                const twiBtnFoToUut = document.getElementById('reid-follow-button-toggle');
                if (twiBtnFoToUut !== null) {
                    twiBtnFoToUut.addEventListener('click', () => {
                        toggleFollowStatus();
                    });
                }
                setTimeout(() => {
                    updateFollowStatusClass(followStatus);
                }, 0);
            }
        }

        // Mount Re: ID logo after username
        document
            .querySelectorAll('main[role=main] div[data-testid=primaryColumn] div[dir=auto]')[7]
            ?.insertAdjacentHTML(
                'beforeend',
                `<span style='display: inline-flex; width: 1.2em;'>${ReIDLogoColor}</span>`,
            );
    }
}

async function identifyReIDUsers() {
    // Identify Re: ID user in home
    const allTweets = document.querySelectorAll('[data-testid=tweet]');

    for (const tweet of allTweets) {
        const userNameFiled = tweet.querySelectorAll('div > div > div > div > div > div > a[role=link]')[1];
        const userDisplayNameElement = userNameFiled.querySelector('div[dir=auto] > span');
        if (userDisplayNameElement !== null && userDisplayNameElement.querySelector('.reid-logo') === null) {
            const userName = userNameFiled.querySelector('div[dir=ltr] > span')?.innerHTML;
            if (typeof userName !== 'undefined') {
                const rss3Addr = await getRSS3BindAddress(userName.replace('@', ''));
                if (typeof rss3Addr !== 'undefined') {
                    userDisplayNameElement.insertAdjacentHTML(
                        'beforeend',
                        `<span class='reid-logo' style='display: inline-flex; width: 1.2em;'>${ReIDLogoColor}</span>`,
                    );
                }
            }
        }
    }
}

let initScrollTriggerReIdentify = true;

async function setIdentifyReIDUsersEvents() {
    if (initScrollTriggerReIdentify) {
        window.addEventListener('scroll', debounce(identifyReIDUsers, 100));
        initScrollTriggerReIdentify = false;
    }
    await identifyReIDUsers();
}

export default [
    {
        // Sync control button and expand box
        selector: '[data-testid="toolBar"] div',
        callback: mountControlButton,
    },
    {
        // Sync post when tweet
        selector: '[data-testid="tweetButtonInline"], [data-testid="tweetButton"]',
        callback: syncPostWhenTweet,
    },
    {
        // Load files (?)
        selector: '[data-testid="fileInput"]',
        callback: loadFiles,
    },
    {
        // Mount RSS3 on button
        selector: '[data-testid="placementTracking"]',
        callback: mountRSS3FollowButton,
    },
    {
        // Mount icon on Re: ID users' name
        selector: '[id^=accessible-list-]',
        callback: setIdentifyReIDUsersEvents,
    },
];
