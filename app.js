class Customer {
    constructor(n){
        this.name = n;
    }

    age = 19;

    buy(){
        console.log("JavaScript God");
    }
}

class GuestCustomer extends Customer{
    hello(){
        console.log("hi");
    }
}

let customer1= new GuestCustomer("harsh");

console.log(customer1);

customer1.buy();