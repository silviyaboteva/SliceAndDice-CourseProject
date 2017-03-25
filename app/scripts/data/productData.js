'use strict'

class ProductData {
    constructor(requester) {
        this.requester = requester;
    }

    getProductById(id) {
        return this.requester.getJSON(REQUEST_URL + `/api/products/product/${id}`);
    }

    getProductImage(id) {
        return this.requester.getJSON(REQUEST_URL + `/api/products/image/${id}`);
    }

    getAllProducts() {
        return this.requester.getJSON(REQUEST_URL + '/api/products/all');
    }

    getProductsByCategory(category) {
        return this.requester.getJSON(REQUEST_URL + `/api/products/category/${category}`)
    }

    // getProductsByPrice(price) {
    //     return this.requester.getJSON(REQUEST_URL + '/api/products/price', price);
    // }

    // getMostPopular() {
    //     return this.requester.getJSON(REQUEST_URL + '/api/products/popular');
    // }
}