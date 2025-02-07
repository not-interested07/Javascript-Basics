# JavaScript: Understanding Strings

## 1. Strings = Text
A **string** in JavaScript is a sequence of characters used to represent text. Strings are enclosed in single (`'`), double (`"`), or backticks (`` ` ``).

Example:
```js
let singleQuote = 'Hello';
let doubleQuote = "World";
let backtick = `JavaScript`;
```

## 2. Using Strings and Numbers Together
JavaScript allows concatenation of strings and numbers. When a number is added to a string, the number is automatically converted into a string.

Example:
```js
console.log("The year is " + 2025); // Output: "The year is 2025"
console.log("5" + 2); // Output: "52" (Number is coerced into a string)
console.log(5 + "2"); // Output: "52"
```

## 3. Three Ways to Create Strings
### **1. Using Single Quotes (`'...'`)**
```js
let single = 'Hello World';
```
### **2. Using Double Quotes (`"..."`)**
```js
let double = "Hello World";
```
### **3. Using Backticks (Template Strings - `` `...` ``)**
```js
let template = `Hello World`;
```

### **Why Use Template Strings?**
Template strings allow:
- **String Interpolation** (inserting variables inside a string)
- **Multi-line Strings**

Example:
```js
let name = "Alice";
console.log(`Hello, ${name}!`); // Output: "Hello, Alice!"

let multiLine = `This is a
multi-line string.`;
console.log(multiLine);
```

## 4. Escape Characters
Escape characters allow special characters inside strings using a backslash (`\`).

| Escape Sequence | Meaning |
|----------------|---------|
| `\n` | New line |
| `\t` | Tab space |
| `\"` | Double quote inside a string |
| `\'` | Single quote inside a string |
| `\\` | Backslash |

Example:
```js
console.log("Hello\nWorld"); // Prints Hello and World on separate lines
console.log("She said, \"JavaScript is fun!\""); // Prints: She said, "JavaScript is fun!"
```

## 5. Template Strings
**Template literals** (using backticks `` `...` ``) allow **interpolation** and **multi-line strings**.

### **String Interpolation**
```js
let name = "Bob";
console.log(`Hello, ${name}!`); // Output: "Hello, Bob!"
```

### **Multi-line Strings**
```js
let paragraph = `This is line one.
This is line two.`;
console.log(paragraph);
```

## 6. Type Coercion in Strings & Order of Operations
### **Type Coercion with Strings**
When a string is combined with a number, the number is converted into a string.

Example:
```js
console.log("5" + 3); // Output: "53"
console.log(5 + "3"); // Output: "53"
console.log("5" - 3); // Output: 2 (String converted to number)
```

### **Order of Operations**
JavaScript follows standard order of operations (left to right for `+`, multiplication before addition, etc.).
```js
console.log(10 + 5 + "5"); // Output: "155" (Numbers added first, then converted to string)
console.log("5" + 10 + 5); // Output: "5105" (String concatenation happens first)
```

## 7. `typeof` Operator
The `typeof` operator is used to check the data type of a variable.

Example:
```js
console.log(typeof "Hello"); // Output: "string"
console.log(typeof 123); // Output: "number"
console.log(typeof true); // Output: "boolean"
```

### **Checking if a Variable is a String**
```js
let value = "JavaScript";
console.log(typeof value === "string"); // Output: true
```

---
### **Conclusion**
- Strings are used for text in JavaScript.
- They can be created using single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).
- Template literals allow interpolation and multi-line strings.
- Escape characters enable formatting within strings.
- JavaScript performs type coercion when mixing strings and numbers.
- The `typeof` operator helps determine the type of a value.

Happy Coding! 🚀

