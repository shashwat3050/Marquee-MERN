debugger;
let n=5; //global variable declaration

function add(){
    console.log(n);
    count=0;

    function counter(){
        while(count<n){
            console.log(count);
            count++;
        }
    }
    counter(); //calling the inner function inside the main function
}

add(); //now calling the main function for the execution
