const ReIDLogoOutlined = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1118.7 1118.7"><g id="Layer_3"><path class="cls-1" d="M855.41,275.82a154.42,154.42,0,0,1,154.42,154.43V686.93c0,1.37,0,2.57-.05,3.66l0,.94,0,1a1.55,1.55,0,0,0,0,.22,158,158,0,0,1-3.45,27.34l-.33,1.46c-.05.2-.09.4-.14.59-.4,1.69-.85,3.47-1.37,5.43-.38,1.4-.71,2.54-1,3.57-.55,1.84-1.14,3.7-1.75,5.51-.33,1-.67,1.93-1,2.86a.76.76,0,0,1,0,.11,156.26,156.26,0,0,1-147,103.23h-339l-165-.76a70,70,0,0,0,9.25-35q-.14-40.26-.22-80.51l-.06-26.16q-.21-76.55-.41-153.09A271.33,271.33,0,0,1,629.85,275.82H855.41m0-70H629.85c-188.67,0-341.61,153-341.61,341.61q.19,76.62.41,153.22.14,53.34.28,106.7-47.82,52-95.65,104.07,160.59.69,321.21,1.46H853.61c98,0,181.45-62.32,212.87-149.5q.75-2.07,1.47-4.17c.91-2.7,1.78-5.44,2.6-8.19q.75-2.55,1.45-5.12c.72-2.7,1.41-5.42,2-8.15l0-.14c.2-.85.39-1.7.58-2.56a226.77,226.77,0,0,0,5-39.64c0-1,.06-1.94.09-2.91,0-1.85.07-3.7.07-5.57V430.25c0-123.95-100.48-224.43-224.42-224.43Z"/><path class="cls-1" d="M132.55,770.41c-22.22,0-44.19,14.11-45.66,43.09-.07,1.61-.14,3.21-.14,4.82-1.6,0-3.21,0-4.78.1-59.72,3-56.28,93.08,3.55,93.08h94.41V817.05c0-30.79-23.83-46.65-47.38-46.64Z"/><path class="cls-1" d="M920.57,592.47c-14.66,0-26.56,12.15-26.56,27.18V739.13c0,15,11.9,27.13,26.56,27.13s26.54-12.15,26.54-27.13V619.65a27.37,27.37,0,0,0-7.77-19.23,26.13,26.13,0,0,0-18.77-7.95Z"/></g></svg>
`;

const ReIDLogoWhite = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16.3"><path class="a" d="M2.16,13a1,1,0,0,0-1,1s0,.08,0,.11H1a1.07,1.07,0,0,0,.09,2.14H3.25V14.09A1,1,0,0,0,2.16,13Z" transform="translate(0)"/><path class="a" d="M18.83,0h-5.2A7.88,7.88,0,0,0,5.75,7.88c0,1.17,0,2.35,0,3.53,0,.82,0,1.64,0,2.46l-2.21,2.4,7.41,0h7.82a5.2,5.2,0,0,0,4.9-3.44.69.69,0,0,0,0-.1l.06-.19,0-.12c0-.06,0-.12.05-.18h0V12.2a5.53,5.53,0,0,0,.12-.91V5.17A5.18,5.18,0,0,0,18.83,0Zm2.11,12.3a.61.61,0,1,1-1.22,0V9.54a.61.61,0,0,1,.61-.62.59.59,0,0,1,.23,0,.48.48,0,0,1,.2.14.62.62,0,0,1,.18.44Z"/></svg>
`;

