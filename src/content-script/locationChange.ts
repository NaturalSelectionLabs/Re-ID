// What if user clicks something and href changes?
let lastHref = window.location.href;
document.addEventListener('click', () => {
    if (lastHref !== '' && lastHref !== window.location.href) {
        // Location changed
        window.dispatchEvent(new Event('locationchange'));
    }
    lastHref = window.location.href;
});
