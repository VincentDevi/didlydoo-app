function displayForm(src){
    const formContainer = document.querySelector(`.${src}`)
    if (formContainer.style.display === "none") {
        formContainer.style.display = "flex"
    }
    else{
        formContainer.style.display = "none"
    }
}

export {displayForm}