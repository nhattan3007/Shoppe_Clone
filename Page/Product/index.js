let quantity = 1;
document.getElementById("quantity-input").value = 1;

// increase_input
function increase_input() {
  if (quantity < product.stock) {
    quantity++;
    document.getElementById("quantity-input").value = quantity;
  }
}

document.getElementById("increase-quantity-button").onclick = increase_input;

// decrease_input
function decrease_input() {
  if (quantity > 1) {
    quantity--;
    document.getElementById("quantity-input").value = quantity;
  }
}

document.getElementById("decrease-quantity-button").onclick = decrease_input;

// hàm thay đổi trực tiếp giá trị trong input
function change_input() {
  quantity = document.getElementById("quantity-input").value;
}

//thay đổi từ HTML vào JS
document.getElementById("quantity-input").onchange = change_input;

const product = {
  name: "Áo",
  price: 50,
  imgurl:
    "https://contents.mediadecathlon.com/p2606947/k$1c9e0ffdefc3e67bdeabc82be7893e93/dry-men-s-running-breathable-t-shirt-red-decathlon-8771124.jpg",
  stock: 100,
};

document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent = product.price;
document.getElementById("product-image").src = product.imgurl;
