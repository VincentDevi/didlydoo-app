import { createH4, createTitleH3, createTitleH2 } from "./public/assets/modules/creationCard/createTitles.js";
import { createHeaderDescription, createDateTable, createParagraphTotal, createCheckBox } from "./public/assets/modules/creationCard/contentCard.js";
import { createCardSqueleton,cards__header, cards__header__author, cards__table__header, cards__table__header__empty, cards__table__count, cards__table__entry__new, cards__table__entry__attendee } from "./public/assets/modules/creationCard/squeletonCard.js";

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
