import {formatCurrency} from '../scripts/utils/money.js'
export function getProduct(productId) {
  let matchingProduct;
  products.forEach((product) => {
      if (product.id === productId) {
          matchingProduct = product;
      }
  })
  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStartUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return '';
  }
}

class Clothing extends Product{
  sizeChartLink;
  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    return `
      <a href = "${this.sizeChartLink}" target = "_blank">
        Size Chart
      </a>
    `;
  }
}


// this was a demonstration for error handling -- didn't work quite well
export let products = [];
export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    products = JSON.parse(xhr.response).map((productDetails)=> {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    });
    console.log('load products -- needed');

    fun();
  });
  xhr.addEventListener('error', () => {
    console.log('Unexpected error : Please try again later.')
  });
  xhr.open('GET', 'https://supersimplebackend.dev/products');
  xhr.send();
}


export function loadProductsFetch() {
  const promise = fetch(
    'https://supersimplebackend.dev/products'
   ).then((response) => {
    return response.json();
  }).then((productsData) => {
    products = productsData.map((productDetails)=> {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    });
    console.log('load products');
  }).catch((error) => {
    console.log("Unexpected error. Please try agian later.");
  })

  return promise;
}

// loadProductsFetch().then(() => {
//   console.log('nextStep');
// });