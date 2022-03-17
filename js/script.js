// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

// nav slide
const toggleButton = document.querySelector(".toggle-button");
const sidenav = document.querySelector(".sideNav");
const toggleIcon = document.querySelector(".bx-slider");

sidenav.style.right = "-25em";
toggleButton.addEventListener("click", () => {
  if (sidenav.style.right == "-25em") {
    sidenav.style.right = "0";
  } else {
    sidenav.style.right = "-25em";
  }
});

// toggle icon
toggleButton.addEventListener("click", () => {
  toggleIcon.classList.toggle("iColor");
});
