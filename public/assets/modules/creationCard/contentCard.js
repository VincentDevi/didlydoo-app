
/**
 * Setting the description of the event
 * @param {string} description 
 * @param {var} parent 
 */
export const createHeaderDescription = (description, parent) =>{
    let cards__header__description = document.createElement('p')
    cards__header__description.classList.add('cards__header__description')
    cards__header__description.innerHTML = description
    parent.appendChild(cards__header__description)
}

/**
//  * Setting the dates of the events
//  * @param {string} date 
//  */
export const createDateTable = (date, parent) =>{
    let cards__table__header__date = document.createElement('time')
    cards__table__header__date.classList.add('cards__table__header__date')
    cards__table__header__date.innerHTML = date;
    parent.appendChild(cards__table__header__date)
}

/**
 * Get the total number of votes for each date
 * @param {string} total 
 */
export const createParagraphTotal = (total, parent) =>{
    let cards__table__count__total = document.createElement('p')
    cards__table__count__total.classList.add('cards__table__count__total')
    parent.appendChild(cards__table__count__total)
    cards__table__count__total.innerText = total
}

/**
 * create CHECKBOX. 
 * Div is created - Label is created - input Checkbox is created
 * Parent is requested. Either cards__table__entry__new or cards__table__entry__attendee
 * @param {string} idElement 
 * @param {var} parent 
 */
export const createCheckBox = (parent, id) =>{
    let cards__table__entry__container__check = document.createElement('div')
    cards__table__entry__container__check.classList.add('cards__table__entry__container__check')
    parent.appendChild(cards__table__entry__container__check)

    let labelCheck= document.createElement("label");
    cards__table__entry__container__check.appendChild(labelCheck);

    let cards__table__entry__check = document.createElement('input')
    cards__table__entry__container__check.appendChild(cards__table__entry__check)
    cards__table__entry__check.classList.add('cards__table__entry__check')
    cards__table__entry__check.classList.add(id)
    cards__table__entry__check.type = "checkbox"
    cards__table__entry__check.name = "check"
}