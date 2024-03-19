import './style.css'

import products from "./api/products.json"
import { showProductContainer } from './homeProductsCards'

//call the function to display all cards
showProductContainer(products)