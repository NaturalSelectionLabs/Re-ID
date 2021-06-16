import axios from 'axios';

const inviteEndpoint = 'https://re-id-invite-database-q335m.ondigitalocean.app';
// const inviteEndpoint = 'http://localhost:8080';

export default {
    check: async (addr: string): Promise<boolean> => {
        const res = await axios.get(inviteEndpoint + '/check/' + addr);
        return res.data.ok;
    },

    new: async (inviter: string, invitee: string): Promise<boolean> => {
        const res = await axios.post(inviteEndpoint + '/new', {
            from: inviter,
            address: invitee,
        });
        return res.data.ok;
    },
};
