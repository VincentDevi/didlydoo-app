import { allEventsArr } from "../fetching/fetchGetDatas.js";
import { fecthPostParticipants } from "./addNewParticipants.js";
import { setEvenementId } from "./setEvenementId.js";
import { createObjectAttendee } from "./createObjectAttendee.js";
import { fecthGetLastAttendee } from "./addLatestAttendee.js";
import { showNewParticipant } from "./showNewParticpant.js";

/**
 * Event listener on the text Input
 * will call addNewParticipant
 */
const setEventTextInput = () =>{
   const textInputs = document.getElementsByClassName('cards__table__entry__name__input');

   for (const textInput of textInputs) {
    textInput.addEventListener('keyup',e=>{
        if (e.code ==='Enter'){
            const attendeeName = textInput.value;
            const evenementId = setEvenementId(textInput);
            const evenementTextInput = allEventsArr.filter(item => item.id===evenementId);
            const inputParent = textInput.parentElement;
            const lala = inputParent.parentElement;
            console.log(inputParent);
            const attend= createObjectAttendee(attendeeName,evenementTextInput);
            fecthPostParticipants(attend,evenementId,lala);


            

        }
    })
   }
}

export{setEventTextInput};
