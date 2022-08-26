import { displayForm } from "./public/assets/modules/displayForm.js";
import { createH4, createTitleH3, createTitleH2 } from "./public/assets/modules/creationCard/createTitles.js";
import { createHeaderDescription, createDateTable, createParagraphTotal, createCheckBox } from "./public/assets/modules/creationCard/contentCard.js";
import { createCardSqueleton,cards__header, cards__header__author, cards__table__header, cards__table__header__empty, cards__table__count, cards__table__entry__new, cards__table__entry__attendee } from "./public/assets/modules/creationCard/squeletonCard.js";
import { sendForm } from "./public/assets/modules/sendForm.js";
import { firstEventArr } from "./public/assets/modules/fetching/fetchGetDatas.js";

console.log(firstEventArr)


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
createTitleH2(firstEventArr.name, cards__header)
createTitleH3(cards__header__author, cards__header, firstEventArr.author, 'class-test')
createHeaderDescription(firstEventArr.description, cards__header)
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

createH4(firstEventArr.author, cards__table__entry__attendee)
createCheckBox(2, cards__table__entry__attendee)
createCheckBox(2, cards__table__entry__attendee)
createCheckBox(2, cards__table__entry__attendee)

// END OF CREATING CARDS

sendForm()
