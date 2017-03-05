'use strict';
const REQUEST_URL = 'http://localhost:1337';

class UserController {
    constructor(userData, template) {
        this.userData = userData;
        this.template = template;
    }

    loadRegisterTemplate(content, context) {
        var $content = content;
        var _this = this;

        this.template.getTemplate('register-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate);

                $('#register-form').submit(function(evt) {
                    evt.preventDefault();

                    var formData = new FormData($(this)[0]);

                    // TODO add validation
                    _this.userData.register(formData)
                        .then((result) => {
                            console.log(result);

                            context.redirect('#/home');
                        });

                    return false;
                });
            });
    }

    loadLoginTemplate(content, context) {
        var $content = content;
        var _this = this;

        this.template.getTemplate('login-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate);

                $('#login-form').submit(function(evt) {
                    evt.preventDefault();

                    let data = {
                        username: $('#username').val(),
                        password: $('#password').val()
                    };

                    // TODO add validation
                    _this.userData.login(data)
                        .then((result) => {

                            if (result.success) {
                                localStorage.setItem('jwt-token', result.token);
                                context.redirect('#/home');
                            }
                        });

                    return false;
                });
            });
    }
}