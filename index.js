const object1 = {
    name: "Áo Khoác",
    price: 139,
    quantity: 1
}

const object2 = {
    name: "Bánh Tráng Phơi Sương",
    price: 79,
    quantity: 2
}

const object3 = {
    name: "Chân gà bà tuyết diamond",
    price: 8,
    quantity: 5
}

const Shopping_cart = {
    object1,
    object2,
    object3
}

const result = (object1.price * object1.quantity) + (object2.price * object2.quantity) + (object3.price * object3.quantity);
console.log("Tổng tiền = ", result);
console.log("Tổng tiền sau giảm 10% = ",result * 0.9);
console.log("Tổng tiền sau giẩm 10% và phí ship = ",(result *0.9) + 10);