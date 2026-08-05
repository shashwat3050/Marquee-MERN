const products = [
    {
        productId: 101,
        name: "Wireless Mouse",
        price: 19.99,
        quantity: 50,
        brand: "Logitech"
    },
    {
        productId: 102,
        name: "Mechanical Keyboard",
        price: 79.99,
        quantity: 30,
        brand: "Redragon"
    },
    {
        productId: 103,
        name: "Gaming Headset",
        price: 49.99,
        quantity: 25,
        brand: "HyperX"
    },
    {
        productId: 104,
        name: "USB-C Charger",
        price: 24.99,
        quantity: 60,
        brand: "Anker"
    },
    {
        productId: 105,
        name: "Bluetooth Speaker",
        price: 39.99,
        quantity: 40,
        brand: "JBL"
    },
    {
        productId: 106,
        name: "Smart Watch",
        price: 199.99,
        quantity: 15,
        brand: "Samsung"
    },
    {
        productId: 107,
        name: "Laptop Stand",
        price: 34.99,
        quantity: 35,
        brand: "Amazon Basics"
    },
    {
        productId: 108,
        name: "External SSD",
        price: 129.99,
        quantity: 20,
        brand: "Samsung"
    },
    {
        productId: 109,
        name: "HD Webcam",
        price: 59.99,
        quantity: 18,
        brand: "Logitech"
    },
    {
        productId: 110,
        name: "Wireless Earbuds",
        price: 89.99,
        quantity: 45,
        brand: "Sony"
    },
    {
        productId: 111,
        name: "Power Bank",
        price: 29.99,
        quantity: 55,
        brand: "Mi"
    },
    {
        productId: 112,
        name: "Monitor 24-inch",
        price: 179.99,
        quantity: 12,
        brand: "Dell"
    },
    {
        productId: 113,
        name: "Graphics Tablet",
        price: 69.99,
        quantity: 14,
        brand: "XP-Pen"
    },
    {
        productId: 114,
        name: "Gaming Chair",
        price: 249.99,
        quantity: 8,
        brand: "Green Soul"
    },
    {
        productId: 115,
        name: "Desk Lamp",
        price: 22.99,
        quantity: 32,
        brand: "Amazon Basics"
    }
]

const grid = document.getElementById('main-id');

products.forEach(ele => {
    const card = document.createElement('div');
    card.className='card';

    const title = document.createElement('h3');
    title.textContent = ele.name;
    
    const id = document.createElement('p');
    id.innerHTML='<span class="meta">ID: </span>' +ele.productId;

    const brand = document.createElement('p');
    brand.innerHTML = '<span class="meta">Brand: </span>' + ele.brand;

    const price = document.createElement('p');
    price.innerHTML = '<span class="meta">Price: </span>' + ele.price;

    const qty = document.createElement('p');
    qty.innerHTML = '<span class=   "meta">Quantity: </span>' + ele.quantity;

    card.appendChild(title);
    card.appendChild(id);
    card.appendChild(brand);
    card.appendChild(price);
    card.appendChild(qty);

    grid.appendChild(card);
});