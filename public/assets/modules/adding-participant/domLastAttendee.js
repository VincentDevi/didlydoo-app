import { createH4 } from "../creationCard/createTitles.js";
import { createCheckBox } from "../creationCard/contentCard.js";

const astuce = (parent) =>{
    const div = document.createElement('div');
    div.classList.add('cards__table__entry__attendee');
    parent.appendChild(div);
    return div;  
}

const domLastAttendee = (name,element,iteration, id) =>{
    const parentDiv = astuce(element);
    createH4(name,parentDiv);
    for (let count =0 ;count<iteration;count++){
        createCheckBox(parentDiv, id);
    }

}

export{domLastAttendee,astuce};
