const quoteContainer = document.querySelector("#quote-container")
const quoteText = document.querySelector("#quote")
const authorText = document.querySelector("#author")
const twitterBtn = document.querySelector("#twitter")
const newQuoteBtn = document.querySelector("#new-quote")
const loader= document.getElementById("loader")

let apiQuotes =[]

//show loader
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true
}

//hide loader
function complete(){
    quoteContainer.hidden=false
    loader.hidden=true;
    
}



// show new quote

function newQuote(){
    loading()
    // pick random quoate
    const quote = apiQuotes[Math.round(Math.random()*apiQuotes.length)]
    // authorText.textContent=quote.author;
    // check if author is blank 
    if(!quote.author){
        authorText.textContent="Unknown";
    }
    else{
        authorText.textContent=quote.author;
    }
     //check quote length to determine styling
     if(quote.text.length>120){
        quoteText.classList.add("long-quote")
     }
     else{
        quoteText.classList.remove("long-quote")
     }
    quoteText.textContent= quote.text

    //set quote and hide loader
    complete()
   
}

// get quotes from api

// async function getQuotes(){
//     loading()
//     const apiUrl= "https://type.fit/api/quotes"
//     try {
//         const response = await fetch(apiUrl)
//         apiQuotes = await response.json()
//         // console.log(apiQuote);
//         newQuote();
//     } catch (error) {
//        alert(error) 
//     }
// }

function getQuotes(){
    loading()
    fetch("https://type.fit/api/quotes")
    .then(response => {
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        return response.json(); // parse JSON data
    })
    .then(data => {
        // console.log(data); // log the parsed JSON data
        apiQuotes = data
        newQuote()
    })
    .catch(error => {
        console.log('There was a problem with the fetch operation:', error);
    });
}


// tweet quote

function tweetquote(){
   
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl,'_blank') // open new tab
}

// event listener
newQuoteBtn.addEventListener("click", newQuote)
twitterBtn.addEventListener("click", tweetquote)

getQuotes()

// https://youtu.be/-01BzZf0Tg8?t=6831


