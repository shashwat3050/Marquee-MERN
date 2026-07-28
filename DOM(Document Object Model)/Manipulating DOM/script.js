//1. create element --------------------------------

let ele = document.createElement('li');
ele.innerText = 'LIST-5 - appended';
console.log(ele);



//2. append child ------------------------------

let list = document.getElementById('ul1');
list.appendChild(ele);  //List 5 got appended

//----- practice question to append through array -----
const fruit_name = ["Apple", "Banana", "Grapes", "Guava", "Mango"];

let add = document.getElementById("fruit");

fruit_name.forEach((fruit) => {
    let list_item = document.createElement("li");
    list_item.textContent = fruit;

    add.appendChild(list_item);
});



//3. before begin  -----------------------------

//----- through JS -----
// const before_begin = document.getElementById('parent');
// before_begin.insertAdjacentHTML('beforebegin', '<p>this is added </strong> before begin</strong></p>');

//----- through DOM Manipulation -----
const add_ele = document.getElementById('parent');
const added_header = document.createElement('h2');
added_header.textContent = 'this is added as "before begin"';
add_ele.before(added_header);  //to add at last just change 'before' to 'after'

// also, after begin = prepend
//       before end = append



//4. Parent-child relation ------------------------------

//-----remove child -----
let remove_list = document.getElementById('parent');
let lastChild = remove_list.lastElementChild; //this will remove the last list from the original
// if we add ".previousElementSibling" then this will remove the last second element
remove_list.removeChild(lastChild);

//----- clone child -----
let clone_child = document.getElementById('parent');
let clone_item = list.lastElementChild;
let cloned = clone_item.cloneNode(true);
clone_child.append(cloned);



//5. Insert before -------------------------------

// let insert_item = document.getElementById('parent');
// let p = insert_item.parentNode;
// let new_item = document.createElement('li');
// new_item.textContent = 'Done using "Insert Before!"';

// insert_item.insertBefore(new_item, first_item);



//6. Attributes --------------------------------

let ip_item = document.getElementById('input_text');

//----- getAttribute() -----
let get_id = ip_item.getAttribute('id');
let get_val = ip_item.getAttribute('value');

console.log(get_id, ",", get_val);

//----- setAttribute() -----


//----- hasAttribute() -----
const hasAtt = ip_item.hasAttribute('id');
console.log(hasAtt);

//----- removeAttribute() -----
ip_item.removeAttribute('placeholder');

const after_remove = ip_item.attributes; //to get the number of attributes that are remaining
console.log(`After Remove: ${after_remove.length}`);



//7. to Update the "CSS" through DOM Mnipulation --------------------------------

const para = document.getElementsByTagName('p')[0];

//----- style Property examples - to do one-by-one -----
// para.style.backgroundColor = 'red';
// para.style.padding = '2px 10px';
// para.style.fontSize = '1.5rem';

//----- style.cssText (applies multiple styles at once) -----
para.style.cssText = 'background:red; font-size:1.6rem; padding:2px 10px;';
console.log(para);



// =========================================
// ========= JS for BULB Html code =========
const bulb = document.getElementById('bulb');
const onButton = document.getElementById('on');
const offButton = document.getElementById('off');

onButton.addEventListener('click', () => {
    bulb.classList.remove('off');
    bulb.classList.add('on');
});

offButton.addEventListener('click', () => { 
    bulb.classList.remove('on');
    bulb.classList.add('off');
});

