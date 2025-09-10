import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/backend-practice.js';
//import '../data/cart-class.js';

// loadProducts(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });


// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve('value1');
//     });

// }).then((value) => {
//     console.log(value);
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         })
//     })

// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary(); 
// })

// Multiple callbacks cause too much nesting
// Problem with Callbacks
// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     })
// })


// Multiple Promises at once have been used here
// Promise.all([
//    loadProductsFetch(),
    
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         })
//     })

// ]). then ((values) => {
//     console.log(values);
//     renderOrderSummary();
//     renderPaymentSummary(); 
// })


// Async & Await
// Only use await when you are inside an async function
// Closest function has to be an async. <<
async function loadPage() {
    try { 
        //throw 'error1'; // Creates an error and the code moves to the catch statement directly
        await loadProductsFetch();

        // The case where you use await the value just gets returned
        const value = await new Promise((resolve, reject) => {
            // throw 'error2'; -- will create an error and the code moves to catch statements
            loadCart(() => {
                //reject('error3');
                resolve('value3');
            })
        });
    } catch (error){
        console.log('Unexpected Error. Please try again later.');
    }
    

    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();

// loadPage().then((value) => {
//     console.log('next Step');
//     console.log(value);
// })

/*
    The above code acts as a shortcut for the below code.
    function loadPage() {
        return new Promise((resolve) => {
            console.log('load Products');
            resolve();
        })
    }
*/