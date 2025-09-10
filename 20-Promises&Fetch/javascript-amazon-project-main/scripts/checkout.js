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
Promise.all([
   loadProductsFetch(),
    
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        })
    })

]). then ((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary(); 
})