let athings = document.getElementsByClassName("athing");
for (let athing of athings) {
    let id = athing.id;
    let titlelines = athing.getElementsByClassName("titleline");
    if (titlelines.length <= 0) {
        continue;
    }
    let a_s = titlelines[0].getElementsByTagName("a");
    if (a_s.length <= 0) {
        continue;
    }
    let a = a_s[0];
    let href = a.href;
    a.addEventListener('click', (e) => {
        e.preventDefault();
        chrome.storage.local.set({ [href]: {id, timestamp: Date.now()} }).then(() => {
            (async () => {
                let _ = chrome.runtime.sendMessage({ method: "openUrl", url: href });
            })();
            chrome.storage.local.get().then((result) => {
                for (let key in result) {
                    let value = result[key];
                    let timestamp = value.timestamp;
                    if (timestamp && Date.now() - timestamp > 7 * 24 * 60 * 60 * 1000) {
                        chrome.storage.local.remove(key);
                    }
                }
            });
        });
    })
}
