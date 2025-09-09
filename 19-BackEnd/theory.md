* * *
# 🌍 HTTP Methods & XMLHttpRequest in JavaScript

## 1. What is HTTP?

* **HTTP (HyperText Transfer Protocol)** is how the browser and server talk to each other.
    
* Every request from the browser → goes to a **URL** on a backend server.
    
* The backend replies with a **response** (data + status code).
    

* * *

## 2. Common HTTP Methods

These are called **HTTP verbs** (ways to interact with the server).

* **GET** → Retrieve (read) data from the server.
    
    * Example: Load a webpage or fetch JSON.
        
* **POST** → Send (create) new data to the server.
    
    * Example: Submit a form, register a user.
        
* **PUT** → Update existing data on the server.
    
    * Example: Change a profile picture.
        
* **DELETE** → Remove data from the server.
    
    * Example: Delete a post or account.
        

👉 Think: **CRUD operations**

* Create → POST
    
* Read → GET
    
* Update → PUT
    
* Delete → DELETE
    

* * *

## 3. XMLHttpRequest (XHR) in JS

```js
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response); // Runs when server responds
});

xhr.open('GET', 'https://supersimplebackend.dev'); 
xhr.send();
```

### Steps:

1. **Create request**: `new XMLHttpRequest()`.
    
2. **Listen for response**: `xhr.addEventListener('load', callback)`.
    
3. **Configure**: `xhr.open(method, url)`.
    
4. **Send**: `xhr.send()`.
    

* * *

## 4. Backend & URL Paths

* Backend only supports certain **URL paths** (endpoints).
    
* If we request an unsupported path → we get an **error** response.
    

Example:

```
https://supersimplebackend.dev/products   ✅ valid
https://supersimplebackend.dev/unknown    ❌ error
```

* * *

## 5. HTTP Status Codes

These tell us what happened:

* **2xx → Success**
    
    * `200 OK` (everything worked).
        
* **4xx → Client error (our problem)**
    
    * `404 Not Found` (wrong URL).
        
    * `401 Unauthorized` (not logged in).
        
* **5xx → Server error (backend’s problem)**
    
    * `500 Internal Server Error`.
        

* * *

## 6. Types of Responses

* Backend can send different formats:
    
    * **HTML** → normal webpage.
        
    * **JSON** → data (most common for APIs).
        
    * **Text** → plain strings.
        

👉 In JS, you can check the type with headers or just parse JSON:

```js
const data = JSON.parse(xhr.response);
```

* * *

## 7. Browser & GET Requests

* Typing a URL in the browser’s address bar = **sending a GET request**.
    
* The backend responds with an HTML page → browser displays it.
    

* * *

# ✨ Summary for Beginners

* **GET, POST, PUT, DELETE** = ways to talk to backend (CRUD).
    
* **XMLHttpRequest** lets JS send requests & receive responses without reloading the page.
    
* Always check the **status code** → 4xx (your error), 5xx (server error).
    
* Backend decides what data type it sends (HTML, JSON, etc.).
    
* Visiting a site in a browser = sending a **GET** request behind the scenes.
    

* * *

