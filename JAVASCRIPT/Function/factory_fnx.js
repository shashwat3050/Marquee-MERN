function Eagle(name, age, sound, weight) {
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.weight = weight;

    this.eat = function () {
        console.log("Snake");
    };
    this.breed = function () {
        console.log("Golden Eagle")
    };
    this.updateAge = function (age) {
        this.age = age;
    };
}

const myBird = new Eagle("Dox", 35, "High-pitched whistle or chirp", 6);

console.log(myBird.name);
console.log(myBird.age);
console.log(myBird.sound);
console.log(myBird.weight);
// console.log(myBird);

myBird.breed();
myBird.eat();

//updating the detail
myBird.updateAge(30);