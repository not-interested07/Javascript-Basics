* * *

## 1. Functions as Values

In JavaScript, functions are first‐class objects. This means you can assign functions to variables, pass them as arguments, return them from other functions, and store them as object properties.

### Example: Storing a Function in a Variable

```js
// A function expression is assigned to a variable.
const greet = function() {
  console.log("Hello, world!");
};

console.log(greet);            // Logs the function’s code (its value)
console.log(typeof greet);     // "function"

// The function can be called using the variable name:
greet(); // Output: Hello, world!
```

_Note:_ Since functions are values, the variable `greet` holds the function itself.

* * *

## 2. Anonymous Functions

An anonymous function is simply a function without a name. When you assign a function directly to a variable (or pass it as a callback), you often use an anonymous function.

### Example: Anonymous Function as a Callback

```js
const add = function(a, b) {
  return a + b;
};

console.log(add(2, 3)); // 5
```

_Note:_ The function has no name (other than the variable it’s assigned to), but it can still be invoked via the variable.

* * *

## 3. Hoisting and Function Expressions

### Function Declarations vs. Function Expressions

* **Function Declarations** are hoisted. This means you can call them before they appear in the code.
    
* **Function Expressions** (assigned to variables) are not hoisted in the same way—the variable declaration is hoisted, but its assignment is not.
    

### Example: Hoisting Differences

```js
// Function Declaration (hoisted)
console.log(multiply(3, 4)); // Works: Output is 12

function multiply(a, b) {
  return a * b;
}

// Function Expression (not fully hoisted)
console.log(divide(10, 2)); // Error: divide is not a function (undefined)
const divide = function(a, b) {
  return a / b;
};
```

_Note:_ In the second example, although the variable `divide` is hoisted, its assignment (the function) isn’t available until that line is executed.

* * *

## 4. Storing Functions in Objects

Functions can be stored as properties in objects and are then called methods.

### Example: Function as an Object Property

```js
const calculator = {
  // Method stored as a property
  sayHi: function() {
    console.log("Hi from the calculator object!");
  }
};

calculator.sayHi(); // Output: Hi from the calculator object!
```

_Note:_ You access the function using dot notation (i.e. `calculator.sayHi()`).

* * *

## 5. Passing Functions into Functions

Since functions are values, you can pass them as arguments to other functions. Such functions are called "higher-order functions."

### Example: Higher-Order Function

```js
function doOperation(a, b, operation) {
  return operation(a, b);
}

const sum = (x, y) => x + y;
const product = (x, y) => x * y;

console.log(doOperation(5, 3, sum));      // Output: 8
console.log(doOperation(5, 3, product));  // Output: 15
```

_Note:_ Here, `sum` and `product` are passed as callback functions to `doOperation`.

* * *

## 6. Using setTimeout()

`setTimeout()` is a built-in asynchronous function that takes at least two parameters: a function (or code snippet) and a delay (in milliseconds) before running that function.

### Example: Basic setTimeout Usage

```js
setTimeout(function() {
  console.log("This message is shown after 2 seconds");
}, 2000);
```

### Asynchronous Code Example

```js
console.log("Start");
setTimeout(() => {
  console.log("This is asynchronous and delayed by 1 second");
}, 1000);
console.log("End");
```

_Explanation:_ Although `setTimeout` is called between the two console logs, the callback runs after the current call stack is empty (after 1 second).

* * *

## 7. Using setInterval()

`setInterval()` repeatedly executes a given function at a specified interval (in milliseconds). It returns an interval ID, which can be used to stop the repeated execution using `clearInterval()`.

### Example: Basic setInterval Usage

```js
const intervalId = setInterval(() => {
  console.log("This message is shown every second");
}, 1000);

// Stop the interval after 5 seconds:
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 5000);
```

_Note:_ The interval ID is a number (or an object in some environments) used to cancel the interval.

* * *

## 8. Looping Through Arrays with .forEach()

The `.forEach()` method loops through each element of an array and executes a provided function on each element. Although it doesn’t support `continue` or `break`, it is useful for simple iteration.

### Example: Using .forEach() to Print Array Values

```js
const numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(number, index) {
  console.log(`Index ${index}: ${number}`);
});
```

_Note:_ The callback function receives the current element, its index, and the array itself. Returning from the callback simply moves to the next iteration.

* * *

## Summary

* **Functions as Values:** Functions can be assigned to variables, stored in objects, and passed as arguments.
    
* **Anonymous Functions:** Functions without a name are often used as callbacks.
    
* **Hoisting:** Function declarations are hoisted, while function expressions are not.
    
* **Storing in Objects:** Functions can be object properties and are invoked using dot notation.
    
* **Higher-Order Functions:** Functions can be passed to or returned from other functions.
    
* **setTimeout:** Schedules a single execution after a specified delay.
    
* **setInterval:** Executes a function repeatedly at fixed intervals; returns an ID to cancel the interval.
    
* **.forEach():** Loops through an array and processes each element with a callback.
    

These core concepts form the basis for many advanced techniques in JavaScript development. Experimenting with these examples will help you understand how functions work and how to leverage them in asynchronous programming and modular code design.

* * *

### clearTimeout()

The **clearTimeout()** function is used to cancel a timeout that was previously set by **setTimeout()**. When you call **setTimeout()**, it returns a timer identifier—a unique value (usually a number in browsers) that represents the scheduled timer. You can pass this identifier to **clearTimeout()** to prevent the callback function from being executed if it hasn’t already run.

### How It Works:

* **Setting a Timer:**  
    When you set a timeout with:
    
    ```js
    const timerId = setTimeout(() => {
      console.log("This will run after 5 seconds");
    }, 5000);
    ```
    
    the function inside **setTimeout()** is scheduled to run after 5000 milliseconds (5 seconds).
    
* **Clearing the Timer:**  
    If you decide that you no longer want the scheduled function to run, you call **clearTimeout()** with the timer identifier:
    
    ```js
    clearTimeout(timerId);
    ```
    
    This stops the pending timeout. If the timeout has not yet been executed, the callback will never run.
    

### Key Points:

* **Prevention, Not Reversal:**  
    **clearTimeout()** only cancels the timeout if it’s still waiting in the event queue. It does not “undo” the function call if it has already started executing.
    
* **Usage in Control Flow:**  
    This function is useful for scenarios where conditions change before the timeout completes. For example, you might want to cancel a delayed operation if the user performs another action.
    
* **Return Value Ignored:**  
    The **clearTimeout()** function doesn’t return any value—it simply cancels the scheduled callback.
    

### Example in Context:

```js
// Schedule a function to run after 5 seconds
const timerId = setTimeout(() => {
  console.log("Hello after 5 seconds");
}, 5000);

// Later, if a certain condition occurs (e.g., user navigates away)
clearTimeout(timerId); // The scheduled message is canceled
```

By using **clearTimeout()**, you gain finer control over asynchronous actions, ensuring that unnecessary or outdated operations don’t run.