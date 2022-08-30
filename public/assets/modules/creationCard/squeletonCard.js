export let cards__container;
export let cards__header;
export let cards__header__top
export let cards__header__author;
export let cards__table__header
export let cards__table__header__empty
export let cards__table__count
export let cards__table__entry__new
export let cards__table__entry__attendee

let cards__table
export let cards__table__entry


let cards = document.querySelector('.cards')

// create CARD CONTAINER AND HEADER
/**
 * Creating card container
 */
const createMainArticle = (id) => {
    cards__container = document.createElement('article');
    cards__container.classList.add('cards__container')
    cards__container.classList.add(id)
    // Vincent add something here
    cards__container.setAttribute ('value','key');
    // end 
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

const createTopContainer = () =>{
    cards__header__top = document.createElement("div")
    cards__header__top.classList.add("cards__header__top")
    cards__header.appendChild(cards__header__top)
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

const createNewInputLine = (aId) =>{
    let cards__table__entry__name__input = document.createElement('input')
    cards__table__entry__name__input.id = aId;
    cards__table__entry__name__input.classList.add('cards__table__entry__name__input')
    cards__table__entry__new.appendChild(cards__table__entry__name__input)
    cards__table__entry__name__input.type = "text"
    cards__table__entry__name__input.placeholder = "Add your name"
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
export const createCardSqueleton = (eEd) =>{
    createMainArticle(eEd)
    createHeaderDiv()
    createTopContainer()
    createdivCardTable()
    createDivTableHeader()
    createDivTableCount()
    createParagraphTotalTitle()
    createDivTableEntry()
    createDivTableEntryNew()
    createNewInputLine(eEd)
}

export{createDivTableEntryAttendee};