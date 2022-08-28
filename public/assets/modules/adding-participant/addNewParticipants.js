import { createDivTableEntryAttendee } from "../creationCard/squeletonCard.js";
import { createH4 } from "../creationCard/createTitles.js";
import { createCheckBox } from "../creationCard/contentCard.js";
import { fecthGetLastAttendee } from "./addLatestAttendee.js";
/**
 * Create a div and add a title and 3 checkbox 
 * @param {name of the new participant} nom 
 */
const fecthPostParticipants = async (data,evId,ele) =>{
    try{
        const response= await fetch('http://localhost:3000/api/events/'+evId+'/attend',{
            headers: { "Content-Type": "application/json" },
            method: 'POST',
            body : JSON.stringify(data)
        })
        const pa=ele;
        fecthGetLastAttendee(evId,pa);

        
    }
    catch(error){
        console.error(error);
}
}

export{fecthPostParticipants};