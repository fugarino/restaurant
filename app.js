// Selectors
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

// EventListeners
homeBtn.addEventListener("click", () => {
  // Bottom Border
  menuBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  homeBtn.classList.add("active");
  // Page
  menu.classList.remove("show");
  contact.classList.remove("show");
  home.classList.add("show");
});
menuBtn.addEventListener("click", () => {
  // Bottom Border
  menuBtn.classList.add("active");
  contactBtn.classList.remove("active");
  homeBtn.classList.remove("active");
  // Page
  menu.classList.add("show");
  contact.classList.remove("show");
  home.classList.remove("show");
});
contactBtn.addEventListener("click", () => {
  // Bottom Border
  menuBtn.classList.remove("active");
  contactBtn.classList.add("active");
  homeBtn.classList.remove("active");
  // Page
  menu.classList.remove("show");
  contact.classList.add("show");
  home.classList.remove("show");
});

// Functions
function onLoad() {
  homeBtn.classList.add("active");
  home.classList.add("show");
}
onLoad();
