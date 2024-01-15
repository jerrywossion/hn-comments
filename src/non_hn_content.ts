let url = document.URL;
chrome.storage.local.get(url).then((result) => {
    let id = result[url].id;
    if (id) {
        document.body.insertAdjacentHTML("beforeend",
            `<a target="_blank" href="https://news.ycombinator.com/item?id=${id}" style="padding: 10px; border-radius: 5px; background-color: orange; color: white; position: fixed; right: 20px; bottom: 20px;">HN Comments</a>`);
    }
});