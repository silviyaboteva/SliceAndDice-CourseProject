'use strict';

const REQUEST_URL = 'http://localhost:1337';

class HomeData {
    constructor(requester) {
        this.requester = requester;
    }

    getAllProducts() {
        return this.requester.getJSON(REQUEST_URL + '/api/products/all');
    }

    getProductsByCategory(category) {
        return this.requester.getJSON(REQUEST_URL + 'api/products/category', category);
    }

    getProductsByPrice(price) {
        return this.requester.getJSON(REQUEST_URL + 'api/products/price', price);
    }

    getMostPopular() {
        return this.requester.getJSON(REQUEST_URL + 'api/products/popular');
    }
}