import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartProductFromLS();
    const currentProductElem = document.querySelector(`#card${id}`);
    
    let quantity = currentProductElem.querySelector(".productQuantity").innerText;
    let price = currentProductElem.querySelector(".productPrice").innerText;

    price = price.replace("₹ ", "");
    
    let existingProduct = arrLocalStorageProduct.find((curProduct) => curProduct.id === id);
    
    if (existingProduct && quantity > 2) {
        quantity = Number(existingProduct.quantity) + Number(quantity);
        price = Number(price * quantity);
        
        let updatedCart = { id, quantity, price };
        arrLocalStorageProduct = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });
        
        localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
        updateCartValue(arrLocalStorageProduct);
        showToast("Add", id)
        return; // Exit the function as the cart has been updated
    }
    

    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStorageProduct.push({ id, quantity, price });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    showToast("Add", id)
    updateCartValue(arrLocalStorageProduct);
};
