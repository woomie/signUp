//get the quotes from an API
async function getQuotes(){
    try{
        const response = await fetch ("https://api.adviceslip.com/advice");
        if (response.ok){
            const jsonResponse = await response.json();
            const value = jsonResponse.slip.advice;
            return value ;
        }
    }
    catch(error){
        console.log(error)
    }
}



export default getQuotes;