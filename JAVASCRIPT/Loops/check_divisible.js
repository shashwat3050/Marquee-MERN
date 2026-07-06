function divisible() {
    let sum = 0;
    for (let i = 1; i <= 30; i++) {
        if(i%3==0 && i%5==0){
            console.log(i+" ");
        }
    }
    return sum;
}

divisible();