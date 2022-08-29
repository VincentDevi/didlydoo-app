const createObjectAttendee = (name,dates) =>{
    const a1date= dates[0].dates[0].date;
    const a2date=dates[0].dates[1].date;
    const a3date=dates[0].dates[2].date;
    let test=[];
    for (const i of dates[0].dates) {
        const a = {
            date: i.date,
            available: false,
        }
        test.push(a);
    }
   
    const attend = {
        name: name,
        dates : test,}
    
    return attend;
}
export{ createObjectAttendee};