import { observe } from './utils';
import './locationChange';
import { TwitterButtonSync, twitterColorStyle } from './components';

observe(
    '[data-testid="primaryColumn"] [data-testid="toolBar"] div',
    (ele: Element): void => {
        if (document.getElementById('reid-sync-active-status') === null) {
            ele.insertAdjacentHTML('beforeend', TwitterButtonSync);

            {
                // Listen events
                function updateSyncStatusClass(enabled: boolean) {
                    const twiBtnSyncUut = document.getElementById(
                        'reid-sync-active-status',
                    );
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
                chrome.storage.sync.get(
                    ['reid-twitter-sync-enabled'],
                    (result) => {
                        const enabled = result['reid-twitter-sync-enabled'];
                        if (typeof enabled !== 'undefined') {
                            updateSyncStatusClass(enabled);
                        }
                    },
                );
                const twiBtnSyncEnaUut = document.getElementById(
                    'reid-sync-button-activate',
                );
                if (twiBtnSyncEnaUut !== null) {
                    twiBtnSyncEnaUut.addEventListener('click', () => {
                        setRSS3Sync(true);
                    });
                }
                const twiBtnSyncDeUut = document.getElementById(
                    'reid-sync-button-deactivate',
                );
                if (twiBtnSyncDeUut !== null) {
                    twiBtnSyncDeUut.addEventListener('click', () => {
                        setRSS3Sync(false);
                    });
                }
            }
        }
    },
);

// Sync post area

observe('[data-testid="tweetButtonInline"]', (ele: Element): void => {
    const tweetButton = document.querySelector(
        '[data-testid=tweetButtonInline]',
    );
    if (tweetButton != null) {
        const baseColor = window.getComputedStyle(
            tweetButton,
            '',
        ).backgroundColor;
        const hoverBG = baseColor
            .replace('rgb(', 'rgba(')
            .replace(')', ', 0.1)');
        document.body.insertAdjacentHTML(
            'beforeend',
            twitterColorStyle(baseColor, hoverBG),
        );
    }

    ele.addEventListener('click', (): void => {
        const text = (<HTMLElement>(
            document.querySelector('.public-DraftStyleDefault-block')
        ))?.innerText;
        console.log(text);

        const attachments = document.querySelectorAll(
            '[data-testid="attachments"] img, [data-testid="attachments"] source',
        );
        attachments.forEach(async (attachment) => {
            await fetch(
                (<HTMLImageElement | HTMLSourceElement>attachment).src,
            ).then(async (r) => {
                const blob = await r.blob();
                console.log(blob);
            });
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
