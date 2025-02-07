# JavaScript: Numbers and Math

## 1. Numbers and Math
JavaScript provides built-in support for numerical operations using the `Number` type, which includes both integers and floating-point values.

## 2. Order of Operations and Brackets
JavaScript follows the standard mathematical order of operations:
- Parentheses `()`
- Exponents `**`
- Multiplication `*`, Division `/`, and Modulus `%`
- Addition `+` and Subtraction `-`

Using brackets (parentheses) helps enforce the intended order of evaluation.

### When Two Operators Have the Same Precedence
If two operators have the same precedence, JavaScript evaluates them based on their associativity:
- **Left-to-right**: `*`, `/`, `%`, `+`, `-`
- **Right-to-left**: `**`

Example:
```js
console.log(10 - 5 + 2); // Output: 7 (left-to-right evaluation)
console.log(2 ** 3 ** 2); // Output: 512 (right-to-left evaluation)
```

## 3. Calculating Numbers in the Final Project
Performing calculations in JavaScript involves using arithmetic operations, mathematical functions, and handling different numeric types.

Example:
```js
let result = (10 + 5) * 2;
console.log(result); // Output: 30
```

## 4. Calculations Using Floats Can Be Inaccurate
JavaScript uses **floating-point arithmetic**, which can lead to precision errors:
```js
console.log(0.1 + 0.2); // Output: 0.30000000000000004
```
To avoid such issues, use rounding methods like `toFixed()` or `toPrecision()`.

## 5. `Math.round()`
The `Math.round()` function rounds a number to the nearest integer.
```js
console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(4.2)); // Output: 4
```
It is useful when working with floating-point values that require rounding to whole numbers.

## 6. Rounding Up and Down in JavaScript
### **Round Up (`Math.ceil`)**
```js
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.ceil(-4.2)); // Output: -4
```

### **Round Down (`Math.floor`)**
```js
console.log(Math.floor(4.8)); // Output: 4
console.log(Math.floor(-4.8)); // Output: -5
```

## 7. Handling Floating Point Calculations in Monetary Transactions
For accurate floating-point calculations in **monetary transactions**, avoid direct floating-point arithmetic due to precision errors. Instead, use **integer math** (cents instead of dollars) or a dedicated library.

### **1. Use Integer Math (Cents)**
Convert currency to the smallest unit (e.g., cents) before performing calculations.

```js
let price = 19.99;
let tax = 1.75;

// Convert to cents
let totalCents = Math.round(price * 100) + Math.round(tax * 100);

// Convert back to dollars
let totalDollars = (totalCents / 100).toFixed(2);
console.log(totalDollars); // Output: "21.74"
```

### **2. Use `BigInt` for Large Transactions**
For high-value transactions, use `BigInt`.

```js
let total = BigInt(1999) + BigInt(175); // in cents
console.log((total / BigInt(100)).toString()); // Output: "21"
```

### **3. Use Libraries (`decimal.js`, `big.js`, `bignumber.js`)**
Libraries like `decimal.js` help handle precision.

```js
const Decimal = require('decimal.js');
let total = new Decimal(19.99).plus(1.75);
console.log(total.toFixed(2)); // Output: "21.74"
```

### **Conclusion**
- **For small calculations**, use integer math (convert to cents).
- **For large numbers**, use `BigInt`.
- **For precision handling**, use `decimal.js` or similar libraries.

---
Happy Coding! 🚀
