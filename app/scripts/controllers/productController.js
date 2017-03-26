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
                product = foundProduct;
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

    loadCategoryProducts(content, context, category) {
        var $content = content;
        var _this = this;
        var products;

        this.productData.getProductsByCategory(category)
            .then((foundProducts) => {
                console.log(foundProducts);
                products = foundProducts;
                console.log(products);
                return _this.template.getTemplate('category-template');
            })
            .then((resultTemplate) => {
                $content.html(resultTemplate({ products }));
            });

    }
}