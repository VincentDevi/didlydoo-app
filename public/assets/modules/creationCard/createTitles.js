import {closeCard} from '/public/assets/modules/delete-card/undisplay.js'

/**
 * Setting title to card Header
 * @param {string} title 
 */

export const createTitleH2 = (title, parent) =>{
    let cards__header__title = document.createElement('h2');
    parent.appendChild(cards__header__title)
    cards__header__title.classList.add('cards__header__top__title')
    cards__header__title.innerText = title
}

export const createCloseIcon = (parent, id) => {
    let closeIcon = document.createElement("img")
    closeIcon.setAttribute("src", "./public/assets/images/cancel.png")
    closeIcon.classList.add("cards__header__top__close")
    closeIcon.classList.add(id)
    closeIcon.setAttribute("value",id)
    closeIcon.addEventListener("click", closCard =>{
        closeCard(id)
        
    })
    parent.appendChild(closeIcon)
}


/**
 * Creating H3 title
 * @param {var} elemName 
 * @param {var} parent 
 * @param {string} title 
 * @param {string} className 
 */
export const createTitleH3 = (elemName, parent, title, className) =>{
    elemName = document.createElement('h3');
    elemName.innerText = title;
    parent.appendChild(elemName);
    elemName.classList.add(className);
}


/**
 * Creating H4 title
 * @param {string} attendeeName 
 * @param {var} parent 
 */
export const createH4 = (attendeeName, parent) => {
    let cards__table__entry__name = document.createElement('h4')
    cards__table__entry__name.classList.add('cards__table__entry__name')
    cards__table__entry__name.innerHTML = attendeeName; 
    parent.appendChild(cards__table__entry__name)
}


