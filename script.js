/* const burger = document.querySelector(".burger");
const burgerContent = document.querySelector(".burger-content"); */
const noticeMeSenpai = document.querySelector(".notice");

/* burger.addEventListener("click", showBurger); */
window.addEventListener("scroll", removeArrow);

/* function showBurger() {
  burger.classList.toggle("open");
  burgerContent.classList.toggle("open");
}
 */
function removeArrow() {
  noticeMeSenpai;
  noticeMeSenpai.classList.toggle("hide", window.scrollY > 0);
  console.log("hej");
}

/* const dropDownBtn = document.querySelector(".dropdown");
dropDownBtn.addEventListener("mouseover", dropDown);
dropDownBtn.addEventListener("mouseleave", dropDownHide);
dropDownBtn.addEventListener("click", dropDown);
window.addEventListener("click", dropDownHide);

function dropDown() {
  document.querySelector(".dropdown-content").classList.add("show");
}

function dropDownHide() {
  document.querySelector(".dropdown-content").classList.remove("show");
} */

const menu = document.querySelector(".menu");
const menuMain = document.querySelector(".menu-main");
const closeMenu = document.querySelector(".mobile-menu-close");
const goBack = document.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
let subMenu;

menuMain.addEventListener("click", (e) => {
  //console.log(e.target.closest(".menu-item-has-children"));
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    //console.log(hasChildren);
    showSubMenu(hasChildren);
  }
});

goBack.addEventListener("click", hideSubMenu);

menuTrigger.addEventListener("click", toggleMenu);

closeMenu.addEventListener("click", toggleMenu);

document.querySelector(".menu-overlay").addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideleft 0.5s ease forwards";
  console.log(subMenu);
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  //console.log(menuTitle);
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideright 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);

  //console.log(subMenu);

  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};
