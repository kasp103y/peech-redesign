const burger = document.querySelector(".burger");
const burgerContent = document.querySelector(".burger-content");
const noticeMeSenpai = document.querySelector(".notice");

burger.addEventListener("click", showBurger);
window.addEventListener("scroll", removeArrow);

function showBurger() {
  burger.classList.toggle("open");
  burgerContent.classList.toggle("open");
}

function removeArrow() {
  noticeMeSenpai;
  noticeMeSenpai.classList.toggle("hide", window.scrollY > 0);
  console.log("hej");
}
