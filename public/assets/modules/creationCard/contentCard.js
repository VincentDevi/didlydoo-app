

export const createHeaderDescription = (description, parent) =>{
    let cards__header__description = document.createElement('p')
    cards__header__description.classList.add('cards__header__description')
    cards__header__description.innerHTML = description
    parent.appendChild(cards__header__description)
}