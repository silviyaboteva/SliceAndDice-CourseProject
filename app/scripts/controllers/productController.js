'use strict';

class ProductController {
    consructor(productData, template) {
        this.productData = productData;
        this.temlate = template;
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