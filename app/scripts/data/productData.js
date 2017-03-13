'use strict'

class ProductData {
    constructor(requester) {
        this.requester = requester;
    }

    getProductId(id) {
        return this.requester.getJSON(REQUEST_URL + `/api/products/${id}`);
    }

    getProductImage(id) {
        return this.requester.getJSON(REQUEST_URL + `api/products/image/${id}`);
    }
}