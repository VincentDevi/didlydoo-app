/**
 * 1) Display the form
 * 2) Add a form cleaning and closing manager
 */
function formManager(){
    const formContainer = document.querySelector(".form")
    formContainer.style.display = "flex"
    
    const formClose = document.querySelector(".form__header__close__img")
    formClose.addEventListener("click", closeForm => {
            formContainer.style.display = "none"
            formContainer.reset() // resets the values of all elements in the form
        },{once : true}) // prevents eventslistener from stacking up
}
export {formManager}
