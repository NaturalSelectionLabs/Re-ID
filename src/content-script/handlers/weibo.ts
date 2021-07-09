import ipfs from '@/common/ipfs';
import syncControl from '@/common/sync-control';
import RSS3 from '@/common/rss3';
import { WeiboButtonSync } from '@/content-script/components/weibo';
import { RSS3ItemInput } from 'rss3/types/rss3';

const syncPost = async () => {
    const summary = (<HTMLTextAreaElement>(
        (<HTMLElement>document.querySelector('.wbpro-form')?.getElementsByTagName('textarea')[0])
    ))?.value;

    const attachments = document.querySelectorAll(
        '#homeWrap > .woo-panel-main .woo-box-item-inlineBlock .woo-picture-main > img.woo-picture-img',
    );

    const contents = await Promise.all(
        [...attachments].map(async (attachment) => {
            const result = await fetch((<HTMLImageElement | HTMLSourceElement>attachment).src, {
                mode: 'no-cors',
            });
            const blob = await result.blob();
            return {
                address: [await ipfs.upload(blob)],
                mime_type: blob.type,
                size_in_bytes: blob.size.toString(),
            };
        }),
    );

    if (await syncControl.get()) {
        const rss3 = await RSS3.get();
        if (rss3) {
            const tags = ['Re: ID', 'Weibo'];
            const tagsInWB = [...summary?.matchAll(/#(\S+)#/g)];
            tagsInWB.forEach((tagMatch) => {
                tags.push(tagMatch[1]);
            });
            await rss3.item.post({
                summary,
                tags,
                contents,
            });
            await rss3.persona.sync();
        }
    }
};

export default [
    {
        selector: '#homeWrap > .woo-panel-main .woo-box-item-flex > div',
        callback: async (ele: Element) => {
            if (ele.lastElementChild?.id !== 'reid-sync-switch') {
                ele.insertAdjacentHTML('beforeend', WeiboButtonSync);

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
        selector: '#homeWrap > .woo-panel-main .woo-button-main.woo-button-primary',
        callback: (ele: Element): void => {
            ele.removeEventListener('click', syncPost); // if any, prevent multiple trigger
            ele.addEventListener('click', syncPost);
        },
    },
];
