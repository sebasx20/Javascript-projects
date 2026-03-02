const cookie = document.getElementById("btn");
const containerHidder = document.getElementById("cookie-popup");

cookie.addEventListener("click", (e) => {
  document.cookie = "user=CookiesAceptadas";
  containerHidder.classList.add("hide");
});

// alert(document.cookie);
// document.cookie = "user=CookiesAceptadas; max-age=0";
