'use strict';

var router = Sammy('#content', function() {
    let $content = $('#content');

    let requester = new Requester();
    let template = new HandlebarsTemplate();
    let utils = new Utils(requester);

    let homeData = new HomeData(requester);
    let userData = new UserData(requester);
    let adminData = new AdminData(requester);
    //let productData = new ProductData(requester);

    let homeController = new HomeController(homeData, template, utils);
    let userController = new UserController(userData, template, utils);
    let adminController = new AdminController(adminData, template, utils);
    //let productController = new ProductController(productData, template);


    this.get('/', function(context) {
        context.redirect('#/home');
    });

    this.get('#/home', function(context) {
        homeController.loadHomeTemplate($content, context);
    });

    this.get('#/profile/:id', function(context) {
        userController.loadProfilTemplate($content, context);
    })

    this.get('#/admin', function(context) {
        adminController.loadAdminTemplate($content, context);
    });

    this.get('#/register', function(context) {
        userController.loadRegisterTemplate($content, context);
    });

    this.get('#/login', function(context) {
        userController.loadLoginTemplate($content, context);
    });


    this.get('#/profile', function(context) {
        $content.html('<h1>Welcome profile</h1>');
        //userController.loadUserProfileTemplate($content, context);
    });

    // this.get('#/product', function(context) {
    //     $content.html('<h1>Welcome product</h1>');
    //     //productController.loadProductTemplate($content, context);
    // });


    /* -- Show/Hide li from navigation -- */
    utils.toggleUserControlElements();

    $('#logout').on('click', function() {
        localStorage.removeItem('jwt-token');
        utils.toggleUserControlElements();
    });

});

router.run('#/');