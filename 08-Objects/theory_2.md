# Javascript Objects

1. **Difference Between `null` and `undefined`**  
- **`null`** : 
  - `null` is an **intentional absence of value** .
 
  - It’s an **object**  type in JavaScript (a historical mistake, but still the case).
 
  - Used to represent an object that has been **explicitly set to no value**  or missing.


```javascript
let x = null;
console.log(x); // null
console.log(typeof x); // object
```
 
- **`undefined`** : 
  - `undefined` is a **default value**  assigned to variables that are declared but not assigned a value.
 
  - It's the **absence of a value**  that hasn’t been explicitly set.
 
  - It’s a **primitive type**  in JavaScript.


```javascript
let y;
console.log(y); // undefined
console.log(typeof y); // undefined
```
**Key Difference** : 
  - `null` is intentionally assigned by the programmer, whereas `undefined` is typically the JavaScript runtime’s way of saying that a variable has not been assigned a value yet.


---

2. **Auto-Boxing in JavaScript**  
- **Auto-boxing**  refers to the process where JavaScript automatically converts primitive values (like `string`, `number`, or `boolean`) to their corresponding **object wrappers**  when you access properties or methods on them.Example with **strings** :

```javascript
let str = "hello";
console.log(str.length); // 5, str is auto-boxed into a String object to access the length method
console.log(str.toUpperCase()); // HELLO, using the String object method
```
The string `"hello"` is auto-boxed into a special `String` object so that it can have methods like `.toUpperCase()`.**Auto-boxing also works for numbers and booleans** :

```javascript
let num = 42;
console.log(num.toString()); // "42", num is auto-boxed into a Number object

let bool = true;
console.log(bool.toString()); // "true", bool is auto-boxed into a Boolean object
```
However, ****Auto-boxing**  refers to the process where JavaScript automatically converts primitive values (like `string`, `number`, or `boolean`) to their corresponding **object wrappers**  when you access properties or methods on them.Example with **strings** :

```javascript
let str = "hello";
console.log(str.length); // 5, str is auto-boxed into a String object to access the length method
console.log(str.toUpperCase()); // HELLO, using the String object method
```
The string `"hello"` is auto-boxed into a special `String` object so that it can have methods like `.toUpperCase()`.**Auto-boxing also works for numbers and booleans** :

```javascript
let num = 42;
console.log(num.toString()); // "42", num is auto-boxed into a Number object

let bool = true;
console.log(bool.toString()); // "true", bool is auto-boxed into a Boolean object
```
However, auto-boxing does not work with `null` and `undefined`** , since they are not objects:

```javascript
let x = null;
// x.toString(); // Error: Cannot read properties of null (reading 'toString')

let y = undefined;
// y.toString(); // Error: Cannot read properties of undefined (reading 'toString')
```


---

3. **Objects are References in JavaScript**  
- In JavaScript, **objects are reference types** . When you create an object, the variable does not hold the actual object; instead, it holds a reference (or pointer) to the location where the object is stored in memory.Example of **reference**  behavior:

```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 now references the same object as obj1

obj2.name = "Bob"; // Changing obj2 also affects obj1
console.log(obj1.name); // Bob
console.log(obj2.name); // Bob
```
 
  - **Copy by reference**  means both `obj1` and `obj2` refer to the same object in memory, so any change in one object reflects in the other.
**Comparing objects** :When you compare objects, you’re comparing their **references** , not the actual content.

```javascript
let obj3 = { name: "Charlie" };
let obj4 = { name: "Charlie" };

console.log(obj3 === obj4); // false, they are different objects in memory
```
Even though the objects look the same, they are stored at different memory locations, so the comparison returns `false`.


---

4. **Shortcuts for Objects in JavaScript** **Destructuring**  
- **Destructuring**  is a shorthand for extracting values from objects (or arrays) and assigning them to variables.

```javascript
const person = { name: "Alice", age: 25 };

// Object destructuring
const { name, age } = person;
console.log(name); // Alice
console.log(age); // 25
```
If the variable name is different from the property name, you can use **aliasing** :

```javascript
const { name: fullName, age: years } = person;
console.log(fullName); // Alice
console.log(years); // 25
```
**Shorthand Property**  
- If the **variable name**  is the same as the **property name** , you can use shorthand:

```javascript
const name = "Bob";
const age = 30;

// Shorthand property
const person = { name, age };
console.log(person); // { name: "Bob", age: 30 }
```

This is equivalent to:


```javascript
const person = { name: name, age: age };
```
**Shorthand Method**  
- For **methods**  in objects, JavaScript provides shorthand syntax to define a function inside an object:

```javascript
const person = {
  name: "Charlie",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Hello, my name is Charlie
```

This is a shortcut for:


```javascript
const person = {
  name: "Charlie",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

The shorthand method syntax makes the code more concise and easier to read, especially when defining small methods inside objects.


---


### Conclusion 
 
- **`null` vs `undefined`** : `null` is an intentional absence of value, while `undefined` is used by JavaScript for uninitialized variables.
 
- **Auto-boxing** : JavaScript automatically wraps primitive values in their corresponding object types for accessing methods.
 
- **Objects as references** : Objects are reference types, meaning when you assign one object to another, they both refer to the same memory location.
 
- **Object shortcuts** : Destructuring and shorthand methods/properties offer concise ways to handle objects in JavaScript.