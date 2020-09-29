var aside = document.getElementsByTagName("aside")[0];
var container = document.getElementById("mainContainer");
var main = document.getElementsByTagName("main")[0];
let icon = document.getElementById("error_icon");

function ajustarImagen() {
    if (window.innerWidth < 800) {
        aside.children[0].setAttribute("src", "./images/hero-mobile.jpg");
        container.insertBefore(aside, container.children[1]);
    } else {
        aside.children[0].setAttribute("src", "./images/hero-desktop.jpg");
        main.insertBefore(aside, main.children[0].nextSibling);
        ajustarIconoEscritorio();
    }
}

window.onload = () => {
    icon.style.position = "absolute";
    if(window.innerWidth < 800) {
        ajustarImagen();
    } else {
        ajustarIconoEscritorio();
    }
    document.getElementsByTagName("body")[0].style.opacity = 1;
}

window.onresize = () => {
    ajustarImagen();
}

function ajustarIconoEscritorio() {
    icon.classList.remove("error_icon");
    let button = document.getElementsByTagName("button")[0];
    let rect = button.getBoundingClientRect();
    icon.style.left = rect.left - 35 + "px"
    icon.style.top = rect.top + 15 + "px"
}