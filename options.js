document.addEventListener('DOMContentLoaded', function () {
  // Fetch the current disabled hotkeys from browser storage and update the textarea
  browser.storage.sync.get('disabledHotkeys').then((result) => {
    if (result.disabledHotkeys) {
      document.getElementById('jsonInput').value = JSON.stringify(result.disabledHotkeys, null, 2);
    }
  }).catch((error) => {
    console.error('Error retrieving disabled hotkeys:', error);
  });

  // Save button click handler
  document.getElementById('saveButton').addEventListener('click', function () {
    const jsonInput = document.getElementById('jsonInput').value;
    let disabledHotkeys;
    try {
      // Attempt to parse the JSON input
      disabledHotkeys = JSON.parse(jsonInput);
    } catch (error) {
      console.error('Invalid JSON input:', error);
      return;
    }

    // Store the updated disabled hotkeys in browser storage
    browser.storage.sync.set({ 'disabledHotkeys': disabledHotkeys }).then(() => {
      console.log('Disabled hotkeys saved successfully');
    }).catch((error) => {
      console.error('Error saving disabled hotkeys:', error);
    });
  });
});
