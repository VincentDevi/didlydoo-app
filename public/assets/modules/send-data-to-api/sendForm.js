import { setAllDatas } from "./setAllDatas.js";
import { FetchPostDatas } from "./fetchPostDatas.js";


/**
 * event on the submit button, will call 2 functions: 
 * fetchPostDatas and setAllDatas
 */
const sendForm = () =>{
    const form = document.getElementById('form');

    form.addEventListener('submit', submission =>{
        submission.preventDefault();
        const data =setAllDatas();
        FetchPostDatas(data);
    })
}

export{sendForm};

