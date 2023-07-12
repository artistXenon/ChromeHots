chrome.runtime.onMessage.addListener((message) => {
    const { key, shift } = JSON.parse(message);
    chrome.bookmarks.getTree((t) => {
        const { url } = t[0]['children'][0]['children'][key === -1 ? 10 : key];
        if (!url) return;
        if (shift) {
            chrome.tabs.update(null, { url });
        } else {
            chrome.tabs.create({ url });
        }        
    });
});
