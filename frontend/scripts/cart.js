let grandTotal = 0;
// Dropdown

// var dropDownContent = document.getElementById("womenDD");
// dropDownContent.style.display = "none";
// function mouseOverToggle() {
//     dropDownContent.style.display = "";
// }
// function mouseOutToggle() {
//     dropDownContent.style.display = "none";
// }

// showing cart data on page

let cartData = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartData);
let productContainer = document.getElementById("leftProductDisplay");

displayData(cartData);
function displayData(products) {
    productContainer.innerHTML = null;
    products.forEach((el, index) => {
        let product = document.createElement("div");
        product.setAttribute("class", "productCard");
        let productImage = document.createElement("img");
        productImage.setAttribute("src", el.image);
        let productName = document.createElement("p");
        productName.setAttribute("class", "productName");
        productName.innerText = el.title;
        let productPrice = document.createElement("p");
        productPrice.setAttribute("class", "productPrice");
        productPrice.innerText = el.price;
        //calculating the grand total of cart
        grandTotal = grandTotal + Number(el.price);
        // deleting from cart
        let removeProduct = document.createElement("button");
        removeProduct.setAttribute("class", "removeProductBtn");
        removeProduct.innerText = "Remove";
        removeProduct.addEventListener("click", function () {
            let cartData = products.filter((el, i) => {
                if (i !== index) {
                    return true;
                }
            });
            grandTotal = 0;
            displayData(cartData);
            localStorage.setItem("cart", JSON.stringify(cartData));
        });

        product.append(productImage, productName, productPrice, removeProduct);
        productContainer.append(product);
    });
    // appending grandTotal
    document.getElementById("grandTotal").textContent = grandTotal;
    // console.log(grandTotal);
}
