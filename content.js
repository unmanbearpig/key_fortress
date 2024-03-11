document.addEventListener("keydown", function(event) {
  var blockedKeys = ["F5", "Ctrl+R", "Ctrl+U", "Ctrl+Shift+I"];
  if (blockedKeys.includes(event.key) || blockedKeys.includes(getKeyCombination(event))) {
    event.preventDefault();
    event.stopPropagation();
  }
});

function getKeyCombination(event) {
  var keyCombination = "";
  if (event.ctrlKey) keyCombination += "Ctrl+";
  if (event.altKey) keyCombination += "Alt+";
  if (event.shiftKey) keyCombination += "Shift+";
  keyCombination += event.key;
  return keyCombination;
}
