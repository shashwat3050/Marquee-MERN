function Student(name, enro, phone, email, address, course, year) {
    this.name = name;
    this.enro = enro;
    this.phone = phone;
    this.email = email;
    this.address = address;

    this.course = function () {
        console.log("BTech");
    };
    
    this.year = function () {
        console.log("2024");
    };
}
const myStudent = new Student("Harsh", 2403051050970, 1234567890, "shashwat3050@gmail.com", "Uttar Pradesh");

console.log(myStudent.name);
console.log(myStudent.enro);
console.log(myStudent.phone);
console.log(myStudent.email);
console.log(myStudent.address);

myStudent.course();
myStudent.year();