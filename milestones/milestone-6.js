// MILESTONE 6: Mutable/Immutable Concepts in JavaScript
// Let me break down these fundamental JavaScript concepts that are crucial for understanding how data behaves in your programs.

// Primitive and Reference Values
// JavaScript has two categories of data types:
// Primitive Values (Immutable)

// String, Number, Boolean, Undefined, Null, Symbol, BigInt
// Stored directly in the variable's location in memory (stored on the stack)
// Immutable: Their values cannot be changed, only reassigned

let name = "John";
name[0] = "B"; // This doesn't work - strings are immutable
console.log(name); // Still "John"

name = "Bob"; // This works - we're reassigning, not mutating
//---------------------------------------------------------------
// Reference Values (Mutable)

// Objects, Arrays, Functions
// The variable stores a reference (pointer) to the memory location (stored on the heap)
// Mutable: Their contents can be changed

let person = { name: "John" };
person.name = "Bob"; // This works - objects are mutable
console.log(person); // { name: "Bob" }
//--------------------------------------------------------------------------

// Dynamic Properties
// You can add, modify, or delete properties on reference types dynamically, but not on primitives.

// Reference type - works
let person = {};
person.name = "John";
person.age = 30;
delete person.age;
console.log(person); // { name: "John" }

// Primitive type - doesn't work
let name = "John";
name.lastName = "Doe"; // No error, but doesn't stick
console.log(name.lastName); // undefined
//Why? When you try to add a property to a primitive,
//  JavaScript temporarily wraps it in an object (auto-boxing), adds the property, then discards the wrapper.

//-----------------------------------------------------------------

// Copying Values
// Copying Primitives (Copy by Value)
num1 = 5;
let num2 = num1; // Copies the actual value

num2 = 10;

console.log(num1); // 5 (unchanged)
console.log(num2); // 10

//------------------------------------------------------------------
//Copying References (Copy by Reference)
//When you copy a reference value, you copy the reference (memory address), not the actual object.
//  Both variables point to the same object.

let obj11 = { count: 5 };
let obj2 = obj1; // Copies the reference, not the object

obj2.count = 10;
console.log(obj1.count); // 10 - same object!
console.log(obj2.count); // 10

console.log(obj1 === obj2); // true - same reference
let obj1 = { value: 5 };
let obj2 = obj1; // Copies the reference, not the object

obj2.value = 10;

console.log(obj1.value); // 10 (changed!)
console.log(obj2.value); // 10
// Both variables point to the same object
```

**Visual representation:**
```;
// Primitives:
// num1 → [5]
// num2 → [10]  (separate memory locations)

// References:
// obj1 → [reference] ↘
//                     → { value: 10 } (same object in heap)
// obj2 → [reference] ↗

//use spread operator to create seperate copy of objects as its reference values

//------------------------------------------------
// Argument Passing
// JavaScript always passes by value, but the behavior differs:
// Primitive Arguments - Pass by Value
function addTen(num) {
    num += 10;
    return num;
}

let count = 20;
let result = addTen(count);

console.log(count);  // 20 (unchanged)
console.log(result); // 30

// Reference Arguments - Pass by Value (of the reference)
function setName(obj) {
    obj.name = "Charlie"; // Modifies the original object
}

let person = { name: "Alice" };
setName(person);

console.log(person.name); // "Charlie" (changed!)

//Important: The reference itself is passed by value:
function reassign(obj) {
    obj = { name: "New Object" }; // Reassigns local parameter only
}

let person = { name: "Alice" };
reassign(person);

console.log(person.name); // "Alice" (unchanged)

//==========================================================

// Determining Type
// typeof - For Primitives (mostly)

console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof Symbol());    // "symbol"

// Quirks:
console.log(typeof null);        // "object" (historical bug!)
console.log(typeof function(){}); // "function"
console.log(typeof []);          // "object"

//instanceof - For Reference Types
let arr = [];
let obj = {};
let date = new Date();

console.log(arr instanceof Array);   // true
console.log(obj instanceof Object);  // true
console.log(date instanceof Date);   // true

console.log(arr instanceof Object);  // true (Array inherits from Object)

//===================================

// Execution Context and Scope
// Execution Context
// An environment where JavaScript code is evaluated and executed. Contains:

// Variable Object - Variables, functions, arguments
// Scope Chain - Access to outer scopes
// this value

// Types of Execution Contexts:

// Global Context - Default, creates window object (browser)
// Function Context - Created when a function is invoked
// Eval Context - Code inside eval() (avoid using)

let globalVar = "global";

function outer() {
    let outerVar = "outer";
    
    function inner() {
        let innerVar = "inner";
        
        // Scope chain: inner → outer → global
        console.log(innerVar);  // "inner"
        console.log(outerVar);  // "outer"
        console.log(globalVar); // "global"
    }
    
    inner();
}

outer();

//==========================================================================

// Scope Chain Augmentation
// Certain statements temporarily augment the scope chain:
// 1. try-catch Statement

try {
    // code
} catch (error) {
    // 'error' variable is added to scope chain only here
    console.log(error.message);
}
// 'error' doesn't exist here

// 2. with Statement (Deprecated - avoid!)
let person = { name: "Alice", age: 30 };

// with (person) {
//     // person's properties are added to scope chain
//     console.log(name); // "Alice"
//     console.log(age);  // 30
// }


//===============================

// No Block-Level Scopes (with var)
// var - No Block Scope

if (true) {
    var color = "blue";
}
console.log(color); // "blue" (accessible outside block!)

for (var i = 0; i < 5; i++) {
    // loop code
}
console.log(i); // 5 (accessible outside loop!)


// let/const - Block Scope (ES6+)
if (true) {
    let color = "blue";
    const size = "large";
}
console.log(color); // ReferenceError
console.log(size);  // ReferenceError

for (let i = 0; i < 5; i++) {
    // loop code
}
console.log(i); // ReferenceError

//Common Pitfall with var:


// Problem:
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3 (all reference same variable)
    }, 100);
}

// Solution with let:
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2 (each iteration has own binding)
    }, 100);
}

// Key Takeaways
// ✅ Primitives are immutable and copied by value
// ✅ Objects are mutable and copied by reference
// ✅ Arguments are always passed by value (but for objects, the value is a reference)
// ✅ Use typeof for primitives, instanceof for objects
// ✅ Scope chain determines variable access
// ✅ Always use let/const instead of var for block-scoping
// ✅ Avoid with statement (deprecated)