const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookies = document.querySelector(".cookie-card");

acceptCookie.addEventListener("click", fjernCookie);
denyCookie.addEventListener("click", fjernCookie);

function fjernCookie() {
  /*  console.log("hej"); */
  cookies.classList.add("hidden");
  sessionStorage.setItem("jatilcookies", true);
  console.log(sessionStorage.getItem("jatilcookies"));
}

if (sessionStorage.getItem("jatilcookies")) {
  cookies.classList.add("hidden");
}
