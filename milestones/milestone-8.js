// MILESTONE 8
 
// FUNCTION EXPRESSIONS
//     Recursion
//     Closures
//             Closures and Variables
//             The this Object
//             Memory Leaks
//     Mimicking Block Scope
 
// Synchronous Programming
// Asynchronous Programming
// Callback
// Avoid callback hell
// Promise
// Bluebird Promises
// Async Await
// Convert Callback to promise
// Convert promise to async await
// Why async needed in js?


//===================================================
// JavaScript Advanced Functions & Asynchronous Programming
// Let me teach you these concepts step by step with clear examples.


// 1. Function Expressions
// A function expression is when you assign a function to a variable:

// Function Declaration
function greet() {
    return "Hello";
}

// Function Expression
const greet2 = function() {
    return "Hello";
};

// Arrow Function Expression
const greet3 = () => "Hello";
//----------

// 2. Recursion
// A function that calls itself until it reaches a base condition.

// Example 1: Factorial
function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)

// Example 2: Countdown
function countdown(num) {
    if (num <= 0) {
        console.log("Done!");
        return;
    }
    console.log(num);
    countdown(num - 1);
}

countdown(3); // 3, 2, 1, Done!

// Example 3: Sum of array
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4])); // 10

// =-----------
// 3. Closures
// A closure is when an inner function has access to outer function's variables, even after the outer function has finished executing.
// Basic Closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer:', outerVariable);
        console.log('Inner:', innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
// Outer: outside
// Inner: inside

// Practical Example: Counter
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
// count variable is private, can't access directly

// ===================================================================
// Closures and Variables
// PROBLEM: Loop with var (all callbacks reference the same variable)
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Prints: 3, 3, 3
    }, 1000);
}

// SOLUTION 1: Use let (block-scoped)
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Prints: 0, 1, 2
    }, 1000);
}

// SOLUTION 2: IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // Prints: 0, 1, 2
        }, 1000);
    })(i);
}

// ===================================================================
// The this Object
// In closures, 'this' may not refer to the expected object

const person = {
    name: 'John',
    greet: function() {
        console.log('Hello, ' + this.name);
    },
    greetLater: function() {
        // Problem: 'this' changes context in setTimeout
        setTimeout(function() {
            console.log(this.name); // undefined
        }, 1000);
    }
};

// SOLUTIONS:

// Solution 1: Arrow function (inherits 'this')
const person1 = {
    name: 'John',
    greetLater: function() {
        setTimeout(() => {
            console.log(this.name); // 'John'
        }, 1000);
    }
};

// Solution 2: Store 'this' in a variable
const person2 = {
    name: 'John',
    greetLater: function() {
        const self = this;
        setTimeout(function() {
            console.log(self.name); // 'John'
        }, 1000);
    }
};

// Solution 3: bind()
const person3 = {
    name: 'John',
    greetLater: function() {
        setTimeout(function() {
            console.log(this.name); // 'John'
        }.bind(this), 1000);
    }
};

// Memory Leaks with Closures ==================================

// PROBLEM: Memory Leak
function createHeavyObject() {
    const largeData = new Array(1000000).fill('data');
    
    return function() {
        // This closure keeps largeData in memory forever
        console.log(largeData[0]);
    };
}

// SOLUTION: Clean up references
function createHeavyObjectFixed() {
    let largeData = new Array(1000000).fill('data');
    
    return {
        use: function() {
            console.log(largeData[0]);
        },
        destroy: function() {
            largeData = null; // Allow garbage collection
        }
    };
}

const obj = createHeavyObjectFixed();
obj.use();
obj.destroy(); // Clean up when done


// ===================================================
// Mimicking Block Scope
// Before let/const, we used IIFE to create block scope

// Old way: IIFE to create block scope
(function() {
    var temp = 'I am private';
    console.log(temp);
})();
// console.log(temp); // Error: temp is not defined

// Modern way: let and const
{
    let blockScoped = 'I am block scoped';
    const alsoBlockScoped = 'Me too';
    console.log(blockScoped);
}
// console.log(blockScoped); // Error

