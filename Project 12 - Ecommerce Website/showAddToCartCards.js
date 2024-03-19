import products from "./api/products.json"
import { getCartProductFromLS } from "./getCartProductFromLS"
import { fetchQuantityFromLS } from "./fetchQuantityFromLS"
import { removeProductFromCart } from "./removeProductFromCart"
import { incrementDecrement } from "./incrementDecrement"
import { updateCartProductTotal } from "./updateCartProductTotal"

let cartProducts = getCartProductFromLS()

let filterProducts = products.filter((curProd)=>{
    return cartProducts.some((curElem) => curElem.id === curProd.id)
})


// update the addtocart page
const cartElement = document.querySelector("#productCartContainer")
const templateContainer = document.querySelector("#productCartTemplate")

function showCartProduct(){
    filterProducts.forEach((curProd)=>{
        const {id, name, category,brand, price,stock, description, image} = curProd
        const productClone = document.importNode(templateContainer.content, true)

        const LSActualData = fetchQuantityFromLS(id, price)

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)
        productClone.querySelector(".category").textContent = category
        productClone.querySelector(".productImage").src = image
        productClone.querySelector(".productName").innerText = name
        productClone.querySelector(".productPrice").innerText = `₹ ${LSActualData.price}`
        productClone.querySelector(".productQuantity").innerText = LSActualData.quantity

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", ()=> removeProductFromCart(id))


        productClone.querySelector(".stockElement").addEventListener("click", ()=>{
            incrementDecrement(event, id, stock, price)
        })

        cartElement.appendChild(productClone)

    })
}

showCartProduct()

updateCartProductTotal()