'use strict'

class ProductData {
    constructor(requester) {
        this.requester = requester;
    }

    getProductId() {
        return this.requester.getJSON(REQUEST_URL + '/api/products/:id');
    }

    getProductImage() {
        return this.requester.getJSON(REQUEST_URL + 'api/products/image/:id');
    }
}