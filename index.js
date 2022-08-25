import { displayForm } from "./public/assets/modules/displayForm.js";
let btnForm = document.querySelector(".btnNewEvent") 
btnForm.addEventListener("click", formHandler) 

// Target and display/hide .form
function formHandler(){
    displayForm("form")
}
