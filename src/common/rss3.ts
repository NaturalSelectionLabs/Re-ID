import RSS3 from 'rss3';

let rss3: RSS3;

export default {
    get: () => {
        if (rss3) {
            return new Promise<RSS3>((resolve) => {
                resolve(rss3);
            });
        } else {
            return new Promise<RSS3>((resolve) => {
                chrome.storage.sync.get(['privateKey'], (result) => {
                    rss3 = new RSS3({
                        endpoint: 'https://hub.rss3.io/',
                        privateKey: result.privateKey,
                    });
                    if (!result.privateKey) {
                        chrome.storage.sync.set({
                            privateKey: rss3.persona.privateKey,
                        });
                    }
                    resolve(rss3);
                });
            });
        }
    },
};
