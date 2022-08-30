import { generatingAllCards } from "../creationCard/generatingCards";
import { fetchGetDatas } from "../fetching/fetchGetDatas";

export async function closeCard(id) {
    console.log(id)
    try {
        let response = await fetch(`http://localhost:3000/api/events/${id}/`, {
            headers: { "Content-Type": "application/json" },
            method: "DELETE",
        });
        
        generatingAllCards(await fetchGetDatas())
        
    } catch (err) {
        console.log(err)
    }
}
