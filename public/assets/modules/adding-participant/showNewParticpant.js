import { domLastAttendee } from "./domLastAttendee.js";


const showNewParticipant = async (data,b) =>{
    console.log(b);
    const attendeesArray = data.dates[0].attendees;
    const attendeesArrayLength = attendeesArray.length;
    const attendeesName = attendeesArray[attendeesArrayLength-1];
    console.log(attendeesName.name);

    domLastAttendee(attendeesName.name,b);
    
    return attendeesName.name;


}

export{showNewParticipant};