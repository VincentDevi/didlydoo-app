// import {  } from "./public/assets/modules/creationCard/generatingCards.js";
export const urlEvents = 'http://localhost:3000/api/events/';

export const fetchGetDatas = async (url) =>{
    try{
        const response = await fetch(url)
        const result = await response.json()
        return result;
    }

    catch (e){
        console.error(e)
    }

}

export const allEventsArr = await fetchGetDatas(urlEvents)
export const firstEventArr = allEventsArr[0];
