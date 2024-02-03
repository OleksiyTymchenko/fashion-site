const menu = document.querySelector("nav");
const button = document.querySelector(".burger-menu");

button.addEventListener("click", function() {
  menu.classList.toggle("open");
});