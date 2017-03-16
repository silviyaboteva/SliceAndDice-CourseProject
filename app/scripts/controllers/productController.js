'use strict';

class ProductController {
    consructor(productData, template, utils) {
        this.productData = productData;
        this.temlate = template;
        this.utils = utils;
    }

    loadProductTemplate(content, context) {
        var $content = content;
        var _this = this;

        this.template.getTemplate('product-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate);

                //TODO
            })
    }
}