'use strict';

class UserController {
    constructor(userData, template, utils) {
        this.userData = userData;
        this.template = template;
        this.utils = utils;
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

                    _this.userData.register(formData)
                        .then((result) => {
                            if (result.success) {
                                context.redirect('#/login');
                            }
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

                    _this.userData.login(data)
                        .then((result) => {
                            console.log(result);
                            if (result.success) {
                                localStorage.setItem('jwt-token', result.token);
                                localStorage.setItem('username', result.username);
                                context.redirect('#/home');
                            }
                        });

                    return false;
                });
            });
    }

    loadProfileTemplate(content, context) {
        var $content = content;
        var _this = this;
        var user;
        var username = localStorage.getItem('username');

        this.userData.getProfile(username)
            .then((foundUser) => {
                user = foundUser;
                console.log(user);
                return this.template.getTemplate('profile-template');
            })
            .then((template)=>{
                $content.html(template(user));
            });
        }


}