import { observe } from './utils';

observe('[data-testid="toolBar"] div', (ele) => {
    ele.insertAdjacentHTML('beforeend', '<div id="reid">R</div>');
});

observe('[data-testid="tweetButtonInline"]', (ele) => {
    document.addEventListener('click', () => {
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
                const bolb = await r.blob();
                console.log(bolb);
            });
        });
    });
});

observe('[data-testid="fileInput"]', (ele) => {
    ele.addEventListener('change', () => {
        const files = (<HTMLInputElement>ele).files;
        if (files?.[0]) {
            for (let i = 0; i < files.length; i++) {
                console.log(URL.createObjectURL(files[i]));
            }
        }
    });
});
