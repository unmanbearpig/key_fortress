function loadblockedkeys() {
  var domain = window.location.hostname;

  browser.storage.sync.get("disabledHotkeys", function(data) {
    let domaindata = data.disabledHotkeys[domain];
    if (domaindata !== undefined) {
      window.blockedkeys = domaindata;
      document.addEventListener("keydown", processEvent, true);
    }
  });
}

function blockKeys(event) {
  var blockedKeys = window.blockedkeys;
  var keyCombination = getKeyCombination(event);
  if (blockedKeys.includes('all') || blockedKeys.includes(event.key) || blockedKeys.includes(keyCombination)) {
    console.log(`blocking key ${keyCombination}`)

    event.stopPropagation();
    event.stopImmediatePropagation();

    // these will prevent even the default browser behavior
    // event.preventDefault();
    // event.returnValue = false;

    return false;
  } else {
    // console.log(`not blocking key ${keyCombination}`)
  }
}

function processEvent(event) {
  blockKeys(event);
}

loadblockedkeys();

function getKeyCombination(event) {
  var keyCombination = "";
  if (event.ctrlKey) keyCombination += "Ctrl-";
  if (event.altKey) keyCombination += "Alt-";
  if (event.shiftKey) keyCombination += "Shift-";
  keyCombination += event.key;
  return keyCombination;
}
