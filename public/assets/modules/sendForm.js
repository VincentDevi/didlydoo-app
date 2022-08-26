import { setAllDatas } from "./setAllDatas.js";
import { FetchPostDatas } from "./fetchPostDatas.js";

const sendForm = () =>{
    const form = document.getElementById('form');

    form.addEventListener('submit', submission =>{
        submission.preventDefault();
        const data =setAllDatas();
        FetchPostDatas(data);
    })
}

export{sendForm};

