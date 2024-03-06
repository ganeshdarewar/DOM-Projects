const quoteText = document.querySelector("#quote")
const authorText = document.querySelector("#author")
const newQuote = document.querySelector("#new-quote")
const quoteContainer = document.querySelector("#quote-container")
const loader = document.querySelector("#loader")
const twitter = document.querySelector("#twitter")

function showDataLoading(){
    loader.hidden=false
    quoteContainer.hidden=true
}
function showData(){
    loader.hidden=true
    quoteContainer.hidden=false
}


let myData=[]
function addData(){
    showDataLoading()
    const quote = myData[Math.round(Math.random()*myData.length)]
    if(quote.text.length>120){
        quoteText.classList.add("long-quote")
    }
    else{
        quoteText.classList.remove("long-quote")
    }
    quoteText.innerText=quote.text
    if(!quote.author){
        authorText.innerText="Unknown"
    }
    else{
        authorText.innerText=quote.author
    }
    showData()
}

function getData(){
    showDataLoading()
    fetch("https://type.fit/api/quotes").then((response)=>{
        return response.json()
    }).then((data)=>{
        myData = data
        addData()
    }).catch((error)=>{
        console.log(`error ${error}`);
    })
}
getData()

newQuote.addEventListener("click", addData)
twitter.addEventListener("click", ()=>{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl,'_blank') // open new tab
})