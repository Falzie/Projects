const btnEl = document.getElementById("button"); 
const jokeEl = document.getElementById("joke");
const apiKey = "g05LCo+fEnDs2eT1BwRgeA==52MOp9F6XVqBbZ9x"; 
const options = {
    method : "GET", 
    headers : {
        "X-API-KEY" : apiKey,

    },
}; 
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";



async function getJoke() { 
     
    jokeEl.innerText = "Updating..."; 
    btnEl.ariaDisabled = true; 
    btnEl.innerText = "LOADING";


   const response  = await fetch(apiURL, options); 
   const data = await response.json(); 
   btnEl.ariaDisabled = false; 
   btnEl.innerText = "Tell me a Joke!";
    jokeEl.innerText = data[0].joke;
} 

btnEl.addEventListener("click", getJoke);