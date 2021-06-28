import reidInvite from './invite';
import RSS3 from './rss3';

async function allow() {
    return new Promise<boolean>(async (resolve) => {
        const rss3 = await RSS3.get();
        if (rss3) {
            if (await reidInvite.check(rss3.persona.id)) {
                resolve(true);
            } else {
                resolve(false);
            }
        } else {
            resolve(false);
        }
    });
}

export default {
    allow: () => {
        return allow();
    },
    get: async (): Promise<boolean> => {
        return new Promise<boolean>(async (resolve) => {
            if (await allow()) {
                chrome.storage.sync.get(['sync-disabled'], async (result) => {
                    resolve(!result['sync-disabled']);
                });
            } else {
                resolve(false);
            }
        });
    },

    set: async (status: boolean): Promise<boolean> => {
        return new Promise<boolean>(async (resolve) => {
            if (!status || (await allow())) {
                chrome.storage.sync.set(
                    {
                        'sync-disabled': !status,
                    },
                    () => {
                        resolve(true);
                    },
                );
            } else {
                resolve(false);
            }
        });
    },
};
