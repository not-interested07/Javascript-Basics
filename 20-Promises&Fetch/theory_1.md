* * *

# **JavaScript Promises & Fetch API – Complete Guide**

* * *

## **1. Promises – What & Why**

A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation.

Think of it like an **IOU** for a result you don’t have yet.

### **Promise States**

A Promise can be in one of three states:

1. **Pending** – Operation not finished yet.
    
2. **Fulfilled** – Operation completed successfully.
    
3. **Rejected** – Operation failed.
    

* * *

### **Creating a Promise**

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Something went wrong!");
  }
});
```

* **`resolve(value)`** → Marks the promise as fulfilled with a value.
    
* **`reject(reason)`** → Marks the promise as rejected with an error.
    

* * *

### **Consuming a Promise**

```js
promise
  .then(result => {
    console.log("Result:", result); // Runs if resolved
  })
  .catch(error => {
    console.error("Error:", error); // Runs if rejected
  })
  .finally(() => {
    console.log("Always runs");
  });
```

* * *

### **Return Value of a Promise**

* Always returns another **Promise**, enabling **chaining**.
    
* This is why you can do:
    

```js
promise
  .then(res => res + " - processed")
  .then(final => console.log(final));
```

* * *

## **2. The Fetch API**

**`fetch()`** is a modern way to make network requests in JavaScript.  
It is **Promise-based**.

* * *

### **Basic Example**

```js
fetch('https://example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Fetch error:", err));
```

* * *

### **Key Facts About fetch**

* Returns a **Promise** that resolves to a `Response` object.
    
* Only **rejects** for **network errors** (no internet, DNS fail, etc.).
    
* Does **not** reject for HTTP errors like 404 or 500 — you must check `response.ok`.
    

* * *

### **Response Object Properties**

* **`ok`** → `true` if status is between 200–299.
    
* **`status`** → HTTP status code.
    
* **`json()`**, **`text()`**, **`blob()`**, **`formData()`** → Methods to read the body (all return Promises).
    

* * *

### **Example with async/await**

```js
async function getData() {
  try {
    const res = await fetch('https://example.com/data');
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}
getData();
```

* * *

## **3. When to Use Promises vs Fetch**

| Feature | Promise (General) | Fetch API |
| --- | --- | --- |
| Purpose | Handles async tasks of any kind | Specifically for HTTP requests |
| Built-in or Custom | You can create them manually | Built-in function, no need to construct manually |
| Return Type | Promise | Promise that resolves to `Response` |
| Error Handling | `.catch()` or `try...catch` with async/await | Same, but must manually check `response.ok` for HTTP errors |
| Cancellation Support | No direct built-in cancel (needs AbortController) | Yes (via `AbortController`) |

* * *

## **4. Error Handling Recap**

### **With `.catch()`**

```js
fetch(url)
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .catch(err => console.error(err));
```

* * *

### **With async/await**

```js
try {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
} catch (err) {
  console.error(err);
}
```

* * *

## **5. Throw vs reject in Promises**

* **`throw`** → Synchronous; immediately stops execution in the current block and rejects the Promise.
    
* **`reject()`** → Asynchronous in effect; marks the Promise as rejected but execution can continue unless you `return`.
    

```js
new Promise((resolve, reject) => {
  throw new Error("Thrown error"); // immediate
});

new Promise((resolve, reject) => {
  reject("Rejected"); // schedules rejection, continues
  console.log("Still running after reject");
});
```

* * *

## **6. Summary Table**

| Concept | Key Takeaways |
| --- | --- |
| Promise | Represents eventual success or failure of an async operation. |
| States | Pending → Fulfilled → Rejected. |
| Fetch API | Makes HTTP requests, returns Promise → `Response`. |
| Error Handling | `.catch()` or `try...catch` with async/await. |
| HTTP Errors | `fetch` resolves even for 404/500 — check `response.ok`. |
| Throw vs Reject | Throw → sync stop; Reject → async rejection. |

* * *