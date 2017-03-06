'use strict';

var router = Sammy('#content', function() {
    let $content = $('#content');

    let requester = new Requester();
    let template = new HandlebarsTemplate();

    let userData = new UserData(requester);
    let adminData = new AdminData(requester);

    let userController = new UserController(userData, template);
    let adminController = new AdminController(adminData, template);


    this.get('/', function(context) {
        context.redirect('#/home');
    });

    this.get('#/home', function(context) {
        $content.html('<h1>Welcome home</h1>');
    });

    this.get('#/admin', function(context) {
        adminController.loadAdminTemplate($content, context);
    });

    this.get('#/register', function(context) {
        userController.loadRegisterTemplate($content, context);
    });

    this.get('#/login', function(context) {
        userController.loadLoginTemplate($content, context);
    });

    this.get('#/update-settings', function(context) {
        userController.loadUpdateSettingsTemplate($content, context);
    });
});


$('#logout').click(function() {

});
router.run('#/');