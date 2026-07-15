// In JavaScript, the this keyword is a shortcut that refers to an object.
// Which object? It depends entirely on how the function is called, not where it is written.


// 1. Default (Global Context)-------------------

//---------direct print-------------
// console.log(this); // prints "{}"

// function this_keyW() {
//     console.log(this);
// }
// this_keyW(); // Prints the window object

//---------- with the "use strict" mode -----------
// "use strict";
// function this_keyW() {
//     console.log(this);
// }
// this_keyW(); // prints "undefined"


// 2. Implicit Binding (Object Method)--------------------

// const user = {
//     name: "harsh",
//     my_name() {
//         console.log(this.name);
//     }
// };
// user.my_name();  Prints "Alex" because 'user' is left of the 'dot'-here dot means while calliing the function, the name/function which is called


// 3. Explicit Binding (call, apply, bind)---------------------

//You can force 'this' to be exactly what you want by using  these methods-

// function myName() {
//     console.log(this.name);
// }
// const person ={name: "Shashwat"};
// myName.call(person);


// 4. The new Keyword Binding----------------------

// When a function is invoked with the new keyword, JavaScript creates a brand-new, empty object behind the scenes.
// In that function, this points to that brand-new object.

function my_Car(brand_name) {
    this.brand_name = brand_name;
}
const car_brand = new my_Car("the brand is BMW");
console.log(car_brand.brand_name);



