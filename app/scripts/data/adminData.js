'use strict';

class AdminData {
    constructor(requester) {
        this.requester = requester;
    }

    createProduct(data) {
        return this.requester.postWithFile(REQUEST_URL + '/api/products/create', data);
    }

    //TODO remove

}