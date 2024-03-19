
export const showToast = (operation, id)=>{
    const toast = document.createElement("div")
    toast.classList.add("toast")

    // set text
    if(operation === "Add"){
        toast.innerText=`Product with ID ${id} has been added`
    }
    else{
        toast.innerText=`Product with ID ${id} has been deleted`
    }

    document.body.appendChild(toast)

    // remove after few seconds
    setTimeout(()=>{
        toast.remove()
    },2000)
}