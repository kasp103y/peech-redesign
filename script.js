const burger = document.querySelector(".burger");
const burgerContent = document.querySelector(".burger-content");
const noticeMeSenpai = document.querySelector(".notice");

burger.addEventListener("click", showBurger);

function showBurger() {
  burger.classList.toggle("open");
  burgerContent.classList.toggle("open");
}
