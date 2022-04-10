const productsEL = document.querySelector(".products");
const cartItemEL = document.querySelector(".cartBody");
const subTotalEL = document.querySelector(".subtotal");
const totalItemsInCartEL = document.querySelector(".totalItemsInCart");
const cartNavEL = document.querySelector(".cartNav");

//add products on the page
function addProducts(){
    products.forEach( (products) => {
        productsEL.innerHTML += `
        <div class="col-4 ">
        <a href="${products.info}">
        <img src="${products.img_src}">
        <h4>${products.name}
      </h4>
        <div class="rating">
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star-half-o"></i>
        </div>
        </a>
        <strong>$${products.price}</strong><br>
        <div class="add_to_cart" onclick="addToCart(${products.id})">
        <button class="btn-1" >Add To Cart</button>
        </div> 
    </div>
        `
    });
}
addProducts();

let cart = [];

//add products in cart
function addToCart(id){
    // console.log(id);
    if(cart.some( (item) => item.id === id)){
        alert("Product already in cart!!!");
    }
    else{
        const item = products.find( (products) => products.id === id);

        // console.log(item);
        cart.push({
            ...item,
            numberofUnit : 1
        });
        console.log(cart); 
    }
 updateCart();
}

//function for update the cart
function updateCart(){
    showCartItems();   //function for show the cart items in cart
    subtotal();        //function for subtotal of price of the items in cart
}

//show the total amount in cart
function subtotal(){
    let totalPrice = 0,
    totalItems = 0;

    cart.forEach( (item) => {
        totalPrice += item.price * item.numberofUnit;
        totalItems += item.numberofUnit;
    })

    subTotalEL.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`
    totalItemsInCartEL.innerHTML = `Cart(${totalItems})`;
    cartNavEL.innerHTML = `My Cart (${totalItems})`
}

// show products in cart
function showCartItems(){
    cartItemEL.innerHTML = "";
cart.forEach( (item) =>{
    cartItemEL.innerHTML += `
    <div class="items">
    <div class="Sno"> <u><b>Product No. : ${item.pno}</b></u> </div>
    <div><img src="${item.img_src}" alt="SHOES" width="70px" height="70px" align="center"><br>${item.name}</div>
    </div>
    <div class="price">
    <div><span>Price : ${item.price} </span></div>
    </div>
    <div class="quantity">
    <div><span>Qt. : ${item.numberofUnit}</span></div>
    </div>
    <button class="removeBtn" onclick="removeItem(${item.id})"> Remove Item </button>
    <hr> <br>
    `
})
}

//remove products from cart
function removeItem(id){
   cart = cart.filter((item) => item.id !== id)

   updateCart();
}