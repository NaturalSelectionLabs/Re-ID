import RSS3 from 'rss3';

let rss3: RSS3 | null;

export type IRSS3 = RSS3;

export default {
    set: (privateKey?: string) => {
        const config: {
            endpoint: string;
            privateKey?: string;
        } = {
            endpoint: 'https://hub.rss3.io',
        };
        if (privateKey) {
            config.privateKey = privateKey;
        }
        rss3 = new RSS3(config);
        chrome.storage.sync.set({
            privateKey: rss3.persona.privateKey,
        });
        return rss3;
    },
    get: () => {
        return new Promise<RSS3 | null>((resolve) => {
            if (rss3) {
                resolve(rss3);
            } else {
                chrome.storage.sync.get(['privateKey'], (result) => {
                    if (result.privateKey) {
                        rss3 = new RSS3({
                            endpoint: 'https://hub.rss3.io',
                            privateKey: result.privateKey,
                        });
                    }
                    resolve(rss3);
                });
            }
        });
    },
    clear: () => {
        return new Promise<null>((resolve) => {
            rss3 = null;
            chrome.storage.sync.remove('privateKey', () => {
                resolve(null);
            });
        });
    },
};
