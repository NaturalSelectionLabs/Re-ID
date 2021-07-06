import axios from 'axios';

const inviteEndpoint = 'https://re-id-invite-database-q335m.ondigitalocean.app';
// const inviteEndpoint = 'http://localhost:8080';

let msg = '';

export default {
    check: async (addr: string): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
            chrome.storage.sync.get(['invited'], async (result) => {
                if (result.invited) {
                    resolve(true);
                } else {
                    const res = await axios.get(inviteEndpoint + '/check/' + addr);
                    if (res.data.ok) {
                        chrome.storage.sync.set({
                            invited: true,
                        });
                    }
                    msg = res.data.message;
                    resolve(res.data.ok);
                }
            });
        });
    },

    new: async (inviter: string, invitee: string): Promise<boolean> => {
        const res = await axios.post(inviteEndpoint + '/new', {
            from: inviter,
            address: invitee,
        });
        msg = res.data.message;
        return res.data.ok;
    },

    msg: (): string => {
        return msg;
    },
};
