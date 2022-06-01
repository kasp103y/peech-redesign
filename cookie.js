const burger = document.querySelector(".hamburger");
const burgerContent = document.querySelector(".burger-content");
const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookies = document.querySelector(".cookie-card");

burger.addEventListener("click", showBurger);
acceptCookie.addEventListener("click", fjernCookie);
denyCookie.addEventListener("click", fjernCookie);

function showBurger() {
  console.log("Hej burger");
  burger.classList.toggle("open");
  burgerContent.classList.toggle("open");
}

function fjernCookie() {
  /*  console.log("hej"); */
  cookies.classList.add("hidden");
  sessionStorage.setItem("jatilcookies", true);
  console.log(sessionStorage.getItem("jatilcookies"));
}

if (sessionStorage.getItem("jatilcookies")) {
  cookies.classList.add("hidden");
}
