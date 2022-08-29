import { createH4 } from "../creationCard/createTitles.js";
import { createCheckBox } from "../creationCard/contentCard.js";

const astuce = (parent) =>{
    const div = document.createElement('div');
    div.classList.add('cards__table__entry__attendee');
    parent.appendChild(div);
    return div;  
}

const domLastAttendee = (name,el) =>{
    const ok = astuce(el);
    createH4(name,ok);
    createCheckBox(ok);
    createCheckBox(ok);
    createCheckBox(ok);

}

export{domLastAttendee,astuce};