import { setAllDatas } from "./setAllDatas.js";
import { FetchPostDatas } from "./fetchPostDatas.js";
import {fetchGetDatas} from "../fetching/fetchGetDatas.js";
import { generatingAllCards } from "../creationCard/generatingCards.js";

/**
 * event on the submit button, will call 2 functions: 
 * fetchPostDatas and setAllDatas
 */
const sendForm = () =>{
    const form = document.getElementById('form');

    form.addEventListener('submit', event =>{
        event.preventDefault();
        const data = setAllDatas();
        FetchPostDatas(data)
        .then(async (res) =>{
            console.log("THEN AFTER FETCHALL")
            generatingAllCards(await fetchGetDatas())
        })
    })
}

export{sendForm};

