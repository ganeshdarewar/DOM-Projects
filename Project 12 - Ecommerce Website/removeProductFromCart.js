import { getCartProductFromLS } from "./getCartProductFromLS"
import { updateCartValue } from "./updateCartValue"
import { showToast } from "./showToast"

export const removeProductFromCart = (id) =>{
    let cartProducts = getCartProductFromLS()

    cartProducts = cartProducts.filter((curProd) => curProd.id !== id)

    // update product from LS
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts))

    // to remove div 
    let removeDiv = document.getElementById(`card${id}`)
    if(removeDiv){
        removeDiv.remove()
        showToast("Delete", id)
    }

    updateCartValue(cartProducts)
}