// Practical use case: Module pattern
const myModule = (function() {
    // Private variables
    let privateVar = 'I am private';
    
    // Public API
    return {
        getPrivateVar: function() {
            return privateVar;
        },
        setPrivateVar: function(val) {
            privateVar = val;
        }
    };
})();

console.log(myModule.getPrivateVar()); // 'I am private'
myModule.setPrivateVar('New value');
console.log(myModule.getPrivateVar()); // 'New value'



// ===================================================
// 5. SYNCHRONOUS vs ASYNCHRONOUS PROGRAMMING

// SYNCHRONOUS - Blocking (executes line by line)
console.log('First');
console.log('Second');
console.log('Third');
// Output: First, Second, Third

// ASYNCHRONOUS - Non-blocking
console.log('First');

setTimeout(() => {
    console.log('Second (delayed)');
}, 2000);

console.log('Third');
// Output: First, Third, Second (delayed)

// Real-world example: File reading
// Synchronous (blocks code execution)
// const data = readFileSync('file.txt');
// console.log(data);
// console.log('This waits');

// Asynchronous (doesn't block)
// readFile('file.txt', (err, data) => {
//     console.log(data);
// });
// console.log('This runs immediately');

// ===================================================


// 6. CALLBACKS
// A function passed as an argument to another function.

// Simple callback
function greeting(name, callback) {
    console.log('Hello ' + name);
    callback();
}

greeting('John', function() {
    console.log('Callback executed');
});

// Practical example: Array methods
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});

// Asynchronous callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log('Data received:', data);
});

// ===================================================
// 7. AVOIDING CALLBACK HELL
// Callback hell occurs when callbacks are nested within callbacks, making code hard to read and maintain.

// PROBLEM: Nested callbacks become unreadable
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            getYetMoreData(c, function(d) {
                getFinalData(d, function(e) {
                    console.log('Finally done!');
                });
            });
        });
    });
});

// SOLUTION 1: Named functions
function step1(a) {
    getMoreData(a, step2);
}

function step2(b) {
    getEvenMoreData(b, step3);
}

function step3(c) {
    console.log('Done!');
}

getData(step1);

// SOLUTION 2: Use Promises (see next section)


// ==================================================
// 8. PROMISES
// A Promise represents a value that may be available now, in the future, or never.

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    setTimeout(() => {
        if (success) {
            resolve('Operation successful!');
        } else {
            reject('Operation failed!');
        }
    }, 1000);
});

// Consuming a Promise
myPromise
    .then(result => {
        console.log(result); // 'Operation successful!'
        return 'Next step';
    })
    .then(result => {
        console.log(result); // 'Next step'
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Cleanup');
    });

// Chaining Promises (solving callback hell)
function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Data A'), 1000);
    });
}

function getMoreData(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data + ' -> Data B'), 1000);
    });
}

getData()
    .then(a => getMoreData(a))
    .then(b => console.log(b)) // 'Data A -> Data B'
    .catch(err => console.error(err));

// Multiple Promises
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 100));
const promise3 = fetch('https://api.example.com/data');

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // [3, 'foo', response]
    });

Promise.race([promise1, promise2])
    .then(value => {
        console.log(value); // 3 (first to resolve)
    });

// ===================================================
// 10. ASYNC / AWAIT
// Async/Await is syntactic sugar over Promises, making asynchronous code look synchronous.
// Creating a Promise
// Basic async/await
async function fetchUser() {
    return { name: 'John', age: 30 };
}

async function displayUser() {
    const user = await fetchUser();
    console.log(user); // { name: 'John', age: 30 }
}

displayUser();

// Error handling with try/catch
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Sequential vs Parallel execution
async function sequential() {
    const result1 = await getData1(); // Waits
    const result2 = await getData2(); // Waits
    return [result1, result2];
}

async function parallel() {
    const [result1, result2] = await Promise.all([
        getData1(), // Both run simultaneously
        getData2()
    ]);
    return [result1, result2];
}

// Real example
async function getUserData(userId) {
    try {
        // These run in sequence
        const user = await fetch(`/api/users/${userId}`).then(r => r.json());
        const posts = await fetch(`/api/posts/${userId}`).then(r => r.json());
        const comments = await fetch(`/api/comments/${userId}`).then(r => r.json());
        
        return { user, posts, comments };
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        throw error;
    }
}

