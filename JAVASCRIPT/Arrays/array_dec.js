//1. Array Literal Notation---------------

//empty array declaration
const arr = [];

//value initialized
const fruits = ['Apple', 'Banana', 'Orange'];

//different data types (arrays are heterogeneous in JS)
const mixed_arr = ['John Doe', 24, true, { active: true }]; 



//2. Array Constructor (new Array())-----------------

//empty array via a constructor
const arr1 = new Array();

//value initialized
const arr3 = new Array('HTML', 'CSS', 'JS');

//array of specific length
const arr2 = new Array(5);
console.log(arr2.length);



//3. Array.of() Method----------------------

//array with single element
const singleNumArr = Array.of(5);

//consists of multiple data type elements
const multipleArgsArr = Array.of(10, 'Hello', true);



//4. Array.from() Method---------------------

//array from a String
const stringToArr = Array.from('hello'); //['h', 'e', 'l', 'l', 'o']

//sequence array using an object with a length property
const sequenceArr = Array.from({ length: 3 }, (value, index) => index + 1); // [1, 2, 3]



//5. Multidimensional / Nested Array Declaration-------------------

// 2D array Matrix declaration using literal syntax
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][1]);



//6. Typed Arrays (Binary Data Handling)--------------

//fixed-size 8-bit unsigned integer array (values capped 0-255)
const byteBufferArr = new Uint8Array(4);
byteBufferArr[0] = 255;
byteBufferArr[1] = 128;

// Creates a 32-bit floating-point array
const floatArr = new Float32Array([1.5, 2.5, 3.5]);
