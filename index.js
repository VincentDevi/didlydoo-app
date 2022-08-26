import { displayForm } from "./public/assets/modules/displayForm.js";
import { createH4, createTitleH3, createTitleH2 } from "./public/assets/modules/creationCard/createTitles.js";
import { createHeaderDescription, createDateTable, createParagraphTotal, createCheckBox } from "./public/assets/modules/creationCard/contentCard.js";
import { createCardSqueleton,cards__header, cards__header__author, cards__table__header, cards__table__header__empty, cards__table__count, cards__table__entry__new, cards__table__entry__attendee } from "./public/assets/modules/creationCard/squeletonCard.js";


let btnForm = document.querySelector(".btnNewEvent") 
btnForm.addEventListener("click", formHandler) 

// Target and display/hide .form
function formHandler(){
    displayForm("form")
}



//CREATING CARDS
let cards = document.querySelector('.cards')
console.log(cards)


createCardSqueleton()
createTitleH2('Project title', cards__header)
createTitleH3(cards__header__author, cards__header, 'Author', 'class-test')
createHeaderDescription("DESCRIPTIONvvekeklll   lokoko", cards__header)
createTitleH3(cards__table__header__empty, cards__table__header, '', 'cards__table__header__empty')
createDateTable('11/09/2022', cards__table__header)
createDateTable('15/09/2022', cards__table__header)
createDateTable('19/09/2022', cards__table__header)
createParagraphTotal(1, cards__table__count)
createParagraphTotal(4, cards__table__count)
createParagraphTotal(4, cards__table__count)

createCheckBox(2, cards__table__entry__new)
createCheckBox(2, cards__table__entry__new)
createCheckBox(2, cards__table__entry__new)

createH4('Sophie', cards__table__entry__attendee)
createCheckBox(2, cards__table__entry__attendee)
createCheckBox(2, cards__table__entry__attendee)
createCheckBox(2, cards__table__entry__attendee)

// END OF CREATING CARDS



// const fetchApi = async () =>{
//     try{
//     let response = await fetch('http://localhost:3000/api/events/'
//     , {
//             headers: { "Content-Type": "application/json"},
//             method: 'POST',
//             body: JSON.stringify({
//               author:'Sophie',
//               description: 'description PROUT',
//             })
//             }
//             )
//     let result = await response.json()
//         console.log(result)
//         console.log(result[0].author)
//         console.log(result[4].author)

//     }

//     catch (e){
//         console.error(e)
//     }
// }
// fetchApi()


// .then(function(response){ 
//     return response.json()})
//     .then(function(data)
//     {console.log(data)
//     title=document.getElementById("title")
//     body=document.getElementById("bd")
//     title.innerHTML = data.title
//     body.innerHTML = data.body  