// Chaining Promises (solving callback hell)

// ===================================================
// 11. CONVERTING CALLBACK TO PROMISE
// Basic async/await
async function fetchUser() {
    return { name: 'John', age: 30 };
}

async function displayUser() {
    const user = await fetchUser();
    console.log(user); // { name: 'John', age: 30 }
}

displayUser();

// Error handling with try/catch
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Sequential vs Parallel execution
async function sequential() {
    const result1 = await getData1(); // Waits
    const result2 = await getData2(); // Waits
    return [result1, result2];
}

async function parallel() {
    const [result1, result2] = await Promise.all([
        getData1(), // Both run simultaneously
        getData2()
    ]);
    return [result1, result2];
}

// Real example
async function getUserData(userId) {
    try {
        // These run in sequence
        const user = await fetch(`/api/users/${userId}`).then(r => r.json());
        const posts = await fetch(`/api/posts/${userId}`).then(r => r.json());
        const comments = await fetch(`/api/comments/${userId}`).then(r => r.json());
        
        return { user, posts, comments };
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        throw error;
    }
}

// 12. CONVERTING PROMISE TO ASYNC/AWAIT

// Promise version
function getUserDataPromise(userId) {
    return fetch(`/api/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            return fetch(`/api/posts/${user.id}`)
                .then(response => response.json())
                .then(posts => {
                    return { user, posts };
                });
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}

// Async/Await version (cleaner!)
async function getUserDataAsync(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        
        const postsResponse = await fetch(`/api/posts/${user.id}`);
        const posts = await postsResponse.json();
        
        return { user, posts };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Another example
// Promise
function processData() {
    return getData()
        .then(data => transformData(data))
        .then(transformed => saveData(transformed))
        .then(saved => console.log('Saved:', saved))
        .catch(err => console.error(err));
}

// Async/Await
async function processDataAsync() {
    try {
        const data = await getData();
        const transformed = await transformData(data);
        const saved = await saveData(transformed);
        console.log('Saved:', saved);
    } catch (err) {
        console.error(err);
    }
}

// 13. WHY ASYNC IS NEEDED IN JAVASCRIPT
// JavaScript is single-threaded - it can only do one thing at a time.

// WITHOUT ASYNC (Blocking)
console.log('Start');

// This blocks everything for 3 seconds
function blockingOperation() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
        // Do nothing, just wait
    }
    return 'Done blocking';
}

const result = blockingOperation();
console.log(result);
console.log('End');
// User can't click buttons or do anything for 3 seconds!

// WITH ASYNC (Non-blocking)
console.log('Start');

setTimeout(() => {
    console.log('Done after 3 seconds');
}, 3000);

console.log('End');
// User can still interact with the page!
// Output: Start, End, Done after 3 seconds

// Key Reasons for Async:

// Network Requests: Don't freeze the UI while waiting for server response
// File Operations: Reading/writing files takes time
// Timers: setTimeout, setInterval
// User Input: Wait for clicks, keyboard input
// Database Operations: Queries can be slow

// Real-world example: Fetching user profile

// BAD: Synchronous (would freeze browser)
// const userData = fetchUserSync(); // Blocks for 2 seconds
// const postData = fetchPostsSync(); // Blocks for 1 second
// displayProfile(userData, postData); // Finally shows after 3 seconds

// GOOD: Asynchronous (responsive UI)
async function loadProfile() {
    const loadingSpinner = showLoading(); // Show immediately
    
    try {
        // User can still scroll, click, interact!
        const [userData, postData] = await Promise.all([
            fetchUser(),
            fetchPosts()
        ]); // Both fetch simultaneously
        
        displayProfile(userData, postData);
    } catch (error) {
        showError(error);
    } finally {
        hideLoading(loadingSpinner);
    }
}

// Summary

// Recursion: Function calling itself
// Closures: Inner functions accessing outer variables
// Callbacks: Functions passed as arguments
// Promises: Handle async operations cleanly
// Async/Await: Syntactic sugar for Promises (looks synchronous)
// Why Async: JavaScript is single-threaded, async prevents blocking

// Would you like me to create an interactive code artifact where you can practice these concepts?
