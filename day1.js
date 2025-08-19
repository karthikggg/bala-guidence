// MILESTONE 1
// History of JS
// ECMA Script
// How javascript and ECMA are related.
// DOM and Browser Object Model
// DOM allows you to manipulate HTML
document.getElementById("myButton").onclick = function () {
  alert("Button clicked!");
};

// Ezamples of BOM
window.location.href = "https://example.com"; // Navigate
window.history.back(); // Go back
navigator.userAgent; // Browser info
screen.width;

// MILESTONE 2
// Case-sensitivity
let myVariable = 5;
let MyVariable = 10; // Different variable!
let MYVARIABLE = 15; // Also different!

// Function names too
function sayHello() {}
function SayHello() {}
// Identifiers
let userName;
let _private;
let $jquery;
let user123;
// Comments
// Strict Mode
("use strict");

// Now this will throw an error (undeclared variable)
myVar = 5; // ReferenceError in strict mode

function myFunction() {
  "use strict";
  // Strict mode only in this function
}

// Statements
let x = 5; // Declaration statement
x = x + 1; // Assignment statement
console.log(x); // Expression statement
// Keywords and reserved words
// Reserved keywords
// break, case, catch, class, const, continue, debugger, default,
// delete, do, else, export, extends, finally, for, function,
// if, import, in, instanceof, let, new, return, super, switch,
// this, throw, typeof, var, void, while, with, yield
// Variable
// var - function scoped, hoisted
var oldWay = "avoid using";

// let - block scoped, not hoisted
let modernWay = "preferred for variables";

// const - block scoped, cannot be reassigned
const CONSTANT = "never changes";

// The typeof Operator
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk!)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"

// undefined
let y;
console.log(x); // undefined

let obj = {};
console.log(obj.nonExistent); // undefined

// null
let data = null; // Intentional absence of value
console.log(data); // null

// boolean
let isActive = true;
let isComplete = false;

// Truthy and falsy values
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

// number
let integer = 42;
let decimal = 3.14;
let scientific = 2.5e6; // 2,500,000
let infinity = Infinity;
let notANumber = NaN;

console.log(Number.MAX_VALUE); // Largest possible number
console.log(Number.MIN_VALUE); // Smallest positive number

// string
let single = "Hello";
let double = "World";
let template = `Hello ${single}!`; // Template literals

// String methods
console.log("hello".toUpperCase()); // "HELLO"
console.log("WORLD".toLowerCase()); // "world"
console.log("JavaScript".length); // 10

// object types
// Plain objects
let person = {
  name: "John",
  age: 30,
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },
};

// Access properties
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// Arrays / Json Objects
// JSON - JavaScript Object Notation
let jsonString = '{"name": "John", "age": 30}';
let parsed = JSON.parse(jsonString);
console.log(parsed.name); // "John"

// Convert to JSON
let obj1 = { name: "Jane", age: 25 };
let jsonStr = JSON.stringify(obj);
console.log(jsonStr); // '{"name":"Jane","age":25}'

// MILESTONE 3

//     Operators
let z = 5;

// Increment/Decrement
console.log(++z); // 6 (pre-increment)
console.log(z++); // 6 (post-increment, then z becomes 7)
console.log(--z); // 6 (pre-decrement)
console.log(z--); // 6 (post-decrement, then z becomes 5)

// Other unary operators
console.log(+z); // Convert to number
console.log(-z); // Negation
console.log(!true); // Logical NOT
console.log(typeof z); // Type check
console.log(delete obj.prop); // Delete property
//     Unary Operators

//     Bitwise Operators
let a = 5; // Binary: 101
let b = 3; // Binary: 011

console.log(a & b); // 1 (AND)
console.log(a | b); // 7 (OR)
console.log(a ^ b); // 6 (XOR)
console.log(~a); // -6 (NOT)
console.log(a << 1); // 10 (Left shift)
console.log(a >> 1); // 2 (Right shift)

//     Boolean Operators
{
  let a = true,
    b = false;

  // Logical AND
  console.log(a && b); // false
  console.log(true && 5); // 5 (returns last truthy value)

  // Logical OR
  console.log(a || b); // true
  console.log(false || 5); // 5 (returns first truthy value)

  // Logical NOT
  console.log(!a); // false
  console.log(!!a); // true (double negation)
}

//     Multiplicative Operators
console.log(10 * 3); // 30 (multiplication)
console.log(10 / 3); // 3.333... (division)
console.log(10 % 3); // 1 (remainder/modulo)
console.log(2 ** 3); // 8 (exponentiation - ES2016)

//     Additive Operators
console.log(5 + 3); // 8 (addition)
console.log("5" + 3); // '53' (string concatenation)
console.log(5 - 3); // 2 (subtraction)
console.log("5" - 3); // 2 (string converted to number)

