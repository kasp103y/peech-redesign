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

const dropDownBtn = document.querySelector(".dropdown");
dropDownBtn.addEventListener("mouseover", dropDown);
dropDownBtn.addEventListener("mouseleave", dropDownHide);
dropDownBtn.addEventListener("click", dropDown);
window.addEventListener("click", dropDownHide);

function dropDown() {
  document.querySelector(".dropdown-content").classList.add("show");
}

function dropDownHide() {
  document.querySelector(".dropdown-content").classList.remove("show");
}
