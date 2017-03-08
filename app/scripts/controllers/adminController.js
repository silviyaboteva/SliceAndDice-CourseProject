'use strict';

class AdminController {
    constructor(adminData, template) {
        this.adminData = adminData;
        this.template = template;
    }

    loadAdminTemplate(content, context) {
        var $content = content;
        var _this = this;

        this.template.getTemplate('admin-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate);

                $('#create-product-form').submit(function(evt) {
                    evt.preventDefault();

                    let formData = new FormData($(this)[0]);

                    _this.adminData.createProduct(formData)
                        .then((result) => {
                            console.log(result);
                            if (result.success) {
                                $('#create-product-form')[0].reset();
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });

                    return false;
                });
            });
    }
}