//     Relational Operators
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false

// String comparison (lexicographic)
console.log("apple" < "banana"); // true
console.log("Apple" < "apple"); // true (uppercase comes first)

//     Equality Operators
// Loose equality (type coercion)
console.log(5 == "5"); // true
console.log(null == undefined); // true

// Strict equality (no type coercion)
console.log(5 === "5"); // false
console.log(null === undefined); // false

// Inequality
console.log(5 != "6"); // true
console.log(5 !== "5"); // true

//     Conditional Operator
let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // 'adult'

// Nested ternary (use sparingly)
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

//     Assignment Operators
{
  let x = 10;

  x += 5; // x = x + 5;  (15)
  x -= 3; // x = x - 3;  (12)
  x *= 2; // x = x * 2;  (24)
  x /= 4; // x = x / 4;  (6)
  x %= 5; // x = x % 5;  (1)
  x **= 3; // x = x ** 3; (1)

  // Logical assignment (ES2021)
  x ||= 10; // x = x || 10
  x &&= 5; // x = x && 5
  x ??= 0; // x = x ?? 0 (nullish coalescing)
}

//     Comma Operator
{let a, b, c;

// Multiple assignments
(a = 1), (b = 2), (c = 3);

// In for loops
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}
}
// Returns the last expression
let result = (1 + 2, 3 + 4); // result = 7

// MILESTONE 4
//   Statements
// Conditional Statements:-
//         The if Statement
let weather = "sunny";

if (weather === "sunny") {
  console.log("Wear sunglasses!");
}

// Single statement (braces optional but recommended)
if (weather === "rainy") console.log("Take an umbrella!");
//         If Else
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("Perfect weather!");
} else if (temperature > 10) {
  console.log("A bit chilly");
} else {
  console.log("It's cold!");
}

// Looping Statements:-

//         The do-while Statement
let i = 0;
do {
  console.log(`Count: ${i}`);
  i++;
} while (i < 3);

// Even if condition is false initially, runs once
let j = 10;
do {
  console.log("This runs once");
} while (j < 5);

//         The while Statement
let count = 0;
while (count < 5) {
  console.log(`Count: ${count}`);
  count++;
}

//         The for Statement

// Standard for loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration: ${i}`);
}

// Multiple variables
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}

// Nested loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//         The for-in Statement
{
  let person = {
    name: "John",
    age: 30,
    city: "New York",
  };

  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  // With arrays (gets indices)
  let colors = ["red", "green", "blue"];
  for (let index in colors) {
    console.log(`${index}: ${colors[index]}`);
  }
}
// Other Statements :-
//         The break and continue Statements
// break - exits the loop
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// continue - skips current iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0, 1, 3, 4
}

// With labels (for nested loops)
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outer;
        console.log(`${i}, ${j}`);
    }
}
//         The with Statement
// DON'T USE - just for educational purposes
{
    let obj = {x: 10, y: 20};

// Bad practice
with (obj) {
    console.log(x + y); // 30
}

// Good practice instead
console.log(obj.x + obj.y);
}

//         The switch Statement

let day = 'monday';

switch (day.toLowerCase()) {
    case 'monday':
        console.log('Start of work week');
        break;
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
        console.log('Midweek');
        break;
    case 'friday':
        console.log('TGIF!');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Weekend!');
        break;
    default:
        console.log('Invalid day');
}

// Without break (fall-through)
let dgrade = 'B';
switch (grade) {
    case 'A':
        console.log('Excellent!');
    case 'B':
        console.log('Good job!'); // This runs
    case 'C':
        console.log('Keep trying!'); // This also runs
        break;
    default:
        console.log('Try harder!');
}

// MILESTONE 5

//   Functions
// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const greet2 = function(name) {
    return `Hi, ${name}!`;
};

// Arrow Function (ES6)
const greet3 = (name) => `Hey, ${name}!`;
const greet4 = name => `Yo, ${name}!`; // Single parameter
const add = (a, b) => a + b; // Multiple parameters


//   overloading in JS
//   arguments/parameters
//   JS liniting
//   Curring Funtions

//js hoisting
// Function declarations are hoisted
console.log(hoistedFunction()); // "I'm hoisted!"

function hoistedFunction() {
    return "I'm hoisted!";
}

// Function expressions are NOT hoisted
// console.log(notHoisted()); // TypeError: notHoisted is not a function

var notHoisted = function() {
    return "I'm not hoisted!";
};

// Variable hoisting with functions
console.log(typeof myVar); // "undefined" (declared but not initialized)
var myVar = function() {
    return "Hello";
};
console.log(typeof myVar); // "function"
