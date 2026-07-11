//create a function createArrays that uses facctory function
//1. that push() element to the array
//2. return the array

function createArray() {
    const arr = [];
    return {
        push(element) {
            arr.push(element);
            return arr;
        },
        getElement(idx) {
            if(idx>=arr.length){
                return "Error!, Index not found";
            }
            return arr[idx];
        },
        getArray() {
            return arr;
        }
    };
}

const myArr = createArray();
myArr.push(33);
myArr.push(49);
myArr.push(44);
myArr.push(15);
myArr.push(84);

console.log(myArr.getElement(5));
console.log(myArr.getArray());