// JavaScript code
// Get the necessary elements from the DOM
let original_link = document.getElementById('original_link');
let generateButton = document.getElementById('shorten_link');
let shorten_link = document.getElementById('generate');
let copy = document.getElementById('copy');

// Event listener for the generate button
generateButton.addEventListener('click', () => {
  let url = original_link.value;
  fetch(`https://api.shrtco.de/v2/shorten?url= ${URL}example.org/very/long/link.html`)
    .then((resp) => resp.json())
    .then((value) => {
      shorten_link.value = value.result.short_link;
    })
    .catch((error) => {
      shorten_link.value = "Something went wrong";
    });
});

// Enabling copy button
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(shorten_link.value);
  copy.innerHTML = "Copied!";

  setTimeout(() => {
    copy.innerHTML = "copy";
  }, 1000); // Corrected syntax: changed dot (.) to comma (,)
});
