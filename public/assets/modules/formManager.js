/**
 * 1) Display the form
 * 2) Add a form cleaning and closing manager
 */
function formManager(){
    const formContainer = document.querySelector(".form")
    formContainer.style.zIndex = "1"

    formContainer.style.display = "flex"
    // document.body.style.filter = "blur(0px)"
    // formContainer.style.filter = "blur(10px)"

    
    const formClose = document.querySelector(".form__header__close__img")
    formClose.addEventListener("click", closeForm => {
            closeForm.preventDefault()
            formContainer.style.display = "none"
            formContainer.reset() // resets the values of all elements in the form
        },{once : true}) // prevents eventslistener from stacking up
}
export { formManager }
