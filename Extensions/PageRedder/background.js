chrome.browserAction.onClicked.addListener(function(tab) {
  alert(tab.query);

  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
})