let valueDisplays = document.querySelectorAll(".num")
let interval = 4000

valueDisplays.forEach((valueDisplay)=>{
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(interval /endValue)
    console.log(duration);
    let counter = setInterval(()=>{
        startValue++;
        valueDisplay.innerText=startValue
        if(startValue == endValue){
            clearInterval(counter)
        }
    },duration)
})