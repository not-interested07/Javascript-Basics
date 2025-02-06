# Basic Instructions 

## JavaScript Instructions: `alert` and `document.body.innerHTML`

## 1. `alert(message)`

The `alert()` function is used to display a popup dialog box with a message. It pauses script execution until the user clicks "OK."

### Example:
```js
alert("Hello, World!");
```
This will show a popup with the text "Hello, World!".

## 2. `document.body.innerHTML`

The `document.body.innerHTML` property allows you to get or set the HTML content inside the `<body>` tag.

### Example:
```js
document.body.innerHTML = "<h1>Welcome to My Page</h1>";
```
This replaces all the existing content inside `<body>` with a heading that says "Welcome to My Page."

### Use Cases:
- Dynamically updating webpage content.
- Clearing the page by setting `document.body.innerHTML = ""`.

### Warning:
Setting `innerHTML` replaces all existing content, including event listeners. Use `appendChild` or `innerText` for safer updates.
