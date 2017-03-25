'use strict';

class UserData {
    constructor(requester) {
        this.requester = requester;
    }

    register(data) {
        return this.requester.postWithFile(REQUEST_URL + '/api/auth/register', data);
    }

    login(data) {
        return this.requester.postJSON(REQUEST_URL + '/api/auth/login', data);
    }

    getProfile(username) {
        return this.requester.get(REQUEST_URL + `/api/users/user/${username}`);
    }
}