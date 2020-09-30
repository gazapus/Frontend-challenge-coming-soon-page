/**
 * @fileoverview useful functions to complete the frontendmentor.io challenge
 * @author  Cristian Villafañe <cristianv129@hotmail.com>
*/

/**  
 * Make visible an element
 * @param {element} element element to make visible
 * */
function show(element) {
    element.classList.remove("hidden");
}

/**  
 * Make invisible an element
 * @param {element} element element to make invisible
 * */
function hide(element) {
    element.classList.add("hidden");
}