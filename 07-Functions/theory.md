# JavaScript Functions

## What is a Function?

In JavaScript, a function is a reusable block of code designed to perform a particular task or calculate a value. Functions can be defined once and executed multiple times throughout a program, promoting modularity and maintainability. ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions))

## Syntax for Creating a Function

JavaScript provides several ways to define functions:

### 1. Function Declaration

```javascript
function functionName(parameters) {
  // function body
}
```

Example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

### 2. Function Expression

```javascript
const functionName = function(parameters) {
  // function body
};
```

Example:

```javascript
const greet = function(name) {
  console.log(`Hello, ${name}!`);
};
```

### 3. Arrow Function Expression (ES6)

```javascript
const functionName = (parameters) => {
  // function body
};
```

Example:

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
```

For concise functions, the curly braces and `return` statement can be omitted:

```javascript
const greet = name => console.log(`Hello, ${name}!`);
```

Arrow functions do not have their own `this`, `arguments`, `super`, or `new.target` bindings.

## Rules for Naming and Calling a Function

### Naming Conventions

- Function names should be descriptive and written in camelCase.
- They must start with a letter, underscore (_), or dollar sign ($), followed by letters, numbers, underscores, or dollar signs.
- Avoid using JavaScript reserved words as function names.

### Calling a Function

Invoke a function by its name followed by parentheses, optionally passing arguments:

```javascript
functionName(arguments);
```

Ensure that the function is defined in the accessible scope before calling it.

## Functions and Scope

Functions in JavaScript create their own scope. Variables declared within a function are local to that function and cannot be accessed from outside. This is known as function scope. ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions))

## The `return` Statement

The `return` statement ends function execution and specifies a value to be returned to the function caller. If omitted, the function returns `undefined` by default. ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return))

Example:

```javascript
function add(a, b) {
  return a + b;
}

const sum = add(2, 3); // sum is 5
```

Arrow functions with a single expression return the result automatically:

```javascript
const add = (a, b) => a + b;
```

## Parameter Passing in Functions

Functions can accept parameters, which act as placeholders for values passed during the function call. In JavaScript, function arguments are passed by value.

Example:

```javascript
function updateName(obj) {
  obj.name = 'Alice';
}

const person = { name: 'Bob' };
updateName(person);
console.log(person.name); // Outputs: Alice
```

## Syntax Rules for Passing Parameters & Default Values

In ES6, JavaScript introduced default parameter values, allowing parameters to have default values if no argument is provided.

```javascript
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
  // function body
}
```

Example:

```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Outputs: Hello, Guest!
greet('Alice'); // Outputs: Hello, Alice!
```

Default parameters can also be expressions:

```javascript
function getDefaultName() {
  return 'Guest';
}

function greet(name = getDefaultName()) {
  console.log(`Hello, ${name}!`);
}
```

For more details, refer to the [MDN Web Docs on Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).
