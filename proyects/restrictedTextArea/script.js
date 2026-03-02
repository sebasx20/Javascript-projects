const count = document.getElementById("char-counter");
const textarea = document.getElementById("textarea");
const red = document.getElementById("count");

textarea.addEventListener("input", (e) => {
  if (textarea.value.length == textarea.maxLength) {
    red.classList.add("red");
    textarea.classList.add("max-length");
  } else {
    red.classList.remove("red");
    textarea.classList.remove("max-length");
  }
  count.innerHTML = textarea.value.length;
  // give the style when the max-Length is reached
});
