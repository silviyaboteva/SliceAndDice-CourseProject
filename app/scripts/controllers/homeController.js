'use strict';

class HomeController {
    constructor(homeData, template) {
        this.homeData = homeData;
        this.template = template;
    }

    loadHomeTemplate(content, context) {
        var $content = content;
        var _this = this;

        this.homeData.getAllProducts();
        return this.template.getTemplate('home-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate)
            });
    }
}