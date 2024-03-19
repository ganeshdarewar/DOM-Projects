const productContainer = document.getElementById("productContainer")
const productTemplates = document.getElementById("productTemplates")

import { homeQuantityToggle} from './homeQuantityToggle'
import {addToCart} from "./addToCart"

export const showProductContainer =(products)=>{
    if(!products){
        return false
    }
    products.forEach((curProduct) => {
        const {id, name, category,brand, price,stock, description, image} = curProduct
        const productClone = document.importNode(productTemplates.content, true)
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)
        productClone.querySelector(".productName").textContent = name
        productClone.querySelector(".productImage").src = image
        productClone.querySelector(".productImage").alt = name
        productClone.querySelector(".productStock").textContent = stock
        productClone.querySelector(".productDescription").innerText = description
        productClone.querySelector(".category").innerText = category
        productClone.querySelector(".productPrice").innerText = `₹ ${price}`
        productClone.querySelector(".productActualPrice").innerText = price*4


        productClone.querySelector(".stockElement").addEventListener("click", (event)=>{
            homeQuantityToggle(event, id, stock);
        })

        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event)=>{
            addToCart(event, id, stock)
        })
        
        productContainer.appendChild(productClone)

        
    });

  
}