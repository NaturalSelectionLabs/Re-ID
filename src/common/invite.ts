import axios from 'axios';
const Accounts = require('web3-eth-accounts');

// const inviteEndpoint = 'https://re-id-invite-database-q335m.ondigitalocean.app';
const inviteEndpoint = 'http://localhost:8080';

let msg = '';

const accounts = new Accounts();

export default {
    invite: {
        check: async (addr: string): Promise<boolean> => {
            return new Promise<boolean>((resolve) => {
                chrome.storage.sync.get(['invited'], async (result) => {
                    if (result.invited) {
                        resolve(true);
                    } else {
                        const res = await axios.get(inviteEndpoint + '/invite/check/' + addr);
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

        new: async (inviter: string, invitee: string, inviterKey: string): Promise<boolean> => {
            const res = await axios.post(inviteEndpoint + '/invite/new', {
                from: inviter,
                address: invitee,
                signature: accounts.sign('Invite' + invitee, inviterKey).signature,
            });
            msg = res.data.message;
            return res.data.ok;
        },

        msg: (): string => {
            return msg;
        },
    },

    bind: {
        new: async (address: string, platform: string, username: string, privateKey: string): Promise<boolean> => {
            const res = await axios.post(inviteEndpoint + '/bind/bind', {
                address: address,
                platform: platform,
                username: username,
                signature: accounts.sign(`${platform}:${username}`, privateKey).signature,
            });
            msg = res.data.message;
            return res.data.ok;
        },

        searchByUsername: async (platform: string, username: string): Promise<string> => {
            const res = await axios.get(inviteEndpoint + '/bind/' + platform + '/username/' + username);
            msg = res.data.message;
            return res.data.data;
        },

        searchByAddress: async (platform: string, address: string): Promise<string> => {
            const res = await axios.get(inviteEndpoint + '/bind/' + platform + '/address/' + address);
            msg = res.data.message;
            return res.data.data;
        },

        msg: (): string => {
            return msg;
        },
    },
};
