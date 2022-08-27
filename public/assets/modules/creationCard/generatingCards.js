import { createH4, createTitleH3, createTitleH2 } from "./createTitles.js";
import { createHeaderDescription, createDateTable, createParagraphTotal, createCheckBox } from "./contentCard.js";
import { createCardSqueleton,cards__header, cards__header__author, cards__table__header, cards__table__header__empty, cards__table__count, cards__table__entry__new, cards__table__entry__attendee } from "./squeletonCard.js";

let cards = document.querySelector('.cards')

/**
 * 
 * @param {arr} arrayCard 
 */
export const generatingAllCards = (array) =>{
    array.map(e =>{
        console.log(e)
        createCardSqueleton()
        createTitleH2(e.name, cards__header)
        createTitleH3(cards__header__author, cards__header, e.author, 'class-test')
        createHeaderDescription(e.description, cards__header)
        createTitleH3(cards__table__header__empty, cards__table__header, '', 'cards__table__header__empty')
        createDateTable(e.dates[0].date, cards__table__header)
        createDateTable(e.dates[1].date, cards__table__header)
        createDateTable(e.dates[2].date, cards__table__header)
        createParagraphTotal(1, cards__table__count)
        createParagraphTotal(4, cards__table__count)
        createParagraphTotal(4, cards__table__count)
    
        createCheckBox(2, cards__table__entry__new)
        createCheckBox(2, cards__table__entry__new)
        createCheckBox(2, cards__table__entry__new)
    
        createH4(e.author, cards__table__entry__attendee)
        createCheckBox(2, cards__table__entry__attendee)
        createCheckBox(2, cards__table__entry__attendee)
        createCheckBox(2, cards__table__entry__attendee)
    
    })
} 