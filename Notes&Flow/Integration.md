* * *

## **1. Using `classList` with `add` and `remove` Functions in JavaScript**

The `classList` property in JavaScript is used to manipulate the class attribute of an HTML element efficiently. It provides methods to add, remove, toggle, and check class names.

### **Using `add()`**

The `add()` method adds one or more classes to an element.

#### **Syntax:**

```javascript
element.classList.add("class1", "class2", ...);
```

#### **Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>classList add Example</title>
    <style>
        .highlight {
            background-color: yellow;
        }
        .bold {
            font-weight: bold;
        }
    </style>
</head>
<body>

<p id="myText">This is a paragraph.</p>
<button onclick="addClass()">Add Classes</button>

<script>
    function addClass() {
        let para = document.getElementById("myText");
        para.classList.add("highlight", "bold");
    }
</script>

</body>
</html>
```

**Explanation:**

* The button calls `addClass()` on click.
* The function selects the paragraph using `getElementById()`.
* `classList.add("highlight", "bold")` adds the `highlight` and `bold` classes.
* The paragraph’s background changes to yellow and the text becomes bold.

* * *

### **Using `remove()`**

The `remove()` method removes one or more specified classes from an element.

#### **Syntax:**

```javascript
element.classList.remove("class1", "class2", ...);
```

#### **Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>classList remove Example</title>
    <style>
        .highlight {
            background-color: yellow;
        }
        .bold {
            font-weight: bold;
        }
    </style>
</head>
<body>

<p id="myText" class="highlight bold">This is a paragraph.</p>
<button onclick="removeClass()">Remove Classes</button>

<script>
    function removeClass() {
        let para = document.getElementById("myText");
        para.classList.remove("highlight", "bold");
    }
</script>

</body>
</html>
```

**Explanation:**

* The paragraph initially has `highlight` and `bold` classes.
* Clicking the button removes them using `classList.remove()`.
* The background color and bold effect are removed.

* * *

### **Other Useful `classList` Methods**

1. **`toggle(className)`** - Adds the class if it's missing, removes it if it exists.
2. **`contains(className)`** - Checks if the element has the class.
3. **`replace(oldClass, newClass)`** - Replaces an old class with a new one.

Example:

```javascript
let element = document.getElementById("myText");
element.classList.toggle("highlight"); // Adds if missing, removes if present
console.log(element.classList.contains("highlight")); // true or false
element.classList.replace("highlight", "newClass"); // Replaces highlight with newClass
```

* * *

## **2. Placing JavaScript Code in Separate Files Using `<script>`**

Instead of writing JavaScript inside HTML files, you can store it in separate `.js` files for better organization, maintainability, and reusability.

### **How to Link an External JavaScript File?**

Use the `<script>` tag in the HTML file with the `src` attribute pointing to the external file.

#### **Example:**

### **1. Create an External JavaScript File (`script.js`)**

```javascript
function showMessage() {
    alert("Hello! This is an external JavaScript file.");
}
```

### **2. Link `script.js` in the HTML File**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>External JavaScript Example</title>
</head>
<body>

<button onclick="showMessage()">Click Me</button>

<!-- Linking External JavaScript File -->
<script src="script.js"></script>

</body>
</html>
```

**Key Points:**

* The `<script src="script.js"></script>` tag links the JavaScript file.
* The `showMessage()` function is defined in `script.js`.
* When the button is clicked, the function is executed.

### **Placing Multiple JavaScript Files**

If your project has multiple JS files, you can include them in the correct order.

```html
<script src="first.js"></script>
<script src="second.js"></script>
<script src="third.js"></script>
```

**Order Matters**: If `second.js` depends on functions from `first.js`, ensure `first.js` is loaded first.

* * *

## **3. Placing CSS Code in Separate Files Using `<link>`**

Instead of writing CSS inside the HTML file, you can store styles in an external `.css` file.

### **How to Link an External CSS File?**

Use the `<link>` tag in the `<head>` section of your HTML file.

#### **Example:**

### **1. Create an External CSS File (`styles.css`)**

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

h1 {
    color: blue;
}

button {
    background-color: green;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
}
```

### **2. Link `styles.css` in the HTML File**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>Welcome to My Page</h1>
<button>Click Me</button>

</body>
</html>
```

**Key Points:**

* `<link rel="stylesheet" href="styles.css">` links the external CSS file.
* The CSS styles are applied to the HTML elements.

### **Placing Multiple CSS Files**

If your project has multiple CSS files, you can include them like this:

```html
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="theme.css">
<link rel="stylesheet" href="layout.css">
```

**Order Matters**: The last file will override styles from previous files if there are conflicts.

* * *

## **4. Using Both `<script>` and `<link>` for Multiple Files**

You can use multiple external CSS and JavaScript files in the same HTML file.

### **Example**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Multi-File Example</title>
    <link rel="stylesheet" href="base.css">
    <link rel="stylesheet" href="theme.css">
    <script src="library.js"></script>
    <script src="app.js"></script>
</head>
<body>

<h1>External Files Example</h1>
<button onclick="changeColor()">Change Background</button>

</body>
</html>
```

#### **app.js**

```javascript
function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}
```

### **Key Takeaways**

1. **Multiple CSS and JS Files** - You can include multiple CSS and JS files.
2. **File Order Matters** - JavaScript and CSS files should be loaded in the correct sequence.
3. **Better Maintainability** - Keeping styles and scripts in separate files makes them easier to update and debug.

* * *

## **Conclusion**

* `classList.add()` and `remove()` help in dynamically modifying element classes.
* JavaScript files should be linked using `<script src="file.js"></script>` for modularity.
* CSS files should be linked using `<link rel="stylesheet" href="file.css">` for better styling management.
* Multiple CSS and JS files can be used in a project but should be ordered correctly.

Let me know if you need further clarifications! 🚀