import { getCartProductFromLS } from "./getCartProductFromLS"

export const updateCartProductTotal = ()=>{

    let productSubTotal = document.querySelector(".productSubTotal")
    let productFinalTotal = document.querySelector(".productFinalTotal")

    let localCartProducts = getCartProductFromLS()
    let initialValue=0
    let totalPrice = localCartProducts.reduce((accum, curElem) =>{
        let productPrice = parseInt(curElem.price) || 0
        return accum + productPrice
    }, initialValue)
    

    productSubTotal.innerText = `₹ ${totalPrice}`
    productFinalTotal.innerText = `₹ ${totalPrice + 50}`

}