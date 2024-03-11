const output = document.getElementById("output")
const myInput =createMyElement(output, "input", "main")
const myBtn = createMyElement(output, "button", "btn")
myBtn.innerText = "Add new user"
const myList = createMyElement(output, "ul", "myList")

myBtn.addEventListener("click", addUser)

function addUser(){
    if(myInput.value.length>0){
        listItem = createMyElement(myList, "li", "item")
        listItem.innerText = myInput.value
        myInput.value = ""
    }
}

function createMyElement(parent, elType, classAdd){
    const element = document.createElement(elType)
    parent.appendChild(element)
    element.classList.add(classAdd)
    return element;
}