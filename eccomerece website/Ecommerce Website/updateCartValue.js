export const updateCartValue = (cartProducts)=>{
    document.getElementById("cartValue").innerHTML=`<i class="fa-solid fa-cart-shopping">${cartProducts.length}</i>`
}