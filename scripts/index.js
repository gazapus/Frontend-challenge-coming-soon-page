function ajustar() {
    if (window.innerWidth < 800) {
        let aside = document.getElementsByTagName("aside")[0];
        aside.children[0].setAttribute("src", "./images/hero-mobile.jpg");
        let container = document.getElementById("mainContainer");
        container.insertBefore(aside, container.children[1])
    }
}

window.onload = () => {
    ajustar();
}

window.onresize = () => {
    ajustar();
}