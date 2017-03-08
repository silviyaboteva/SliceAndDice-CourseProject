'use strict';

class UserRole {
    constructor(requester) {
        this.requester = requester;
    }

    isUserLogged() {
        return !!localStorage.getItem('jwt-token');
    }

    toggleUserControlElements() {
        if (this.isUserLogged()) {
            $('.item-user-control').addClass('hidden');
            $('#logout').removeClass('hidden');

            this.requester.getJSON(REQUEST_URL + '/api/auth/getLoggedUser')
                .then((user) => {

                    if (user.roles.indexOf('admin') !== -1) {
                        $('.item-admin-account').removeClass('hidden');
                    }
                });
        } else {

            $('.item-user-control').removeClass('hidden');
            $('.item-user-account').removeClass('hidden');
            $('.item-admin-account').addClass('hidden');
            $('#logout').addClass('hidden');
        }
    }
}