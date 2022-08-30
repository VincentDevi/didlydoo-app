import { domLastAttendee } from "./domLastAttendee.js";


const showNewParticipant = async (data,b) =>{
    const iteration = data.dates.length;
    console.log(iteration);
    const attendeesArray = data.dates[0].attendees;
    const attendeesArrayLength = attendeesArray.length;
    const attendeesName = attendeesArray[attendeesArrayLength-1];

    // domLastAttendee(attendeesName.name,b,iteration, data.id);
    domLastAttendee(attendeesName.name,b,iteration, data.id);
    
    
    return attendeesName.name;


}

export{showNewParticipant};