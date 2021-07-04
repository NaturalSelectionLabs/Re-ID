import { observe } from './utils';
import './locationChange';

import syncControl from '@/common/sync-control';

import twitterHandlers from './handlers/twitter';

(async () => {
    if (await syncControl.allow()) {
        switch (new URL(window.location.href).host) {
            case 'twitter.com':
                twitterHandlers.forEach((h) => {
                    observe(h.selector, h.callback);
                });
                break;
            default:
                // Not supported
                break;
        }
    }
})();
