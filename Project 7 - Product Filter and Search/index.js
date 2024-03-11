let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "short-skirt.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartwatch.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "knitted-top.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "black-leather-jacket.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "pink-trousers.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "brown-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "comfy-gray-pants.jpg",
      },
    ],
  };
  
function createCards(){
  products.data.forEach((product)=>{
    const cards = document.createElement("div")
    cards.classList.add("card", product.category)

    const imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    const img = document.createElement("img")
    img.src=product.image

    textContainer = document.createElement("div")
    textContainer.classList.add("container")

    textContainer.innerHTML=`
    <h5 class="product-name">${product.productName.toUpperCase()}</h5>
    <h6> $ ${product.price}</h6>
    `
    imgContainer.appendChild(img)
  
    cards.appendChild(imgContainer)
    cards.appendChild(textContainer)
    document.querySelector("#products").appendChild(cards)
  }

  )
}
createCards()

function addBackgroundToButtons(button){
  buttons.forEach((btn)=>{
      btn.classList.remove("active")
  })
  button.classList.add("active")
}

function filterCards(button){
  cards.forEach((card)=>{
    if(button.innerText === "All"){
      card.classList.remove("hide")
    }
    else{
      if(card.classList.contains(button.innerText)){
        card.classList.remove("hide")
      }
      else{
        card.classList.add("hide")
      }
    }
  })
}

const buttons = document.querySelectorAll(".button-value")
const cards = document.querySelectorAll(".card")
buttons.forEach((button)=>{
  button.addEventListener("click", ()=>{
      addBackgroundToButtons(button)
      filterCards(button)
  })
})

let searchBtn = document.getElementById("search")
searchBtn.addEventListener("click", ()=>{
  let searchInput = document.getElementById("search-input").value
  let productName = document.querySelectorAll(".product-name")
  if(searchInput === ""){
    alert("please search products")
  }
  else{
    productName.forEach((pName, index)=>{
      if(pName.innerText.includes(searchInput.toUpperCase())){
        cards[index].classList.remove("hide")
      }
      else{
        cards[index].classList.add("hide")
      }
    })
  }
  document.getElementById("search-input").value=""
})
