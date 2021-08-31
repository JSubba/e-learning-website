let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
let login = document.querySelector("#login");
let loginForm = document.querySelector(".login-form");
let faTimesIcon = document.querySelector(".fa-times");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

login.onclick = () => {
    loginForm.classList.add("popup");
};

faTimesIcon.onclick = () => {
    loginForm.classList.remove("popup");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};
