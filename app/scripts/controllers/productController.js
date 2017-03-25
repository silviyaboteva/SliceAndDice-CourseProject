'use strict';

class ProductController {
    constructor(productData, template, utils) {
        this.productData = productData;
        this.template = template;
        this.utils = utils;
    }

    loadProductTemplate(content, context, id) {
        var $content = content;
        var _this = this;
        var product;

        this.productData.getProductById(id)
            .then((foundProduct) => {
                console.log(foundProduct);
                product = foundProduct;
                console.log(product);
                return _this.template.getTemplate('product-template');
            })
            .then((resultTemplate) => {
                $content.html(resultTemplate({ product }));
            });

    }

    loadAllProductsTemplate(content, context) {
        var $content = content;
        var _this = this;
        var products;

        this.productData.getAllProducts()
            .then((foundProducts) => {
                products = foundProducts.result.products;
                return this.template.getTemplate('products-template');
            })
            .then((resultTemplate) => {
                $content.html(resultTemplate({ products }));
            });
    }
}