import { addNewParticipants } from "./addNewParticipants.js";


/**
 * Event listener on the text Input
 * will call addNewParticipant
 */
const setEventTextInput = () =>{
    const getTextInput =document.getElementById('textInput');

    getTextInput.addEventListener('keyup',e =>{
        if(e.code === 'Enter'){
            const inputValue = getTextInput.value;
            addNewParticipants(inputValue);
        }
    })
}
export{setEventTextInput};