export const TwitterButtonSync = `

<style>
#reid-sync-switch {
    border-width: 1px;
    border-radius: 50%;
    transition-duration: 0.2s;
    font-family: sans-serif, 'SansSerif';
}

#reid-sync-switch:hover {
    background-color: var(--twitter-theme-hover-background);
}

#reid-sync-switch > div.button {
    min-width: 40px;
    min-height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
}

#reid-sync-switch > div.button > svg {
    width: 1.5em;
    height: 1.5em;
    margin: auto;
    fill: var(--twitter-theme-color);
}

#reid-sync-switch .switch-wrapper {
    display: none;
}

#reid-sync-switch:hover .switch-wrapper {
    position: absolute;
    width: 256px;
    left: calc(50% - 20px);
    background: #ffffff;
    /* Drop Shadow */
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 10px;
    display: block;
}

#reid-sync-switch .switch-wrapper::before {
    position: absolute;
    width: 0;
    height: 0;
    vertical-align: top;
    content: '';
    right: calc(50% + 6px);
    top: -6px;
    border-bottom: 6px solid #ffffff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
}
#reid-sync-switch .switch-wrapper .card-title {
    margin: 15px 20px 0;
}
#reid-sync-switch .switch-wrapper .card-title > h2 {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-block-end: 0.5em;
}
#reid-sync-switch .switch-wrapper .card-title > span {
    font-size: 12px;
    font-weight: 500;
    color: #3c3c4399;
}
#reid-sync-switch .switch-wrapper .card-body ul.switch {
    list-style: none;
    padding-inline-start: 0;
}
#reid-sync-switch .switch-wrapper .card-body ul.switch > li {
    transition-duration: 0.2s;
    padding: 8px 0 8px 45px;
    position: relative;
    cursor: pointer;
}
#reid-sync-switch .switch-wrapper .card-body ul.switch > li:hover {
    background: #edf5fd;
}
#reid-sync-switch .switch-wrapper .card-body ul.switch > li::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    left: 30px;
    top: calc(50% - 2px);
    background: #3c3c434d;
    border-radius: 50%;
}
#reid-sync-switch .switch-wrapper .card-body ul.switch.active > li.only-active::before, 
#reid-sync-switch .switch-wrapper .card-body ul.switch:not(.active) > li.no-active::before {
    background: #b2f55d;
}
#reid-sync-switch .switch-wrapper .card-body ul.switch.active > li.only-active::after, 
#reid-sync-switch .switch-wrapper .card-body ul.switch:not(.active) > li.no-active::after {
    content: '\\2714';
    position: absolute;
    right: 50px;
    top: calc(50% - 10px);
    color: var(--twitter-theme-color);
}
</style>
<div id="reid-sync-switch">
    <div class="button">
        ${ReIDLogoOutlined}
    </div>
    
    <div class="switch-wrapper">
        <div class="card-title">
            <h2>Sync to RSS3 file?</h2>
            <span> Toggle RSS3 file syncing for this post</span>
        </div>
        <div class="card-body">
            <ul class="reid-sync-active-status switch">
                <li class="reid-sync-button-activate only-active">
                    <div>Syncing on</div>
                </li>
                <li class="reid-sync-button-deactivate no-active">
                    <div>Syncing off</div>
                </li>
            </ul>
        </div>
    </div>
</div>
`;

export const twitterColorStyle = (color: string, hoverBG: string) => {
    return `
<style>
    :root {
        --twitter-theme-color: ${color};
        --twitter-theme-hover-background: ${hoverBG};
    }
</style>
`;
};

export const TwitterButtonFollow = `
<div id="reid-follow">
    <div id="reid-follow-button-toggle" class="button">
        <div class="only-active">
            ${ReIDLogoWhite}
        </div>
        <div class="no-active">
            ${ReIDLogoOutlined}
        </div>
    </div>
</div>
<style>
#reid-follow {
    border: 1px solid #1da1f2;
    border-radius: 50%;
    transition-duration: 0.2s;
    margin-right: 8px;
    margin-bottom: 12px;
    display: flex;
}
#reid-follow:hover {
    background-color: rgba(29, 191, 242, 0.1);
}
#reid-follow > div.button {
    min-width: 40px;
    min-height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
}
#reid-follow > div.button div {
    margin: auto;
}
#reid-follow > div.button svg {
    width: 1.5em;
    height: 1.5em;
    fill: rgba(29, 161, 242, 1);
}
#reid-follow.active {
    border-color: transparent;
    background-color: #1da1f2;
}
#reid-follow.active > div svg {
    fill: #fff;
}
#reid-follow:not(.active) .only-active, 
#reid-follow.active .no-active {
    display: none;
}
</style>
`;
