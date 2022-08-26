export const urlEvents = 'http://localhost:3000/api/events/';

export const fetchGetDatas = async (url) =>{
    try{
        const response = await fetch(url)
        const result = await response.json()
        return result;
        // console.log(result)
        // console.log(result[0].description)
        // arr = []
        // arr.push(result)
        // console.log(arr)

    }

    catch (e){
        console.error(e)
    }

}

const allEventsArr = await fetchGetDatas(urlEvents)
export const firstEventArr = allEventsArr[0];
