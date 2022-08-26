import { createH4, createTitleH3, createTitleH2 } from "./public/assets/modules/creationCard/createTitles.js";
import { createHeaderDescription } from "./public/assets/modules/creationCard/contentCard.js";

let cards__container;
let cards__header;
let cards__header__title;
let cards__header__author;
let cards__header__description
let cards__table
let cards__table__header
let cards__table__header__empty
let cards__table__count
let cards__table__entry
let cards__table__entry__new
let cards__table__entry__attendee
let cards__table__entry__container__check


let cards = document.querySelector('.cards')
console.log(cards)

// create CARD CONTAINER AND HEADER
/**
 * Creating card container
 */
const createMainArticle = () => {
    cards__container = document.createElement('article');
    cards__container.classList.add('cards__container')
    cards.appendChild(cards__container)
} 

/**
 * Creating card Header
 */
const createHeaderDiv = () => {
    cards__header = document.createElement('div');
    cards__header.classList.add('cards__header')
    cards__container.appendChild(cards__header)
}


//Create DIV CARDS TABLES
const createdivCardTable = () => {
    cards__table = document.createElement('div');
    cards__table.classList.add('cards__table')
    cards__container.appendChild(cards__table)
}
//create CARD TABLE HEADER
const createDivTableHeader = () => {
    cards__table__header = document.createElement('div');
    cards__table__header.classList.add('cards__table__header')
    cards__table.appendChild(cards__table__header)
}
/**
 * 
 * @param {string} date 
 */
const createDateTable = (date) =>{
    let cards__table__header__date = document.createElement('time')
    cards__table__header__date.classList.add('cards__table__header__date')
    cards__table__header__date.innerHTML = date;
    cards__table__header.appendChild(cards__table__header__date)
}

//CREATE CARD TABLE COUNT
const createDivTableCount = () => {
    cards__table__count = document.createElement('div');
    cards__table__count.classList.add('cards__table__count')
    cards__table.appendChild(cards__table__count)
}

const createParagraphTotalTitle = () =>{
    let cards__table__count__title = document.createElement('p')
    cards__table__count__title.classList.add('cards__table__count__title')
    cards__table__count.appendChild(cards__table__count__title)
    cards__table__count__title.innerText = 'participants :'

}

const createParagraphTotal = (total) =>{
    let cards__table__count__total = document.createElement('p')
    cards__table__count__total.classList.add('cards__table__count__total')
    cards__table__count.appendChild(cards__table__count__total)
    cards__table__count__total.innerText = total

}



//CREATE TALBE ENTRY
const createDivTableEntry = () => {
    cards__table__entry = document.createElement('div');
    cards__table__entry.classList.add('cards__table__entry')
    cards__table.appendChild(cards__table__entry)
}

const createDivTableEntryNew = () => {
    cards__table__entry__new = document.createElement('div');
    cards__table__entry__new.classList.add('cards__table__entry__new')
    cards__table__entry.appendChild(cards__table__entry__new)
}

const createNewInputLine = () =>{
    let cards__table__entry__name__input = document.createElement('input')
    cards__table__entry__name__input.classList.add('cards__table__entry__name__input')
    cards__table__entry__new.appendChild(cards__table__entry__name__input)
    cards__table__entry__name__input.type = "text"
}

const createDivTableEntryAttendee = () => {
    cards__table__entry__attendee = document.createElement('div');
    cards__table__entry__attendee.classList.add('cards__table__entry__attendee')
    cards__table__entry.appendChild(cards__table__entry__attendee)
}


    const createCheckBoxAttendee = (idElement) =>{
        cards__table__entry__container__check = document.createElement('div')
        cards__table__entry__container__check.classList.add('cards__table__entry__container__check')
        cards__table__entry__attendee.appendChild(cards__table__entry__container__check)

        let labelCheck= document.createElement("label");
        cards__table__entry__container__check.appendChild(labelCheck);

        let cards__table__entry__check = document.createElement('input')
        cards__table__entry__container__check.appendChild(cards__table__entry__check)
        cards__table__entry__check.classList.add('cards__table__entry__check')
        cards__table__entry__check.type = "checkbox"
        cards__table__entry__check.name = "check"
        cards__table__entry__check.setAttribute("id", idElement)
        cards__table__entry__check.value= "approved"

    }

    const createCheckBoxNew = (idElement) =>{
        cards__table__entry__container__check = document.createElement('div')
        cards__table__entry__container__check.classList.add('cards__table__entry__container__check')
        cards__table__entry__new.appendChild(cards__table__entry__container__check)

        let labelCheck= document.createElement("label");
        cards__table__entry__container__check.appendChild(labelCheck);

        let cards__table__entry__check = document.createElement('input')
        cards__table__entry__container__check.appendChild(cards__table__entry__check)
        cards__table__entry__check.classList.add('cards__table__entry__check')
        cards__table__entry__check.type = "checkbox"
        cards__table__entry__check.name = "check"
        cards__table__entry__check.setAttribute("id", idElement)
        cards__table__entry__check.value= "approved"

    }

createMainArticle()
createHeaderDiv()
createTitleH2('Project title', cards__header)
createTitleH3(cards__header__author, cards__header, 'Author', 'class-test')
createHeaderDescription("DESCRIPTIONvvekeklll   lokoko", cards__header)
createdivCardTable()
createDivTableHeader()
createTitleH3(cards__table__header__empty, cards__table__header, '', 'cards__table__header__empty')
createDateTable('11/09/2022')
createDateTable('15/09/2022')
createDateTable('19/09/2022')
createDivTableCount()
createParagraphTotalTitle()
createParagraphTotal(1)
createParagraphTotal(4)
createParagraphTotal(4)
createDivTableEntry()
createDivTableEntryAttendee()
createDivTableEntryNew()
createNewInputLine()
createCheckBoxNew(2)
createCheckBoxNew(2)
createCheckBoxNew(2)

createH4('Sophie', cards__table__entry__attendee)
createCheckBoxAttendee(2)
createCheckBoxAttendee(2)
createCheckBoxAttendee(2)
