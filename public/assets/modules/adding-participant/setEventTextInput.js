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
const urlAddAttendee ='http://localhost:3000/api/events/[id]/attend';

const getIdofServer = (elem) =>{
        let ok =elem.parentElement;
        while(ok != 'article'){
        ok= ok.parentElement;
       }
       const key = ok.getAttribute('value');
       fetchAddAttendee(key);
}

const fetchAddAttendee = async (key) =>{
    try{
        const response =await fetch(urlAddAttendee,{
            headers: { "Content-Type": "application/json" },
            method : 'POST',
            body : data,
        })
    }
    catch(error){
        console.error(error);
    }
}




export{setEventTextInput};