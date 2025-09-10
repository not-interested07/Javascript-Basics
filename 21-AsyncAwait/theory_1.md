* * *

# **JavaScript – Advanced Asynchronous Error Handling (Full Notes)**

* * *

## **1. XMLHttpRequest (XHR) Error Handling**

### **How it works**

* XHR is an older way of making network requests.
    
* You attach **event listeners** to handle:
    
    * **`load`** → Fires when a response is received (success _or_ HTTP error like 404/500).
        
    * **`error`** → Fires only for **network failures** (connection lost, DNS failure, etc.).
        

### **Example**

```js
const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Success
    console.log(xhr.response);
  } else {
    // HTTP error (server responded but with error code)
    console.error("Server error:", xhr.status);
  }
});

xhr.addEventListener("error", () => {
  // Network-level failure
  console.error("Network error");
});

xhr.open("GET", url);
xhr.send();
```

### **Important Notes**

* `error` event **does not fire** for HTTP status errors (404, 500).
    
* Always check `xhr.status` inside `load` to detect HTTP errors.
    
* `try/catch` around `xhr.send()` won’t catch async errors — handle them in the event listeners.
    

* * *

## **2. Fetch API Error Handling**

### **How fetch works**

* `fetch(url)` returns a **Promise**.
    
* **Rejects** only for:
    
    * Network failures
        
    * Abort signals
        
    * CORS issues
        
* **Resolves** for _any_ HTTP status, even errors like 404 or 500.
    

### **Example**

```js
fetch(url)
  .then(response => {
    if (!response.ok) { // not 2xx status
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));
```

### **Key Points**

* Check `response.ok` (true if status 200–299) to detect HTTP errors.
    
* Use `.catch()` to handle:
    
    * Network issues
        
    * Thrown errors inside `.then()`.
        

* * *

## **3. Async/Await Error Handling**

### **How it works**

* `async` functions return a **Promise**.
    
* Use `try...catch` to handle both synchronous errors and rejected Promises from `await`.
    

### **Example**

```js
async function getData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Async/await error:", err);
  }
}

getData();
```

### **Key Points**

* Wrap `await` calls inside `try` so rejections are caught.
    
* Any `throw` or rejected Promise inside an async function jumps to `catch`.
    
* You can also handle errors at the call site:  
    `getData().catch(err => console.error(err));`
    

* * *

## **4. try...catch in JavaScript**

### **How it works**

```js
try {
  doSomething();
  doSomethingElse();
} catch (error) {
  console.error("Caught error:", error);
}
```

* Runs `try` first.
    
* If an error is thrown anywhere inside `try`:
    
    * The rest of the block is skipped.
        
    * Control jumps to `catch`.
        
* If no error → `catch` is skipped.
    
* `finally` (if present) runs no matter what.
    

### **Notes**

* Works for synchronous code directly.
    
* For asynchronous code, `try...catch` works with `await` inside async functions, but **not** for callbacks/promises without `await`.
    

* * *

## **5. throw Statement**

### **Purpose**

* Manually create an exception.
    
* Stops function execution immediately.
    
* Passes control to nearest `catch` (or global handler if none).
    

### **Example**

```js
function compute(x) {
  if (isNaN(x)) {
    throw new Error("Invalid number");
  }
  return x * 2;
}
```

### **Best Practices**

* Always throw `Error` objects (`new Error("msg")`) — they carry `.message`, `.stack`, etc.
    
* After `throw`, no code in the current function runs.
    

* * *

## **6. Errors in Promises – throw vs reject**

### **Both trigger a rejection**, but there are differences:

```js
// Using throw
new Promise((resolve, reject) => {
  throw new Error("Oops!"); // immediate rejection
}).catch(err => console.log(err));

// Using reject
new Promise((resolve, reject) => {
  reject("Oops!"); // schedules rejection, but code continues
  console.log("Still runs after reject");
});
```

### **Key Points**

* `throw` → **Synchronous**: stops execution in that function immediately.
    
