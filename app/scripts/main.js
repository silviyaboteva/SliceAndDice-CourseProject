'use strict';

var router = Sammy('#content', function() {
    let $content = $('#content');

    let requester = new Requester();
    let template = new HandlebarsTemplate();
    let userRole = new UserRole(requester);

    let homeData = new HomeData(requester);
    let userData = new UserData(requester);
    let adminData = new AdminData(requester);
    //let productData = new ProductData(requester);

    let homeController = new HomeController(homeData, template);
    let userController = new UserController(userData, template);
    let adminController = new AdminController(adminData, template);
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
    userRole.toggleUserControlElements();

    $('#logout').on('click', function() {
        localStorage.removeItem('jwt-token');
        userRole.toggleUserControlElements();
    });

});

router.run('#/');