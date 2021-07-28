export type UserAccount = {
    avatar: string;
    name: string;
    address: string;
    privateKey?: string;
};

async function GetAccounts() {
    return new Promise<UserAccount[] | null>((resolve) => {
        chrome.storage.sync.get(['rss3accounts'], (accountsShowList) => {
            if (accountsShowList?.['rss3accounts']) {
                resolve(<UserAccount[]>accountsShowList['rss3accounts']);
            } else {
                resolve(null);
            }
        });
    });
}

export default {
    get: GetAccounts,
    set: async (account: UserAccount) => {
        const accountsList: UserAccount[] = (await GetAccounts()) || [];
        const userIndex = accountsList.findIndex((user) => {
            return user.privateKey === account.privateKey;
        });
        if (userIndex === -1) {
            // Do not exist
            accountsList.push(account);
        } else {
            // Update user info
            accountsList[userIndex] = account;
        }
        await chrome.storage.sync.set({
            rss3accounts: accountsList,
        });
    },
};
