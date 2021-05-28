import { debounce } from 'lodash';

const interval = 200;
const maxCount = 10000 / interval;
export function observe(selector: string, callback: (ele: Element) => void) {
    let observer: MutationObserver;
    let cache: Element;
    const cbk = (result: Element) => {
        if (result !== cache) {
            cache = result;
            callback(result);
        }
    };
    const run = () => {
        let currentCount = 0;
        const result = document.querySelector(selector);
        if (result) {
            cbk(result);
        } else {
            if (observer) {
                observer.disconnect();
            }
            observer = new MutationObserver(
                debounce(() => {
                    const result = document.querySelector(selector);
                    if (result) {
                        observer.disconnect();
                        cbk(result);
                    } else if (currentCount > maxCount) {
                        observer.disconnect();
                    } else {
                        currentCount++;
                    }
                }, interval),
            );
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        }
    };

    run();

    window.addEventListener('locationchange', () => {
        setTimeout(() => {
            run();
        }, 0);
    });
}
