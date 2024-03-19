const output = document.getElementById("output")
const myInput =createMyElement(output, "input", "main")
const myBtn = createMyElement(output, "button", "btn")
myBtn.innerText = "Add new user"
const myList = createMyElement(output, "ul", "myList")

myBtn.addEventListener("click", addUser)
function deleteUser(){

}
function addUser(){
    if(myInput.value.length>0){
        listItem = createMyElement(myList, "li", "item")
        div = createMyElement(listItem, "div", "container")
        span1 = createMyElement(div, "span", "info")
        span1.innerText = myInput.value
        span2 = createMyElement(div, "span", "edit")
        span2.innerText = "edit"
        span3 = createMyElement(div, "span", "delete")
        span3.innerText = "delete"

        span2.addEventListener("click", ()=>{
            // if(span2.innerText==="edit"){
            //     span1.style.backgroundColor ="yellow"
            //     span1.setAttribute("contentEditable", true)
            //     span2.innerText = "save"
            // }
            // else{
            //     span1.style.backgroundColor ="white"
            //     span1.setAttribute("contentEditable", false)
            //     span2.innerText = "edit"
            // }
            const info = document.querySelectorAll(".info")
            if(span2.innerText="edit"){
                info.forEach((el)=>{
                    el.style.backgroundColor = "yellow"
                    el.setAttribute("contentEditable", true)
                    span2.innerText="save"
                })
            }
            else{
                el.style.backgroundColor = "white"
                el.setAttribute("contentEditable", false)
                span2.innerText="edit"
            }

        })
        span3.addEventListener("click", ()=>{
            document.querySelectorAll(".item").forEach((btn)=>{
                btn.addEventListener("click", ()=>{
                    btn.remove()
                })
            })
        })
    }
    myInput.value = ""
}

function createMyElement(parent, elType, classAdd){
    const element = document.createElement(elType)
    parent.appendChild(element)
    element.classList.add(classAdd)
    return element;
}