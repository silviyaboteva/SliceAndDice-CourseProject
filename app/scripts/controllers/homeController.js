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
        var productsByCategory;

        this.homeData.getAllProducts()
            .then((foundProducts) => {
                products = foundProducts.result.products;
                return this.template.getTemplate('home-template');
            })
            .then((resultTemplate) => {

                $content.html(resultTemplate({
                    products
                }));

                _this.homeData.getProductsByCategory('women')
                    .then((result) => {

                        _this.template.getTemplate('products-category-template')
                            .then((resultTemplate) => {
                                $('#contentProducts').html(resultTemplate(result));
                            });
                    });

                $('#container .item-categories').on('click', function() {
                    category = $(this).text();
                    _this.homeData.getProductsByCategory(category)
                        .then((result) => {
                            productsByCategory = result;
                        })
                        .then(() => {
                            _this.template.getTemplate('products-category-template')
                                .then((resultTemplate) => {
                                    $('#contentProducts').html(resultTemplate(productsByCategory));
                                });
                        })
                });
            });
    }

    loadErrorPage(content, context) {
        var $content = content;
        var _this = this;

        return this.template.getTemplate('404-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate);
            })
    }

}