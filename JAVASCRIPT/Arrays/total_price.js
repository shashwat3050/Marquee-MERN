const cart = [
    { name: 'Laptop', quantity: 1, price: 55000 },
    { name: 'Mouse', quantity: 2, price: 700 },
    { name: 'Keyboard', quantity: 1, price: 1500 },
    { name: 'Monitor', quantity: 2, price: 12000 },
    { name: 'Headphones', quantity: 1, price: 2500 },
    { name: 'USB Cable', quantity: 3, price: 250 },
    { name: 'Webcam', quantity: 1, price: 3200 },
    { name: 'External Hard Drive', quantity: 1, price: 4800 },
    { name: 'Laptop Stand', quantity: 2, price: 900 },
];

function totalPrice(cart) {
    return cart.reduce((total, item) => {
        return total + (item.price*item.quantity);
    }, 0);
}
console.log(totalPrice(cart));