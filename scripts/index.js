var aside = document.getElementsByTagName("aside")[0];
var container = document.getElementById("mainContainer");
var main = document.getElementsByTagName("main")[0];

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