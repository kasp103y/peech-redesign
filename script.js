const noticeMeSenpai = document.querySelector(".notice");
const peechBtn = document.querySelector(".points-btn");
const peechKryds = document.querySelector(".kryds");
const peechPopUp = document.querySelector(".peechy-pop-up");
const menu = document.querySelector(".menu");
const menuMain = document.querySelector(".menu-main");
const closeMenu = document.querySelector(".mobile-menu-close");
const goBack = document.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
let subMenu;

window.addEventListener("scroll", removeArrow);

function removeArrow() {
  noticeMeSenpai;
  noticeMeSenpai.classList.toggle("hide", window.scrollY > 0);
  console.log("hej");
}

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

peechBtn.addEventListener("click", popUpHandler);

peechPopUp.addEventListener("click", popUpHandler);
function popUpHandler() {
  peechPopUp.classList.toggle("peechy-open");
}
