const setAllDatas = () =>{
    const getTitleForm = document.getElementById('title').value;
    const getAuthorForm = document.getElementById('author').value;
    const getDescriptionForm = document.getElementById('description').value;
    const dat1 = document.getElementById('date1').value;
    const dat2 = document.getElementById('date2').value;
    const dat3 =document.getElementById('date3').value;

    let datas = {
        name: getTitleForm, 
        dates:[dat1,dat2,dat3],
        author: getAuthorForm, 
        description: getDescriptionForm,
    }
    return datas;
}


export{ setAllDatas};