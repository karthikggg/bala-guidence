// Reference Counting (Older Approach)
// Tracks the number of references to each object.
// How it Works:

// Each object has a reference counter
// Counter increments when a reference is added
// Counter decrements when a reference is removed
// When counter reaches 0, the object is collected

let obj = { data: "Hello" }; // Reference count: 1

let anotherRef = obj;        // Reference count: 2

obj = null;                  // Reference count: 1
anotherRef = null;           // Reference count: 0 → COLLECTED

function createCircular() {
    let objA = {};
    let objB = {};
    
    objA.ref = objB; // A references B
    objB.ref = objA; // B references A (circular!)
    
    return "done";
}

createCircular();

// Problem: objA and objB reference each other
// Reference counts never reach 0 → MEMORY LEAK!
```

**Why it fails:**
// ```
// objA.ref → objB  (objB count: 1)
// objB.ref → objA  (objA count: 1)

// Even when no external references exist,
// internal references keep counts above 0!
```

### **Historical Context:**
- Used by **Internet Explorer 6-7** for DOM objects
- Caused memory leaks with DOM-JavaScript circular references
- Modern browsers use mark-and-sweep exclusively

### **Advantages:**
✅ Immediate collection when count reaches 0  
✅ Simple concept

### **Disadvantages:**
❌ **Cannot handle circular references**  
❌ Overhead of tracking every reference change  
❌ Obsolete in modern engines

---

## Performance

### **When Does GC Run?**

Garbage collection is **non-deterministic**:
- Runs automatically when memory pressure increases
- Triggers during idle time (in some engines)
- Cannot be manually forced reliably

### **GC Strategies in Modern Engines:**

#### **1. Generational Collection**
```
// Young Generation (Eden Space)
//   ↓
//   Most objects die young
//   Frequent, fast collections

// Old Generation (Tenured Space)
//   ↓
//   Long-lived objects
//   Infrequent, slower collections

//============================================================

// 2. Incremental Collection

// Breaks GC work into smaller chunks
// Interleaves with JavaScript execution
// Reduces pause times

// 3. Idle-Time Collection

// Runs GC during browser idle periods
// Minimizes impact on user experience

// ❌ Bad: Creates many temporary objects
function processData(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        results.push({ value: arr[i] * 2 }); // New object each iteration
    }
    return results;
}

// ✅ Better: Reuse objects when possible
function processData(arr) {
    let results = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        results[i] = arr[i] * 2; // Primitive values, no objects
    }
    return results;
}

// Managing Memory
// 1. Dereference Unused Objects

// ❌ Bad: Global variables persist
let globalCache1 = loadLargeData();

// ✅ Good: Clear when done
let globalCache = loadLargeData();
// ... use cache ...
globalCache = null; // Make available for GC




// 2. Avoid Accidental Global Variables

function createLeak() {
    // ❌ Missing 'var/let/const' creates global!
    leakyVariable = "I'm global now";
}

function noLeak() {
    // ✅ Properly scoped
    let properVariable = "I'm local";
}


// Strict mode helps prevent this:
"use strict";
function createLeak() {
    leakyVariable = "Error!"; // ReferenceError
}

// 3. Be Careful with Closures
// ❌ Memory leak: Closures retain outer scope
function setupHandlers() {
    let largeData = new Array(1000000).fill("data");
    
    document.getElementById("button").onclick = function() {
        console.log("Clicked"); // Closure keeps largeData in memory!
    };
}

// ✅ Better: Don't capture unnecessary variables
function setupHandlers() {
    let largeData = new Array(1000000).fill("data");
    let needed = largeData.length;
    
    document.getElementById("button").onclick = function() {
        console.log("Clicked", needed); // Only captures 'needed'
    };
    
    largeData = null; // Explicitly dereference
}

// 4. Clear Timers and Event Listeners
 
// ❌ Leak: Timer keeps running
function startTimer() {
    let data = loadData();
    setInterval(() => {
        console.log(data);
    }, 1000);
}

// ✅ Good: Clean up
function startTimer() {
    let data = loadData();
    let timerId = setInterval(() => {
        console.log(data);
    }, 1000);
    
    // Later, when done:
    clearInterval(timerId);
}

// ✅ Event listeners
let element = document.getElementById("button");
function handler() { /* ... */ }

element.addEventListener("click", handler);
// Clean up:
element.removeEventListener("click", handler);



//5. Avoid DOM-JavaScript Circular References
// ❌ Old IE issue (historical)
let element1 = document.getElementById("myDiv");
element.expandoProperty = {
    element: element // Circular reference!
};

// ✅ Better pattern
let element = document.getElementById("myDiv");
let data = {
    elementId: element.id // Store ID instead of reference
};


// Key Takeaways
// ✅ Mark-and-sweep is the standard GC algorithm (handles circular references)
// ✅ Reference counting is obsolete (circular reference problem)
// ✅ GC runs automatically but is non-deterministic
// ✅ Modern engines use generational and incremental strategies
// ✅ Developers should manage references to help GC work efficiently
// ✅ Use WeakMap/WeakSet for object collections that shouldn't prevent GC
// ✅ Profile memory regularly in development to catch leaks early
// Remember: You can't control when GC runs, but you can control what's eligible for collection! 🧹