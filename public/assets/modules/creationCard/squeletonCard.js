export let cards__container;
export let cards__header;
export let cards__header__author;
export let cards__table__header
export let cards__table__header__empty
export let cards__table__count
export let cards__table__entry__new
export let cards__table__entry__attendee

let cards__table
let cards__table__entry


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
    cards__table__entry__name__input.id = 'textInput';
    cards__table__entry__name__input.classList.add('cards__table__entry__name__input')
    cards__table__entry__new.appendChild(cards__table__entry__name__input)
    cards__table__entry__name__input.type = "text"
}

const createDivTableEntryAttendee = () => {
    cards__table__entry__attendee = document.createElement('div');
    cards__table__entry__attendee.classList.add('cards__table__entry__attendee')
    cards__table__entry.appendChild(cards__table__entry__attendee)
    return cards__table__entry__attendee;
}

/**
 * Creating the squeleton of the cards - without inputs
 */
export const createCardSqueleton = () =>{
    createMainArticle()
    createHeaderDiv()
    createdivCardTable()
    createDivTableHeader()
    createDivTableCount()
    createParagraphTotalTitle()
    createDivTableEntry()
    createDivTableEntryAttendee()
    createDivTableEntryNew()
    createNewInputLine()
}

export{createDivTableEntryAttendee};