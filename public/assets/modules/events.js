const SetEventTitleInput = () =>{
    const getTitleForm = document.getElementById('title');

    getTitleForm.addEventListener('keyup',takeTitle =>{
        title = takeTitle.target.value;
    })
}

const setEventAuthorInput = () =>{
const getAuthorForm = document.getElementById('author');
    
    getAuthorForm.addEventListener('keyup',takeAuthor =>{
        author = takeAuthor.target.value;
    })
}

const setEventDescription = () =>{
    const getDescriptionForm = document.getElementById('description');

    getDescriptionForm.addEventListener('keyup',takeDescription =>{
        description = takeDescription.target.value;
        
    })
}


const setDate1 = () =>{
    const dat1 = document.getElementById('date1');

    dat1.addEventListener('change',event =>{

    })
}
const setDate2 = () =>{
    const dat2 = document.getElementById('date2');

    dat2.addEventListener('change',event =>{
    })
}
const setDate3 = () =>{
    const dat3 = document.getElementById('date3');

    dat3.addEventListener('change',event =>{
    })
}



