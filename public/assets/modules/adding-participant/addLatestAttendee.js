import { domLastAttendee } from "./domLastAttendee.js";
import { showNewParticipant } from "./showNewParticpant.js";
const fecthGetLastAttendee = async (id,a) =>{
    try{
        const response= await fetch ('http://localhost:3000/api/events/'+ id+'/');
        const result = await response.json();
        const pe=a;
        const prout = await showNewParticipant(result,pe);

    }
    catch(error){
        console.error(error);
    }
}
export{fecthGetLastAttendee};

