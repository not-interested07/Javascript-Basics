* * *

## **1. Arrays Are References (Similar to Objects)**

In JavaScript, arrays are stored in memory as **references**, just like objects. This means:

* When an array is assigned to another variable, both variables **point to the same array in memory**.
* Modifying one reference **affects the original array**.

### **Example**

```js
let originalArray = [1, 2, 3];
let newArray = originalArray; // Both point to the same array in memory

newArray[0] = 100; // Changing newArray will also change originalArray

console.log(originalArray); // Output: [100, 2, 3]
console.log(newArray);      // Output: [100, 2, 3]
```

### **Key Takeaways**

✅ Changing `newArray` **also changes `originalArray`** because they reference the same array.  
✅ Unlike primitive values (like `number` or `string`), **arrays are not copied, only their reference is assigned**.

* * *

## **2. Using `slice()` to Duplicate Arrays**

Since arrays are references, if we want a true **copy of an array**, we can use the `slice()` method.

### **Example**

```js
let arr1 = [10, 20, 30];
let arr2 = arr1.slice(); // Creates a new copy of the array

arr2[0] = 100; // Modify only arr2

console.log(arr1); // Output: [10, 20, 30] (Original remains unchanged)
console.log(arr2); // Output: [100, 20, 30] (New copy modified)
```

### **Key Takeaways**

✅ `slice()` creates a **shallow copy**, so modifying the copy **does not affect** the original array.  
✅ **Use `slice()` when you need a new independent array**.

* * *

## **3. Array Destructuring (Shortcut to Access Elements)**

**Destructuring** allows you to extract values from an array and assign them to variables **in a concise way**.

### **Example**

```js
let numbers = [10, 20, 30, 40, 50];

// Traditional way
let first = numbers[0];
let second = numbers[1];

console.log(first, second); // Output: 10 20

// Using Destructuring
let [a, b, c] = numbers;
console.log(a, b, c); // Output: 10 20 30
```

### **Skipping Elements**

```js
let arr = [1, 2, 3, 4, 5];

let [x, , y] = arr; // Skipping second element
console.log(x, y); // Output: 1 3
```

### **Swapping Variables Using Destructuring**

```js
let p = 5, q = 10;
[p, q] = [q, p]; // Swap without a temp variable
console.log(p, q); // Output: 10 5
```

### **Key Takeaways**

✅ Destructuring provides a **shorter way to access array elements**.  
✅ You can **skip elements** by using empty spaces (`, ,`).  
✅ Destructuring **simplifies swapping variables**.

* * *

## **4. `break` and `continue` in Loops**

Both `break` and `continue` are used to **control the flow of loops**:

### **🔴 `break`: Exits the loop completely**

* **Used when we want to stop a loop early**.

#### **Example: Stop the loop when number 5 is found**

```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Stopping at", i);
        break; // Exits the loop
    }
    console.log(i);
}
```

**Output:**

```
1
2
3
4
Stopping at 5
```

👉 The loop **stops completely** when `i === 5`.

* * *

### **🟢 `continue`: Skips the current iteration and moves to the next**

* **Used when we want to skip a specific condition but continue looping**.

#### **Example: Print all numbers except multiples of 3**

```js
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue; // Skips the iteration if i is a multiple of 3
    }
    console.log(i);
}
```

**Output:**

```
1
2
4
5
7
8
10
```

👉 When `i` is `3, 6, 9`, `continue` **skips that iteration**.

* * *

### **Complex Case: `break` vs `continue` inside a Nested Loop**

#### **Example: Using `break` and `continue` inside two loops**

```js
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) continue; // Skip when j == 2
        console.log(`i = ${i}, j = ${j}`);
        if (i === 2) break; // Stop inner loop when i == 2
    }
}
```

**Output:**

```
i = 1, j = 1
i = 1, j = 3
i = 2, j = 1
```

👉 `continue` **skips** `j = 2`.  
👉 `break` **stops** the inner loop when `i = 2`.

* * *

### **Final Takeaways**

✅ **Arrays are reference types**, modifying one affects all references.  
✅ **Use `slice()` to create an independent copy of an array**.  
✅ **Destructuring makes it easier to access array elements**.  
✅ **`break` stops the entire loop, `continue` skips the current iteration**.

Let me know if you need further clarification! 🚀