let arr={
    greet: function(){
        console.log(`Hii my name is ${this.name}`);
        
    }
}
const p1 = { name: 'harsh'};
const p2 = { name: 'shashwat'};

arr.greet.call(p1);