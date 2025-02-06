# **What is DOM?**

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the structure of an HTML or XML document as a **tree of objects**, allowing JavaScript to manipulate the content, structure, and styling of web pages dynamically.

## **How does the DOM work?**

* The **DOM bridges** HTML and JavaScript, enabling JavaScript to interact with web pages.
* Every element in the HTML document is represented as a **node** in the DOM.
* The DOM allows **reading, modifying, adding, or removing** elements from an HTML document programmatically.

### **Example - Understanding the DOM Structure**

Consider the following HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="heading">Hello, DOM!</h1>
    <p class="info">This is a paragraph.</p>
</body>
</html>
```

When the browser loads this HTML, it creates a **DOM tree** like this:

```
Document
 ├── <html>
 │   ├── <head>
 │   │   ├── <title>DOM Example</title>
 │   ├── <body>
 │       ├── <h1 id="heading">Hello, DOM!</h1>
 │       ├── <p class="info">This is a paragraph.</p>
```

Now, JavaScript can interact with this structure, modify it, and manipulate its content.

* * *

# **Key DOM Properties**

## **1. `document.title`**

* The `document.title` property allows getting or setting the **title** of the current document.
* The title refers to the text displayed on the browser **tab**.

### **Example**

```javascript
console.log(document.title); // Logs the current title of the document

// Change the title dynamically
document.title = "New Title!";
console.log(document.title); // Outputs: New Title!
```

After executing this JavaScript, the browser tab’s title will change to **"New Title!"**.

* * *

## **2. `document.body`**

* The `document.body` property returns the `<body>` element of the document.
* You can use JavaScript to modify or access the `<body>` content dynamically.

### **Example**

```javascript
console.log(typeof document.body); // Outputs: "object"

// Changing the background color of the body
document.body.style.backgroundColor = "lightblue";
```

**Explanation:**

* Since `document.body` is an **object**, JavaScript can use it to manipulate the body’s style, content, and structure.

* * *

## **3. `document.body.innerHTML`**

* The `innerHTML` property allows getting or setting the **HTML content** inside an element.
* It returns a **string** containing all the HTML inside the `<body>`.
* Modifying `innerHTML` can dynamically change the content of the page.

### **Example**

```javascript
// Get the current HTML inside the body
console.log(document.body.innerHTML);

// Change the content inside the body
document.body.innerHTML = "<h2>New Content Replaced</h2><p>Updated via JavaScript</p>";
```

**Explanation:**

* The `innerHTML` property can overwrite the entire content inside `<body>`.
* The previous content is removed, and new HTML is inserted.

* * *

# **Important DOM Method: `document.querySelector()`**

The `document.querySelector()` method allows selecting elements from the DOM **using CSS selectors**.

### **Key Features:**

* By default, `querySelector()` **returns the first matching element**.
* You can select elements using **tag names, classes, or IDs**.

* * *

## **1. Selecting an Element by Tag Name**

```javascript
let heading = document.querySelector("h1"); // Selects the first <h1> element
console.log(heading.innerText); // Outputs: "Hello, DOM!"
```

* * *

## **2. Selecting an Element by ID**

```javascript
let heading = document.querySelector("#heading"); // Selects the element with id="heading"
heading.style.color = "red"; // Changes text color to red
```

* * *

## **3. Selecting an Element by Class**

```javascript
let paragraph = document.querySelector(".info"); // Selects the first element with class="info"
paragraph.innerText = "This text was changed via JavaScript!";
```

* * *

## **When an HTML Element is Inside JavaScript, It Becomes a JavaScript Object**

* Every HTML element selected using JavaScript behaves like a **JavaScript object**.
* These elements have **properties** and **methods** that can be used to manipulate them.

### **Example:**

```javascript
let para = document.querySelector(".info");

console.log(typeof para); // Outputs: "object"

// Checking the properties of the object
console.log(para.tagName); // Outputs: "P"
console.log(para.innerText); // Outputs the paragraph text
```

* * *

# **Every HTML Element Has `.innerHTML`**

* The `.innerHTML` property exists on all HTML elements.
* It allows getting or setting the **HTML content inside an element**.

### **Example 1: Getting `innerHTML`**

```javascript
let div = document.querySelector("div");
console.log(div.innerHTML); // Outputs all HTML inside the <div>
```

* * *

### **Example 2: Setting `innerHTML`**

```javascript
let div = document.querySelector("div");
div.innerHTML = "<p>New paragraph inside div!</p>"; // Replaces content inside div
```

* * *

# **Summary of Concepts Covered**

| Concept | Description | Example Usage |
| --- | --- | --- |
| **DOM (Document Object Model)** | Represents the structure of an HTML document as a tree of objects. | `document.querySelector("h1")` |
| **`document.title`** | Gets or sets the document's title. | `document.title = "New Title";` |
| **`document.body`** | Represents the `<body>` element of the document. | `document.body.style.backgroundColor = "blue";` |
| **`document.body.innerHTML`** | Gets or sets the inner HTML content of `<body>`. | `document.body.innerHTML = "<h2>New Content</h2>";` |
| **`document.querySelector()`** | Selects the first matching element using a CSS selector. | `document.querySelector(".class-name")` |
| **HTML Elements as JavaScript Objects** | HTML elements become JS objects with properties & methods. | `document.querySelector("p").tagName` |
| **`.innerHTML` Property** | Exists on all HTML elements, used to get/set inner content. | `document.querySelector("div").innerHTML = "Updated!";` |

This covers all the requested topics with detailed explanations and practical examples. Let me know if you need further clarifications! 🚀