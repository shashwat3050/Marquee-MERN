const form = document.getElementById("form");
const tableBody = document.querySelector("#table tbody");

let new_product = JSON.parse(localStorage.getItem("products")) || [];

function productDetails() {
    tableBody.innerHTML = "";

    new_product.forEach(function (p, index) {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${p.name}</td>
                <td>${p.category}</td>
                <td>₹${p.price}</td>
                <td>${p.quantity}</td>
                <td>
                    <button onclick="deleteProduct(${index})" style="background-color:red;">Remove</button>
                </td>
            </tr>`;
    });
}

function deleteProduct(index){
    new_product.splice(index, 1);
    // new_product[index].price = Number(new_product[index].price) * 2;
    // new_product[index].quantity = Number(new_product[index].quantity) * 2;
    localStorage.setItem("products", JSON.stringify(new_product));
    productDetails();
}

productDetails();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const product = {
        name: formData.get("name"),
        category: formData.get("category"),
        price: formData.get("price"),
        quantity: formData.get("quantity")
    };

    new_product.push(product);

    localStorage.setItem("products", JSON.stringify(new_product));

    productDetails();

    form.reset();
});