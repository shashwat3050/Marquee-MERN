let d=this.document;

//1. getting element by the id name ---------------------

let UL1= document.getElementById('ul1');
let UL2= document.getElementById('ul2');

console.log(UL1);



//2. getting element by the class name ---------------------

let my_item=document.getElementsByClassName('items');
console.log(my_item);
//--accessing them using the forEach loop--
// Object.values(my_item).forEach((ele) => {
//     console.log(ele.textContent);    //.textContent is used to get the content at ecah element
// });



//3. getting element by the name -----------------------------

let tag=document.getElementsByTagName('ul');
console.log(tag);
//--accessing them using the forEach loop--
Object.values(tag).forEach((ele) => {
    console.log(ele.textContent);    //.textContent is used to get the content at ecah element
});



//4. getting element by the querySelector -----------------------------

// let query=document.querySelector('#ul2');
// console.log(query);
//--to get a particular child--
let query = document.querySelector('#ul2 :nth-child(2)');
console.log(query);