var aside = document.getElementsByTagName("aside")[0];
var container = document.getElementById("mainContainer");
var main = document.getElementsByTagName("main")[0];
var emailInput = document.getElementsByTagName("input")[0];
let errorAlert = document.getElementsByClassName("error_flag");

function ajustarImagen() {
    if (window.innerWidth < 800) {
        aside.children[0].setAttribute("src", "./images/hero-mobile.jpg");
        container.insertBefore(aside, container.children[1]);
    } else {
        aside.children[0].setAttribute("src", "./images/hero-desktop.jpg");
        main.insertBefore(aside, main.children[0].nextSibling);
    }
}

window.onload = () => {
    ajustarImagen();
    document.getElementsByTagName("body")[0].style.opacity = 1;
}

window.onresize = () => {
    ajustarImagen();
}

emailInput.oninvalid = (e) => {
    e.preventDefault();
    errorAlert[0].classList.remove("hidden")
    errorAlert[1].classList.remove("hidden")
}

emailInput.oninput = () => {
    document.getElementById("success_message").classList.add("hidden")
}

function enviarEmail() {
    emailInput.value = "";
    errorAlert[0].classList.add("hidden");
    errorAlert[1].classList.add("hidden");
    document.getElementById("success_message").classList.remove("hidden")
}