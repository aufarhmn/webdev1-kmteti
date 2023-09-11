// Change HTML Elements
// JavaScript can change all the HTML elements in the page
document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").style.fontSize = "35px";
// document.getElementById("demo").style.display = "none";
// document.getElementById("demo").innerHTML = 5 + 6;
// document.write(5 + 7);
// window.alert(5 + 7);
// alert(5 + 7);
// console.log(5 + 7);
// console.log("Hello World");

/*  
    JavaScript Statements
    Semicolons separate JavaScript statements
    Multiple statement on one line is allowed
    JavaScript statements are composed of:
    Values, Operators, Expressions, Keywords, and Comments
    Values
    The JavaScript syntax defines two types of values: Fixed values and Variable values
    Fixed values are called Literals
    Variable values are called Variables
    Literals
    Numbers are written with or without decimals
    Strings are text, written within double or single quotes
    Boolean are true or false
    Arrays are written with square brackets
    Objects are written with curly brackets

    When to Use var, let, or const?
    1. Always declare variables
    2. Always use const if the value should not be changed
    3. Always use const if the type should not be changed (Arrays and Objects)
    4. Only use let if you can't use const
    5. Only use var if you MUST support old browsers.
*/
// let a, b, c;  
// a = 5;     
// b = 10;        
// c = a + b;   
// console.log(c);

// a = 5; b = 4; c = a + b;
// c = a - b;
// c = a * b;
// c = a / b;
// c = a % b;
// c = a ** b;
// c = ++a;
// c = --a;
// c = a++;
// c = a--;
// c = (a + b) * 10;
// console.log(c);
// console.log(typeof c);

// kalimat = "Hello World";
// kalimat = "John" + " " + "Doe";
// kalimat += " " + "Peterson";
// console.log(kalimat);
// console.log(typeof kalimat);

// let lastname, lastName;
// lastName = "Doe";
// lastname = "Peterson";
// console.log(lastName);
// console.log(lastname);

// let vs var vs const
// let x = "John Doe";
// let x = 0;
// var x = "John Doe";
// var x = 0;
// console.log(x);
// const y = "John Doe";
// y = 0;
// console.log(y);

// Block Scope
// var x = 10;
// {
//     var x = 2;
// }
// console.log(x);
// let x = 10;
// {
//     let x = 2;
// }
// console.log(x);

/*
    JavaScript Data Types
    JavaScript variables can hold many data types: numbers, strings, objects and more
*/
// Numbers:
// let length = 16;
// let weight = 7.5;

// Strings:
// let color = "Yellow";
// let lastName = "Johnson";

// Booleans
// let x = true;
// let y = false;
// console.log(x);

// Object:
// const person = { firstName:"John", lastName:"Doe" };
// console.log(person.firstName + " " + person.lastName);

// Array object:
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[1]);

// Date object:
// const date = new Date("2022-03-25");
// console.log(date);

/*  
    Javascript Functions
    A JavaScript function is a block of code designed to perform a particular task.
    A JavaScript function is executed when "something" invokes it (calls it).
*/
// let x = myFunction(4, 3);
// console.log(x);

// function myFunction(a, b) {
//   return a * b;
// }

// function greetings() {
//     return "Hello!";
// }
// console.log(greetings());

// Arrow Function
// hello = () => "Hello Worlds!";
// console.log(hello());

/*
    JS Object
    Objects are variables too. But objects can contain many values.
    The values are written as name:value pairs (name and value separated by a colon).
    It is important to know this
*/
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// console.log(person.firstName + " is " + person.age + " years old.");
// console.log(person["firstName"] + " is " + person.age + " years old.");

/*
    JS Methods
    Methods are actions that can be performed on objects.
    Methods are stored in properties as function definitions.
    A method is a function, belonging to an object. It can be referenced using the this keyword.
*/
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName + " " + this.id;
//     }
// };

// console.log(person.fullName());

/*
    JS Arrays
    JavaScript arrays are written with square brackets.
    Array items are separated by commas.
    The following code declares (creates) an array called cars, containing three items (car names):
*/
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);

// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// cars[0] = "Opel";
// console.log(cars[0]);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
// document.getElementById("demo").innerHTML = fruits.join(" * ");
// document.getElementById("demo").innerHTML = fruits;

/*
    JS If Else
    Use if to specify a block of code to be executed, if a specified condition is true
    Use else to specify a block of code to be executed, if the same condition is false
    Use else if to specify a new condition to test, if the first condition is false
    Use switch to specify many alternative blocks of code to be executed
*/
// let time = 20;
// if (time < 10) {
//     console.log("Good morning");
// } else if (time < 20) {
//     console.log("Good day");
// } else {
//     console.log("Good evening");
// }

// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";  
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";   
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     default:
//         day = "Saturday";
// }
// console.log("Today is " + day);

/*
    JS Loops
    Loops can execute a block of code a number of times.
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true
*/
for (let i = 0; i < 5; i++) {
    console.log("The number is " + i);
}

// const cars = ["BMW", "Volvo", "Mini"];
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// const person = {fname:"John", lname:"Doe", age:25};
// let text = "";
// for (let x in person) {
//     text += person[x] + " ";
// }
// console.log(text);

const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
    text += x + " ";
}
console.log(text);

let i = 0;
while (i < 10) {
    console.log("The number is " + i);
    i++;
}
console.log(i);

let y = 0;
do {
    console.log("The number is " + y);
    y++;
}
while (y < 10);
console.log(y);