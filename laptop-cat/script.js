var cart = document.getElementById("cart");
var cartHold = document.getElementById("cart-hold");
let count = 0;
var coun = document.createElement("p");

var addCart = document.getElementById("add-to-cart");
addCart.addEventListener("click", function(){
        count++;
        coun.innerHTML = count
        cartHold.appendChild(count);
        console.log(count);
    });
