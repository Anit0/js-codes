let x = 5;
let y = 6;

let z = x + y;

//Function Intro

console.log(z);

function greet() {
    console.log("Hello World!");
}

greet();

//Function invocations

function sayHello() {
    console.log("Hello");
}

sayHello();
sayHello();
sayHello();

function sayHello(name) {

    console.log("Hello " + name);
}

sayHello("Akhlak");
sayHello("Rahim");
sayHello("Karim");


//Multiple Parameters

function add(a,b) {
    console.log(a+b);
}

add(10,20);
add(5,15);
add(30,10);


//Function Returns

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

function introduce(name,age) {
    console.log("My name is " + name)
    console.log("I am " + age + " years old")

}
introduce("Akhlak",26); //Function Arguments

const add1 = function(a, b) {
    return a + b;
};

console.log(add(10, 20));

const greet1 = function(){
    console.log("Hello World")
};

greet1();

function CheckAge(age){
    if (age >= 18) {
        return "He is adult";
    } else {
        return "He is Minor";
    }
}

console.log(CheckAge(20));
console.log(CheckAge(15));
console.log(CheckAge(23));

var car = {
  type:"Fiat",
  model:"500",
  color:"white"
};

console.log("This is " + car.type);

let car1 = {
    type: "Fiat",
    model: "500",
    color: "white"
};

console.log("This is " + car.type);


const person = {
  firstName: "John",
  lastName : "Doe",
  age      :  50
};

let n1 = "firstName";
let n2 = "lastName";
//let name = person[n2] + " " + person[n1]; 
console.log(person[n1]);

function myfuction(){
    return this;
}

console.log("This is" + myfuction());

let a = 20;
let b = 25;

console.log(a+b);

//let carName = "Voksi";

function myFunction1() {
  var carName = "Volvo"; 
  console.log (typeof carName);
}

function myFunction2() {
  let carName = "Volvo"; 
  console.log (typeof carName); 
}

function myFunction3() {
  const carName = "Volvo";  
  console.log (typeof carName);
}

myFunction1();
myFunction2();
myFunction3(); 

const l = new Date(2024, 5, 15);
console.log(l);

const d = new Date();
console.log(d.getMonth() + 3);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const N = new Date("2024-10-15");
console.log(months[N.getMonth()]);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

let size = fruits.length;
console.log(size);