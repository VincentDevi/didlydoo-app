import { createDivTableEntryAttendee } from "../creationCard/squeletonCard.js";
import { createH4 } from "../creationCard/createTitles.js";
import { createCheckBox } from "../creationCard/contentCard.js";

/**
 * Create a div and add a title and 3 checkbox 
 * @param {name of the new participant} nom 
 */
const addNewParticipants = (nom) =>{
    const test =createDivTableEntryAttendee();
    createH4(nom,test);
    createCheckBox(test);
    createCheckBox(test);
    createCheckBox(test);
}

export{addNewParticipants};