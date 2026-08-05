const client=document.getElementById('box1');

client.addEventListener('mouseenter', function (e) { //this function shows the position of the mouse in console window when it enters the box area
    const x = e.clientX;
    const y = e.clientY;
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;

    console.log(`client x: ${x}, client y: ${y}`); 
    console.log(`offset x: ${offsetX}, offset y: ${offsetY}`); 
});


// const add=document.getElementById('add'); 
// add.addEventListener('input', function(e){
//       console.log(e.target.value);        //to get the current target, i.e., input through object
// });


const change = document.getElementById('add');
change.addEventListener('change', function (e) {
    console.log(e.target.value);        //it log the input value when the mouse looses the focus
});