import { setAllDatas } from "./setAllDatas.js";
import { FetchPostDatas } from "./fetchPostDatas.js";
import { generatingAllCards } from "../creationCard/generatingCards.js";
import { fetchGetDatas } from "../fetching/fetchGetDatas.js";

/**
 * event on the submit button, will call 2 functions: 
 * fetchPostDatas and setAllDatas
 */
const sendForm = () =>{
    const form = document.getElementById('form');

    form.addEventListener('submit', submission =>{
        submission.preventDefault();
        const data =setAllDatas();
        FetchPostDatas(data)
        .then(async (res)=>{
            generatingAllCards(await fetchGetDatas())
        })
    })
}

export{sendForm};

