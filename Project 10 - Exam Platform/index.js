const examContainer = document.getElementById("exam-container")
const instructionContainer = document.getElementById("instruction-container")
const startBtn = document.getElementById("start-btn")

startBtn.addEventListener("click", ()=>{
    instructionContainer.classList.add("hide")
    examContainer.classList.remove("hide")
    
})


