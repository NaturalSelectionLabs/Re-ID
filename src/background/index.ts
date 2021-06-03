const supportedHost = ['twitter.com'];

function setIcon(url: string) {
    const host = new URL(url).host;
    if (supportedHost.indexOf(host) !== -1) {
        chrome.action.setIcon({
            path: {
                '16': 'images/icon16a.png',
                '24': 'images/icon24a.png',
                '32': 'images/icon32a.png',
            },
        });
    } else {
        chrome.action.setIcon({
            path: {
                '16': 'images/icon16.png',
                '24': 'images/icon24.png',
                '32': 'images/icon32.png',
            },
        });
    }
}
chrome.tabs.onActivated.addListener((tab) => {
    chrome.tabs.query(
        {
            active: true,
        },
        (tab) => {
            if (tab?.[0]?.url) {
                setIcon(tab[0].url);
            }
        },
    );
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.active) {
        setIcon(changeInfo.url);
    }
});
