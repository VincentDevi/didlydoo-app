import { createCloseIcon, createTitleH3, createTitleH2 } from "./createTitles.js";
import { createHeaderDescription, createDateTable, createParagraphTotal, createCheckBox } from "./contentCard.js";
import { cards__header__top,createCardSqueleton,cards__header, cards__header__author, cards__table__header, cards__table__header__empty, cards__table__count, cards__table__entry, cards__table__entry__attendee } from "./squeletonCard.js";
import {domLastAttendee} from '/public/assets/modules/adding-participant/domLastAttendee.js'

let cards = document.querySelector('.cards')


const mapAllDates = (arr) =>{
   let compteur = 0;
    for (const date of arr) {
        createDateTable(date.date,cards__table__header);
        compteur++;
   }
   return compteur;

}

/**
 * 
 * @param {arr} arrayCard 
 */
export const generatingAllCards = (array) =>{

    array.map(e =>{
        
        createCardSqueleton(e.id)
        createTitleH2(e.name, cards__header__top)
        createCloseIcon(cards__header__top, e.id)
        createTitleH3(cards__header__author, cards__header, `created by ${e.author}`, 'cards__header__author')
        createHeaderDescription(e.description, cards__header)
        createTitleH3(cards__table__header__empty, cards__table__header, '', 'cards__table__header__empty')
      
        const nbrOfDate = mapAllDates(e.dates)
        for (let count=0;count<nbrOfDate;count++){
            createParagraphTotal(0, cards__table__count)
        }
        const arrayOfAttendee = e.dates[0].attendees;
        for (const attendee of arrayOfAttendee) {
            domLastAttendee(attendee.name,cards__table__entry,nbrOfDate);
        }
    })
} 
