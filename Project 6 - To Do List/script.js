const pushButton =document.querySelector("#push")
const newInput =document.querySelector("#newtask input")
const tasks=document.querySelector("#tasks")
const curreentTask=document.querySelectorAll(".task")

pushButton.addEventListener("click", ()=>{
    if (newInput.value.length===0) {
        alert("please enter a task..")
    }
    else{
        const task = document.createElement("div")
        task.className="task"
        const newTask= document.createElement("span")
        newTask.id="new-task-span"
        newTask.innerText=newInput.value
        task.appendChild(newTask)
        const deleteButton = document.createElement("button")
        deleteButton.className="delete"
        deleteButton.innerHTML = `<i class="material-icons">delete</i>`
        tasks.appendChild(task)
        task.appendChild(deleteButton)
        document.querySelectorAll(".delete").forEach((item)=>{
            item.addEventListener("click", (e)=>{
                item.parentNode.remove()
            })
        })
        document.querySelectorAll(".task span").forEach((item)=>{
            item.addEventListener("click", (e)=>{
                item.classList.toggle("completed")
            })
        })
        newInput.value=""

    }
})

