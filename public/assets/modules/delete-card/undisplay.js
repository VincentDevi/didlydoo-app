import { generatingAllCards } from "../creationCard/generatingCards.js";
import { fetchGetDatas } from "../fetching/fetchGetDatas.js";

export async function closeCard(id) {
    
    try {

        let response = await fetch(`http://localhost:3000/api/events/${id}/`, {
            headers: { "Content-Type": "application/json" },
            method: "DELETE",
        });
        generatingAllCards(await fetchGetDatas())
        
        
    } 
    catch (err) {
        console.error(err)
    }
}
