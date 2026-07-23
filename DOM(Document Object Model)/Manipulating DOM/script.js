//1. create element --------------------------------

let ele=document.createElement('li');
ele.innerText = 'LIST-5 - appended';
console.log(ele);



//2. append child ------------------------------

let list=document.getElementById('ul1');
list.appendChild(ele);  //List 5 got appended

//----- practice question to append through array -----
const fruit_name=["Apple", "Banana", "Grapes", "Guava", "Mango"];

let add=document.getElementById("fruit");

fruit_name.forEach((fruit) =>{
    let list_item = document.createElement("li");
    list_item.textContent = fruit;

    add.appendChild(list_item);
});



//3. before begin  -----------------------------

// const before_begin = document.getElementById('parent');
// before_begin.insertAdjacentHTML('beforebegin', '<p>this is added </strong> before begin</strong></p>');

//----- through DOM Manipulation -----
const e = document.getElementById('parent');
const added_header = document.createElement('h2');
added_header.textContent = 'this is added as "before begin"';
e.before(added_header);  //to add at last just change 'before' to 'after'

// also, after begin = prepend
//       before end = append