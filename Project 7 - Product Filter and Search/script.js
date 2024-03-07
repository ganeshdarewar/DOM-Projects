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

products.data.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("card", item.category, "hide");
  // card.classList.add("card", item.category)

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", item.image);

  imageContainer.appendChild(image);
  card.appendChild(imageContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  // product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = item.productName.toUpperCase();
  container.appendChild(name);

  // price
  let price = document.createElement("h6");
  price.innerText = `$ ${item.price}`;
  container.appendChild(price);

  card.appendChild(container);

  document.getElementById("products").appendChild(card);
});

const cards = document.querySelectorAll(".card");
const categoryButtons = document.querySelectorAll(".button-value");
const searchBtn = document.getElementById("search");
const productsName = document.querySelectorAll(".product-name");

categoryButtons.forEach((item) => {
  // console.log(item.innerText);
  item.addEventListener("click", (e) => {
    switch (item.innerText) {
      case "All":
        cards.forEach((i) => {
          i.classList.remove("hide");
        });
        break;
      case "Topwear":
        filterProducts(item);
        break;
      case "Bottomwear":
        filterProducts(item);
        break;
      case "Jacket":
        filterProducts(item);
        break;
      case "Watch":
        filterProducts(item);
        break;

      default:
        break;
    }
  });
});

window.addEventListener("load", () => {
  cards.forEach((i) => {
    i.classList.remove("hide");
  });
});

function filterProducts(item) {
  cards.forEach((i) => {
    i.classList.add("hide");
    if (i.classList[1] === item.innerText) {
      i.classList.remove("hide");
    }
  });
}
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

searchBtn.addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  if (searchInput === "") {
    alert("Please enter a text to search..");
  } else {
    productsName.forEach((productName, index) => {
      if (productName.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  }
  document.getElementById("search-input").value=""
});
