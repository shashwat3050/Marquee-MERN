//normal access of the variables
let name="Shashwat";
console.log(name);


//accessing of the variables before the initialization causes in 'undefined' behaviour
console.log(me);
var me="Harsh";


//accessing of the function before the initialization will not causes any type of error because the function is already been stored somewhere in memory
greet();
var fruit="mango";
function greet(){
    console.log("Good Afternoon!")

    //this will cause undefined because the variable is not defined before the function is called
    console.log(fruit);
}


//this will cause error because it's hosted but not declared
// console.log(a1);
// let a1="inside let";


//this is also undefined because a2 is limited to it's own block and the outside the block a2 is not initialized
let a2;
{
    let a2="abc"
}
console.log(a2);


