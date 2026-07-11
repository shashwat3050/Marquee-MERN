let globalVariable = "global variable";
function outer() {
    let outerVariable = "outer variable";
    function inner() {
        let innerVariable = "inner variable";

        console.log(innerVariable);
        console.log(outerVariable);
        console.log(globalVariable);
    }
    inner();
}
outer();