* `reject()` → **Asynchronous** in effect: rejects the Promise but doesn’t stop execution unless you `return`.
    
* Inside `.then()` handlers:
    
    * `throw` acts like returning a rejected Promise.
        
    * Any uncaught exception auto-converts to a Promise rejection.
        

* * *

## **7. URL Parameters & URLSearchParams**

### **Example**

```js
const url = new URL(window.location.href);
console.log(url.searchParams.get('orderId'));
```

### **How it works**

* `window.location.href` → Full current URL.
    
* `new URL(...)` → Creates a `URL` object with parsed parts.
    
* `.searchParams` → A `URLSearchParams` object for working with query strings.
    
* `.get('key')` → Returns the first value of that parameter (or `null` if missing).
    

### **Why use it?**

* Cleaner and safer than manual string splitting.
    
* Automatically handles:
    
    * Decoding
        
    * Multiple values
        
    * Missing keys
        

**Example URL:**  
`https://example.com/page?orderId=1234`  
`url.searchParams.get('orderId')` → `"1234"`

* * *

# Difference Between Throw & Reject

The confusion usually happens because **`throw`** and **`reject()`** can both result in a _Promise rejection_, but **how and when they do it** is slightly different.

* * *

## **1. Both cause a promise to reject**

If you use either **`throw`** or **`reject()`** inside a Promise executor, the final effect is the same: the Promise ends up **rejected**.

Example (both will print `"Promise rejected"`):

```js
// Using throw
new Promise((resolve, reject) => {
  throw new Error("Something went wrong"); // ← throws immediately
}).catch(err => console.log("Promise rejected:", err.message));

// Using reject()
new Promise((resolve, reject) => {
  reject(new Error("Something went wrong")); // ← signals rejection
}).catch(err => console.log("Promise rejected:", err.message));
```

* * *

## **2. The key difference: timing and control**

| Aspect | `throw` | `reject()` |
| --- | --- | --- |
| **Type** | Synchronous error | Explicit asynchronous rejection signal |
| **When it runs** | Immediately stops execution of the current function | Runs when the JS engine gets to that line, but doesn’t forcibly stop the rest of the function unless you `return` |
| **Extra code after it** | Won’t run (execution jumps to `.catch`) | Will still run unless you `return` after `reject()` |
| **Where it works** | Only inside `try/catch` or promise executors / async functions to signal errors | Anywhere inside a Promise executor or resolver callback |

* * *

## **3. Example: Why `throw` stops execution, but `reject()` doesn’t**

```js
// Throw example
new Promise((resolve, reject) => {
  console.log("Before throw");
  throw new Error("Error from throw");
  console.log("After throw"); // ❌ never runs
}).catch(err => console.log("Caught:", err.message));

// Reject example
new Promise((resolve, reject) => {
  console.log("Before reject");
  reject(new Error("Error from reject"));
  console.log("After reject"); // ✅ still runs
}).catch(err => console.log("Caught:", err.message));
```

**Output:**

```
Before throw
Caught: Error from throw
Before reject
After reject
Caught: Error from reject
```

* * *

## **4. Practical usage**

* Use **`throw`** when:
    
    * You want to fail **immediately** and stop further execution inside the function.
        
    * You’re inside an `async` function (because `throw` automatically rejects the returned Promise).
        
* Use **`reject()`** when:
    
    * You want to signal an error **without** stopping code execution right away (rare in most async workflows).
        
    * You’re writing the Promise executor manually.
        

* * *

## **5. Inside async/await**

In an `async` function, **`throw`** behaves just like `reject()` but stops execution instantly:

```js
async function example() {
  throw new Error("Fail"); // same as returning Promise.reject(...)
}

example().catch(err => console.log(err.message));
```

* * *

✅ **Rule of thumb:**

* In modern code, **prefer `throw`** inside `async` functions and Promise callbacks unless you specifically need to keep executing after the error signal.
    
* **`reject()`** is more common in older code or when you manually construct Promises.
    

* * *
