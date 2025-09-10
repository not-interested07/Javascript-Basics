// What is GET, POST, PUT, DELETE?
const xhr = new XMLHttpRequest();

// The event listener is placed prior to the sending of the request
xhr.addEventListener('load', () => {
    console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();


// Backend will support only certain URL paths and if we send the request to an unsupported URL, it will result in an error.
// status code -- starts with 4 - our problem .. 5 - backend's problem
// Backend can response with different types of data.
// using the browser is the same as making a GET request