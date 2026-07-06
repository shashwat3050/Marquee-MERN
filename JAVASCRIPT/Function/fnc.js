// function sayHello(name){
//     console.log(`Hello my name is ${name}`);
// }


// function execute(fr, name){
//     fn(name);
// }
// execute(sayHello, 'Shashwat');


//------------calling function through another function with passing any argument-----------
// let name='inner Function'
// function me() {
//     console.log("this is the main function")
//     return inner();
// }
// function inner() {
//     console.log(`this is ${name}`);
// }

// me();


//------------calling function through a variable------------
// function outer(){
//     console.log("function called using a variable")
//     return inner;
// }
// function inner(){
//     console.log(`this is inner function`);
// }

// let fun = outer();
// fun();


//------------Passed as an Argument to Another Function-----------
// function outer(callbackFunction) {
//     console.log("outer function is now running");
//     //executed the function that was passed-in as an argument
//     callbackFunction();
// }
// function inner() {
//     console.log(`this is inner function`);
// }

// //Passing inner fnx as an argument into outer fnx
// outer(inner);


//------------returned from a Function----------
function outer() {
    console.log("outer function");

    //returning the inner function directly
    return function inner() {
        console.log("returned from a Function");
    };
}
let fun = outer();
fun(); 




