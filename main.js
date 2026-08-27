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