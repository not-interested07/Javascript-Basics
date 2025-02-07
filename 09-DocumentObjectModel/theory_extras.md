# **1. Events in JavaScript**

In JavaScript, an **event** is an action that occurs in the browser, such as clicking a button, pressing a key, or scrolling a page. Events help make web pages interactive.

## **Click & Keydown Events**

Two common types of events are:

* **Click Event (`click`)**: Triggered when a user clicks an element.
* **Keydown Event (`keydown`)**: Triggered when a user presses a key on the keyboard.

### **Example of Click Event**

```html
<button id="myButton">Click Me</button>

<script>
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Button clicked!");
    });
</script>
```

✅ **Explanation**:

* When the button is clicked, an alert box appears saying `"Button clicked!"`.

* * *

### **Example of Keydown Event**

```html
<input type="text" id="textInput" placeholder="Type something">

<script>
    document.getElementById("textInput").addEventListener("keydown", function(event) {
        console.log("Key pressed:", event.key);
    });
</script>
```

✅ **Explanation**:

* When a user types in the input box, the key they pressed is logged in the console.

* * *

# **2. Event Listeners**

JavaScript uses **event listeners** to execute code when an event occurs.

### **Common Event Listeners:**

* `onclick`: Triggered when an element is clicked.
* `onkeydown`: Triggered when a key is pressed.

### **Using `onclick` Event Listener**

```html
<button id="btn">Click Me</button>

<script>
    document.getElementById("btn").onclick = function() {
        alert("You clicked the button!");
    };
</script>
```

### **Using `onkeydown` Event Listener**

```html
<input type="text" id="inputBox" placeholder="Press any key">

<script>
    document.getElementById("inputBox").onkeydown = function(event) {
        console.log("You pressed:", event.key);
    };
</script>
```

✅ **Difference Between `addEventListener` and `onclick`**:

* `onclick` can be **overwritten** (only one function can be assigned).
* `addEventListener` allows **multiple** event handlers.

Example:

```javascript
let btn = document.getElementById("btn");

btn.onclick = function() {
    console.log("First Handler");
};

btn.onclick = function() {
    console.log("Second Handler"); // This replaces the first handler
};

// Using addEventListener
btn.addEventListener("click", function() {
    console.log("First Handler");
});

btn.addEventListener("click", function() {
    console.log("Second Handler"); // Both handlers will execute
});
```

* * *

# **3. Converting Between Strings & Numbers**

JavaScript allows easy conversion between strings and numbers.

### **String to Number**

| Method | Example | Output |
| --- | --- | --- |
| `Number(str)` | `Number("42")` | `42` |
| `parseInt(str)` | `parseInt("42px")` | `42` |
| `parseFloat(str)` | `parseFloat("42.5")` | `42.5` |
| Unary `+` | `+"42"` | `42` |

Example:

```javascript
let str = "123";
console.log(Number(str));  // 123
console.log(parseInt("45px")); // 45
console.log(parseFloat("3.14")); // 3.14
console.log(+"99"); // 99
```

* * *

### **Number to String**

| Method | Example | Output |
| --- | --- | --- |
| `String(num)` | `String(42)` | `"42"` |
| `num.toString()` | `(42).toString()` | `"42"` |
| `num + ""` | `42 + ""` | `"42"` |

Example:

```javascript
let num = 456;
console.log(String(num)); // "456"
console.log(num.toString()); // "456"
console.log(num + ""); // "456"
```

* * *

# **4. Special Behavior of Strings in Math Operations**

JavaScript **automatically converts** strings containing numbers into actual numbers **except for addition (`+`)**, which performs string concatenation.

### **Example of Implicit Conversion**

```javascript
console.log("5" - 2);  // 3 (String converted to number)
console.log("10" * 2); // 20 (String converted to number)
console.log("20" / 5); // 4 (String converted to number)
console.log("4" + 2);  // "42" (Concatenation instead of addition)
console.log("10" - "2"); // 8 (Both converted to numbers)
```

✅ **Why does `"4" + 2` result in `"42"` instead of `6`?**

* The `+` operator **prefers string concatenation** if one operand is a string.
* For other operators (`-`, `*`, `/`), JavaScript **converts the string to a number**.

✅ **Fixing Addition Issue**

```javascript
console.log(Number("4") + 2); // 6
console.log(+"4" + 2); // 6
```

* * *

# **5. The `window` Object**

The **`window`** object represents the **browser window** and provides access to many properties and methods.

✅ **`window` is added automatically**, so `window.alert()` is the same as `alert()`.

* * *

## **Common `window` Properties and Methods**

| Property/Method | Description | Example |
| --- | --- | --- |
| `window.document` | Represents the HTML document | `console.log(window.document.title);` |
| `window.console` | Gives access to the console | `window.console.log("Hello!");` |
| `window.alert()` | Displays an alert box | `window.alert("Warning!");` |
| `window.innerWidth` | Returns the window width | `console.log(window.innerWidth);` |
| `window.innerHeight` | Returns the window height | `console.log(window.innerHeight);` |

* * *

### **Examples**

#### **1. Accessing `document`**

```javascript
console.log(window.document.title); // Logs the page title
console.log(document.body.innerHTML); // Logs the entire body content
```

#### **2. Using `console`**

```javascript
window.console.log("This is a message!"); // Same as console.log()
```

#### **3. Using `alert()`**

```javascript
window.alert("This is an alert!");
```

#### **4. Getting Window Dimensions**

```javascript
console.log("Width:", window.innerWidth);
console.log("Height:", window.innerHeight);
```

* * *

# **Summary of Concepts Covered**

| Concept | Description | Example |
| --- | --- | --- |
| **Click Event (`click`)** | Triggered when an element is clicked | `element.addEventListener("click", callback)` |
| **Keydown Event (`keydown`)** | Triggered when a key is pressed | `element.addEventListener("keydown", callback)` |
| **Event Listeners** | `onclick` and `onkeydown` handle events | `button.onclick = function() {...}` |
| **String to Number** | JavaScript can convert strings to numbers | `Number("42")`, `parseInt("42px")`, `+"42"` |
| **Number to String** | JavaScript can convert numbers to strings | `String(42)`, `42.toString()`, `42 + ""` |
| **Math Behavior of Strings** | Strings with numbers behave like numbers except for `+` | `"5" - 2 → 3`, `"5" + 2 → "52"` |
| **Window Object** | Represents the browser window | `window.alert("Hello!")`, `window.innerWidth` |

* * *

This provides a **detailed** explanation with **examples** for each concept. 🚀 Let me know if you need anything else! 😊