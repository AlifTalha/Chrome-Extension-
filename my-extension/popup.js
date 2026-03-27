document.getElementById("fillBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;

    // ❌ block chrome pages
    if (url.startsWith("chrome://")) {
      alert("Cannot run on this page");
      return;
    }

    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: fillForm
    });
  });
});

function fillForm() {
  // 🔥 smarter selectors
  const nameInput = document.querySelector(
    "input[name*='name'], input[id*='name'], input[placeholder*='Name']"
  );

const emailInput = document.querySelector(
  "input[type='email'], input[name*='email'], input[id*='email'], input[placeholder*='Email']"
);

const phoneInput = document.querySelector(
  "input[id*='phone'], input[name*='phone'], input[placeholder*='phone'], input[type='tel']"
);

  if (nameInput) nameInput.value = "Alif Hossain Talha";
  if (emailInput) emailInput.value = "hossainalif696@gmail.com";
  if (phoneInput) phoneInput.value = "01791840715";

  console.log("Form filled ");
}

