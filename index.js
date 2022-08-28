// import { displayForm } from "./public/assets/modules/displayForm.js";
import { generatingAllCards } from "./public/assets/modules/creationCard/generatingCards.js";
import { formManager } from "./public/assets/modules/formManager.js";
import { sendForm } from "./public/assets/modules/send-data-to-api/sendForm.js";
import { setEventTextInput} from "./public/assets/modules/adding-participant/setEventTextInput.js";
import { firstEventArr, allEventsArr } from "./public/assets/modules/fetching/fetchGetDatas.js";

console.log(firstEventArr)


let btnForm = document.querySelector(".btnNewEvent") 
btnForm.addEventListener("click", formManager) 

// Target and display/hide .form
// function formHandler(){
//     displayForm("form")
// }


//CREATING CARDS
let cards = document.querySelector('.cards')
console.log(cards)

// GENERATE ALL EXISTING CARDS FORM API WHEN WINDOW OPENS
generatingAllCards(allEventsArr)

// Import function and call this one on click
document.querySelector(".btnNewEvent").addEventListener("click", formManager) 


// END OF CREATING CARDS

// start of sendForm
sendForm();
// end of sendForm

// START EVENT TO ADD A NEW PARTICIPANT
setEventTextInput();
// END EVENT TO ADD A NEW PARTICIPANT
