/**
 * @fileoverview Solution of challenge from frontendmentor.io 
 * @version 1.0
 * @author  Cristian Villafañe <cristianv129@hotmail.com>
*/

var emailInput = document.getElementsByTagName("input")[0];
let errorAlerts = document.getElementsByClassName("error_flag");    // icon and message of error on input email
let success_message = document.getElementById("success_message");   // success message of input email

/**  
 * Moves the image around according to the screen dimensions 
 * */
function positionImage() {
    var img = document.getElementsByTagName("img")[0];
    if (window.innerWidth < 800) {
        var container = document.getElementsByTagName("main")[0];
        img.setAttribute("src", "./images/hero-mobile.jpg");
        container.insertBefore(img, container.children[1]);
    } else {
        var body = document.getElementsByTagName("body")[0];
        img.setAttribute("src", "./images/hero-desktop.jpg");
        body.insertBefore(img, body.children[0].nextSibling);
    }
}

/**  
 * Get the validated email input, clear the errors alerts and show the success message 
 * */
function sendMail() {
    emailInput.value = "";
    hide(errorAlerts[0]);
    hide(errorAlerts[1]);
    show(success_message);
}

window.onload = () => {
    positionImage();
    show(document.getElementsByTagName("body")[0])
}

window.onresize = () => {
    positionImage();
}

emailInput.oninvalid = (e) => {
    e.preventDefault();
    show(errorAlerts[0]);
    show(errorAlerts[1]);
}

emailInput.oninput = () => {
    hide(success_message);
}