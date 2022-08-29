export async function closeCard(id) {
    console.log(id)
    try {
        let response = await fetch(`http://localhost:3000/api/events/${id}/`, {
            headers: { "Content-Type": "application/json" },
            method: "DELETE",
        });
    } catch (err) {
        console.log(err)
    }
}