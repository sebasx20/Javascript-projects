const funit = document.getElementById("from-unit");
const tunit = document.getElementById("to-unit");
const number = document.getElementById("number");
const btn = document.getElementById("btn-convert");
const result = document.getElementById("result-convert");
let i, f, t;

activeBtn();

number.addEventListener("input", () => {
  number.value == "" ? (i = false) : (i = true);
  activeBtn();
});

tunit.addEventListener("input", () => {
  t = true;
  activeBtn();
});

// Hidde the selected temperature on To unit
funit.addEventListener("input", () => {
  for (let i = 1; i < tunit.length; i++) {
    tunit[i].removeAttribute("hidden", "");
  }
  tunit[funit.selectedIndex].setAttribute("hidden", "");
  f = true;
  activeBtn();
});

// verify if all the three inputs are selected
function activeBtn() {
  console.log(i, f, t);
  if (!i || !f || !t) {
    btn.setAttribute("disabled", "");
  } else {
    btn.removeAttribute("disabled", "");
  }
}

// Temperature converter
btn.addEventListener("click", () => {
  let num = Number(number.value);
  switch (tunit.value) {
    case "Fahrenheit":
      if (funit.value == "Celseus") {
        let n = Math.round((num * 1.8 + 32 + Number.EPSILON) * 100) / 100;
        resultText(n);
      }
      if (funit.value == "Kelvin") {
        let i = ((num - 273.15) * 9) / 5 + 32;
        let n = Math.round((i + +Number.EPSILON) * 100) / 100;
        resultText(n);
      }
      break;
    case "Celseus":
      if (funit.value == "Fahrenheit") {
        let n = Math.round(((num - 32) / 1.8 + Number.EPSILON) * 100) / 100;
        resultText(n);
      }
      if (funit.value == "Kelvin") {
        let n = Math.round((num - 273.15 + Number.EPSILON) * 100) / 100;
        resultText(n);
      }
      break;
    case "Kelvin":
      if (funit.value == "Fahrenheit") {
        let i = (num + 459.67) / 1.8;
        let n = Math.round((i + Number.EPSILON) * 100) / 100;
        resultText(n);
      }
      if (funit.value == "Celseus") {
        let i = num + 273.15;
        let n = Math.round((i + Number.EPSILON) * 100) / 100;
        resultText(n);
      }
  }
});

function resultText(n) {
  result.innerHTML = `${number.value} ${funit.value} is ${n} ${tunit.value}`;
}
