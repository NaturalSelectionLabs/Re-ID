import { TwitterButtonSync, twitterColorStyle, TwitterButtonFollow } from '@/content-script/components/twitter';
import syncControl from '@/common/sync-control';
import ipfs from '@/common/ipfs';
import RSS3 from '@/common/rss3';
import reidInvite from '@/common/invite';

const checkBind = async (address: string, privateKey: string) => {
    const username = (<HTMLAnchorElement>document.querySelector('main[role=main] a[role=link]'))?.pathname.replace(
        '/',
        '',
    );
    if (username) {
        // send bind request
        await reidInvite.bind.new(address, 'twitter', username, privateKey);
    }
};

const syncPost = async () => {
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
};

export default [
    {
        selector: '[data-testid="toolBar"] div',
        callback: async (ele: Element) => {
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
        },
    },
    {
        selector: '[data-testid="tweetButtonInline"], [data-testid="tweetButton"]',
        callback: (ele: Element): void => {
            const baseColor = window.getComputedStyle(ele, '').backgroundColor;
            const hoverBG = baseColor.replace('rgb(', 'rgba(').replace(')', ', 0.1)');
            document.body.insertAdjacentHTML('beforeend', twitterColorStyle(baseColor, hoverBG));

            ele.removeEventListener('click', syncPost); // if any, prevent multiple trigger
            ele.addEventListener('click', syncPost);
        },
    },
    {
        selector: '[data-testid="fileInput"]',
        callback: (ele: Element): void => {
            ele.addEventListener('change', (): void => {
                const files = (<HTMLInputElement>ele).files;
                if (files?.[0]) {
                    for (let i = 0; i < files.length; i++) {
                        console.log(URL.createObjectURL(files[i]));
                    }
                }
            });
        },
    },
    {
        selector: '[data-testid="placementTracking"]',
        callback: async (ele: Element): Promise<void> => {
            let followStatus = false;

            const rss3 = await RSS3.get();

            let userAddr = await reidInvite.bind.searchByUsername('twitter', window.location.pathname.replace('/', ''));
            if (rss3 && typeof userAddr !== 'undefined') {
                // User has joined and bind username

                let followList = await rss3.links.get(rss3.persona.id, 'following');
                console.log(followList);

                if (typeof followList === 'undefined') {
                    followList = await rss3.links.post({
                        type: 'following',
                    });
                }
                // todo: 这里不知道返回回来的是不是数组，所以只能 ts-ignore 一下（有什么合适的处理方案喵？）
                // @ts-ignore
                if (followList?.list?.includes(userAddr)) {
                    followStatus = true;
                }

                if (document.getElementById('reid-follow-button-toggle') === null) {
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

                            if (followStatus) {
                                await rss3?.link.post('following', userAddr);
                            } else {
                                await rss3?.link.delete('following', userAddr);
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
            }
        },
    },
];
