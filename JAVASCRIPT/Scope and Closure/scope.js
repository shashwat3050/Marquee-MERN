let a='Global variable';

function first(){
    console.log(a);
}

function second(){
    let a="Inside the second fnx"
    console.log(a);

    first();
}

second();