// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

// nav slide
const toggleButton = document.querySelector(".toggle-button");
const sidenav = document.querySelector(".sideNav");
const toggleIcon = document.querySelector(".bx-slider");
const closeIcon = document.querySelector(".bxs-x-square");

sidenav.style.right = "-25em";
toggleButton.addEventListener("click", () => {
  if (sidenav.style.right == "-25em") {
    sidenav.style.right = "0";
  } else {
    sidenav.style.right = "-25em";
  }
});

//close nav
closeIcon.addEventListener("click", () => {
  sidenav.style.right = "-25em";
});
