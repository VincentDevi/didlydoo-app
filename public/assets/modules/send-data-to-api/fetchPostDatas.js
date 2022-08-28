
/**
 * send an object to the API
 * @param {*object}  val 
 */
const FetchPostDatas = async (val)=>{
    try{

        const response = await fetch('http://localhost:3000/api/events/',{
            headers: { "Content-Type": "application/json" },
            method:'POST',
            body : JSON.stringify(val),
            })
        }
    catch(error){
        console.error(error);
    }
}

export{FetchPostDatas};