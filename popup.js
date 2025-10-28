document.getElementById("getTitle").addEventListener("click", async () => {
  // Query the current active tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  // Display the tab title
  document.getElementById("title").textContent = tab.title;
});
