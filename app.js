// class Customer {
//     constructor(n){
//         this.name = n;
//     }

//     age = 19;

//     buy(){
//         console.log("JavaScript God");
//     }
// }

// class GuestCustomer extends Customer{
//     hello(){
//         console.log("hi");
//     }
// }

// let customer1= new GuestCustomer("harsh");

// console.log(customer1);

// customer1.buy();


// let list = ["Audi", "Honda", "BMW"];

// let newList = [...list, "Ferrari"];

// console.log(newList);

// let person = {
//     name: "Harsh"
// }

// let newPerson = {
//     ...person,
//     city: "Noida"
// }


// console.log(newPerson);

let person = {
    name: "Harsh",
    age: 19
}

let person2 = person;

person2.name = "Gupta"

console.log(person);
console.log(person2);