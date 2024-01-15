chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    const key = request.key;
    switch (request.method) {
      case "openUrl":
        if (request.url) {
          chrome.tabs.create({
            active: false,
            url: request.url
          });
          chrome.history.addUrl({url});
          sendResponse(`Ok: ${request.url}`)
        } else {
          sendResponse("Bad url");
        }
        if (sender.tab) {
          sender.tab.active = true;
        }
      default:
        break
    }
  }
);