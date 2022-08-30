
/**
 * will take vales from all element of the form
 * @returns an obect dats from the form
 */
const setAllDatas = () =>{
    const getTitleForm = document.getElementById('title').value;
    const getAuthorForm = document.getElementById('author').value;
    const getDescriptionForm = document.getElementById('description').value;


    let AllDates = document.getElementsByClassName('form__date');
    let datesArr = [];
    for (const date of AllDates) {
       datesArr.push(date.value);
   }
    let datas = {
        name: getTitleForm, 
        dates:datesArr,
        author: getAuthorForm, 
        description: getDescriptionForm,
    }
    console.log(AllDates);
    return datas;
}


export{ setAllDatas};