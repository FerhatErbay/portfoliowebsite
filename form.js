const scriptURL =
  "https://script.google.com/macros/s/AKfycbznXceXpU8cFOVpM3hKw-m5qxnqwSVXl2zL3Xsk3jivLlRCIV3n5E5eKO42f5PzYuqn/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Your message sent successfully!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
