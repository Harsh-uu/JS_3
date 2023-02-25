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

// let person = {
//     name: "Harsh",
//     age: 19
// }

// let person2 = {
//     ...person
// }

// person2.name = "Gupta"

// console.log(person);
// console.log(person2);

//map

// let array1 = [3, 5, 7, 10];

// let array2 = array1.map( x =>  x*2 );

// console.log(array2);

//filter

let array1 = [2, 5, 7, 10];

let array2 = array1.filter( x =>  x%2 == 0 );

console.log(array1);
console.log(array2);

let array3 = array1.filter(function(x){
    if(x%5 == 0){
        return x;
    }
})

console.log(array3);