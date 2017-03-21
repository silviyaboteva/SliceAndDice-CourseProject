'use strict';

class HomeController {
    constructor(homeData, template, utils) {
        this.homeData = homeData;
        this.template = template;
        this.utils = utils;
    }

    loadHomeTemplate(content, context) {
        var $content = content;
        var _this = this;
        var products;
        var category;

        this.homeData.getAllProducts()
            .then((foundProducts) => {
                products = foundProducts.result.products;
                var category = foundProducts.result.products.category;

                return this.template.getTemplate('home-template');
            })
            .then((resultTemplate) => {
                $content.html(resultTemplate({ products }))
            });

        //     this.homeData.getProductsByCategory(category)
        //         .then((foundProducts) => {
        //             products = foundProducts.result.products;
        //             category = foundProducts.result.products.category;
        //             console.log(products);
        //             console.log(category);

        //             return this.template.getTemplate('home-template');
        //         })
        //         .then((resultTemplate) => {
        //             $content.html(resultTemplate({ products }))
        //         });
    }

    // showProducts(id) {
    //     return new Promise(productData.getProductId(id))
    //         .then(function([homeTemplate, data]) {
    //             let template = this.template.getTemplate('home-template');
    //             let dataWithProductId = {
    //                 data: data,
    //                 id: id
    //             };
    //             localStorage.setItem('threadData', JSON.stringify(dataWithProductId));
    //             template.html(htmlTemplate(dataWithProductId));
    //         })
    // }
}