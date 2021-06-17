import { observe } from './utils';
import './locationChange';
import { TwitterButtonSync, twitterColorStyle } from './components';
import ipfs from '@/common/ipfs';
import RSS3 from '@/common/rss3';

observe('[data-testid="primaryColumn"] [data-testid="toolBar"] div', (ele: Element): void => {
    if (document.getElementById('reid-sync-active-status') === null) {
        ele.insertAdjacentHTML('beforeend', TwitterButtonSync);

        {
            // Listen events
            function updateSyncStatusClass(enabled: boolean) {
                const twiBtnSyncUut = document.getElementById('reid-sync-active-status');
                if (twiBtnSyncUut !== null) {
                    if (enabled) {
                        twiBtnSyncUut.classList.add('active');
                    } else {
                        twiBtnSyncUut.classList.remove('active');
                    }
                }
            }

            function setRSS3Sync(enabled: boolean) {
                updateSyncStatusClass(enabled);
                chrome.storage.sync.set({
                    'reid-twitter-sync-enabled': enabled,
                });
            }
            chrome.storage.sync.get(['reid-twitter-sync-enabled'], (result) => {
                const enabled = result['reid-twitter-sync-enabled'];
                if (typeof enabled !== 'undefined') {
                    updateSyncStatusClass(enabled);
                }
            });
            const twiBtnSyncEnaUut = document.getElementById('reid-sync-button-activate');
            if (twiBtnSyncEnaUut !== null) {
                twiBtnSyncEnaUut.addEventListener('click', () => {
                    setRSS3Sync(true);
                });
            }
            const twiBtnSyncDeUut = document.getElementById('reid-sync-button-deactivate');
            if (twiBtnSyncDeUut !== null) {
                twiBtnSyncDeUut.addEventListener('click', () => {
                    setRSS3Sync(false);
                });
            }
        }
    }
});

// Sync post area

observe('[data-testid="tweetButtonInline"]', (ele: Element): void => {
    const tweetButton = document.querySelector('[data-testid=tweetButtonInline]');
    if (tweetButton != null) {
        const baseColor = window.getComputedStyle(tweetButton, '').backgroundColor;
        const hoverBG = baseColor.replace('rgb(', 'rgba(').replace(')', ', 0.1)');
        document.body.insertAdjacentHTML('beforeend', twitterColorStyle(baseColor, hoverBG));
    }

    ele.addEventListener('click', async () => {
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

        chrome.storage.sync.get(['reid-twitter-sync-enabled'], async (result) => {
            const enabled = result['reid-twitter-sync-enabled'];
            if (enabled) {
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
        });
    });
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
