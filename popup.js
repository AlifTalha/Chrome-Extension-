document.getElementById("toggleBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

    const url = tabs[0].url;

    // block restricted pages
    if (url.startsWith("chrome://")) {
      alert("Cannot run on this page");
      return;
    }

    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: toggleTheme
    });

  });
});

function toggleTheme() {
  const body = document.body;

  body.classList.toggle("my-dark-mode");

  let style = document.getElementById("dark-mode-style");

  if (!style) {
    style = document.createElement("style");
    style.id = "dark-mode-style";

    style.innerHTML = `
      .my-dark-mode {
        background-color: #121212 !important;
        color: #ffffff !important;
      }

      .my-dark-mode * {
        background-color: transparent !important;
        color: inherit !important;
      }

      .my-dark-mode input,
      .my-dark-mode textarea,
      .my-dark-mode select {
        background-color: #1e1e1e !important;
        color: #ffffff !important;
        border: 1px solid #555 !important;
      }

      .my-dark-mode a {
        color: #4da6ff !important;
      }
    `;

    document.head.appendChild(style);
  }
}