import { observe } from './utils';
import './locationChange';
import { TwitterButtonSync, twitterColorStyle } from './components';
import ipfs from '@/common/ipfs';
import RSS3 from '@/common/rss3';
import syncControl from '@/common/sync-control';

(async () => {
    if (await syncControl.allow()) {
        observe('[data-testid="toolBar"] div', async (ele: Element) => {
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
        });

        // Sync post area

        const syncPost = async () => {
            const summary = (<HTMLElement>document.querySelector('.public-DraftStyleDefault-block'))?.innerText;

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
                    await rss3.item.post({
                        summary,
                        tags: ['Re: ID', 'Twitter'],
                        contents,
                    });
                    await rss3.persona.sync();
                }
            }
        };

        observe('[data-testid="tweetButtonInline"], [data-testid="tweetButton"]', (ele: Element): void => {
            const baseColor = window.getComputedStyle(ele, '').backgroundColor;
            const hoverBG = baseColor.replace('rgb(', 'rgba(').replace(')', ', 0.1)');
            document.body.insertAdjacentHTML('beforeend', twitterColorStyle(baseColor, hoverBG));

            ele.removeEventListener('click', syncPost); // if any, prevent multiple trigger
            ele.addEventListener('click', syncPost);
        });

        observe('[data-testid="fileInput"]', (ele: Element): void => {
            ele.addEventListener('change', (): void => {
                const files = (<HTMLInputElement>ele).files;
                if (files?.[0]) {
                    for (let i = 0; i < files.length; i++) {
                        console.log(URL.createObjectURL(files[i]));
                    }
                }
            });
        });
    }
})();
