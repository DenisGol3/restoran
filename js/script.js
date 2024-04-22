let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger__menu");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
	burger.classList.toggle("active");
	burgerMenu.classList.toggle("active");
}