const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click",() => {
    body.classList.add("active")
})
closeShopping.addEventListener("click",() => {
    body.classList.remove("active")
})
let products = [
    {
        id:1,
        name:"PRODUCT 1",
        image: "assets/kabrita__slider1.svg",
        price: 2000
    },
    {
        id:2,
        name:"PRODUCT 2",
        image: "assets/kabrita__slider2.svg",
        price: 1000
    },
    {
        id:3,
        name:"PRODUCT 3",
        image: src="assets/kabrita__slider3.svg",
        price: 6000
    },
    {
        id:4,
        name:"PRODUCT 4",
        image: "assets/kabrita__slider4.svg",
        price: 2000
    },
    {
        id:5,
        name:"PRODUCT 5",
        image: "assets/kabrita__slider5.svg",
        price: 1000
    },
    {
        id:6,
        name:"PRODUCT 6",
        image: "assets/kabrita__slider6.svg",
        price: 1500
    },
    {
        id:7,
        name:"PRODUCT 7",
        image: "assets/kabrita__slider7.svg",
        price: 1500
    },
    {
        id:8,
        name:"PRODUCT 8",
        image: "assets/kabrita__slider8.svg",
        price: 1500
    },
    {
        id:9,
        name:"PRODUCT 9",
        image: "assets/kabrita__slider9.svg",
        price: 1500
    },
]

let listCards = [];
// products.image.style.width = '100px';
// products.image.style.height = '100px';
const initApp = ()=> {
    products.forEach((value,key) =>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src ="${value.image}">
        <div class = "title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick = "addToCard(${key})">Add To Card</button>
        `
        list.appendChild(newDiv)
    })
}
initApp()

const addToCard = (key) => {
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1
    }
    reloadCard();
}
const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value,key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
            <div><img src ="${value.image}"></div>
            <div class = "cardTitle">${value.name}</div>
            <div class = "cardPrice"> ${value.price.toLocaleString()}
            </div>
            <div>
                <button style="background-color:  #002169;"
                  class="cardButton" onclick ="changeQuantity(${key},
                  ${value.quantity -1})">-</button>
                <div class="count">${value.quantity}</div>
                <button style="background-color:  #002169;"
                  class="cardButton" onclick = "changeQuantity(${key},
                  ${value.quantity +1})">+</button>
             </div>
            `
            listCard.appendChild(newDiv);
        }
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })

}

const changeQuantity = (key,quantity) => {
    if(quantity == 0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}