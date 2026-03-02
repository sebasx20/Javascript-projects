const accor = document.getElementsByClassName("accordion");
const panel = document.getElementsByClassName("panel");

for (let el of accor) {
  el.addEventListener("click", (e) => {
    // select the panel for the corresponding accordion
    let temp = el.nextElementSibling;
    // Remove active from another panels
    for (let item of panel) if (item != temp) item.classList.remove("active");
    // Allow toggle the active class
    temp.classList.toggle("active");
  });
}

// For the one line of an of https://stackoverflow.com/questions/22876341/is-it-correct-to-use-one-line-for-loop-in-javascript-without-curly-brackets
