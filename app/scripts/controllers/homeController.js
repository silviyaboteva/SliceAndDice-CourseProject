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

        this.homeData.getAllProducts();
        return this.template.getTemplate('home-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate)
            });
    }
}