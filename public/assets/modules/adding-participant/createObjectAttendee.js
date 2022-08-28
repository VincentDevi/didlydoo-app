const createObjectAttendee = (name,date) =>{
    const a1date= date[0].dates[0].date;
    const a2date=date[0].dates[1].date;
    const a3date=date[0].dates[2].date;
    const attend = {
        name: name,
        dates : [
            {date:a1date,
            available:false},
            {date: a2date,
            available: false},
            {date:a3date,
            available: false},
        ],}
        return attend;
}
export{ createObjectAttendee};