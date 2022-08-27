// import { displayForm } from "./public/assets/modules/displayForm.js";
import { sendForm } from "./public/assets/modules/sendForm.js";
import { firstEventArr, allEventsArr } from "./public/assets/modules/fetching/fetchGetDatas.js";
import { generatingAllCards } from "./public/assets/modules/creationCard/generatingCards.js";
import { formManager } from "./public/assets/modules/formManager.js";


console.log(firstEventArr)


let btnForm = document.querySelector(".btnNewEvent") 
btnForm.addEventListener("click", formHandler) 

// Target and display/hide .form
// function formHandler(){
//     displayForm("form")
// }



sendForm()

// GENERATE ALL EXISTING CARDS FORM API WHEN WINDOW OPENS
generatingAllCards(allEventsArr)

// Import function and call this one on click
document.querySelector(".btnNewEvent").addEventListener("click", formManager) 


