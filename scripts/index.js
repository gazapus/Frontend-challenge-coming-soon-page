var emailInput = document.getElementsByTagName("input")[0];
let errorAlerts = document.getElementsByClassName("error_flag");    // icon and message of error on input email
let success_message = document.getElementById("success_message");   // success message of input email

function positionImage() {
    var img = document.getElementsByTagName("img")[0];
    if (window.innerWidth < 800) {
        var container = document.getElementById("mainContainer");
        img.setAttribute("src", "./images/hero-mobile.jpg");
        container.insertBefore(img, container.children[1]);
    } else {
        var main = document.getElementsByTagName("main")[0];
        img.setAttribute("src", "./images/hero-desktop.jpg");
        main.insertBefore(img, main.children[0].nextSibling);
    }
}

function sendMail() {
    emailInput.value = "";
    errorAlerts[0].classList.add("hidden");
    errorAlerts[1].classList.add("hidden");
    success_message.classList.remove("hidden");
}

window.onload = () => {
    positionImage();
    document.getElementsByTagName("body")[0].classList.remove("hidden");
}

window.onresize = () => {
    positionImage();
}

emailInput.oninvalid = (e) => {
    e.preventDefault();
    errorAlerts[0].classList.remove("hidden")
    errorAlerts[1].classList.remove("hidden")
}

emailInput.oninput = () => {
    success_message.classList.add("hidden")
}