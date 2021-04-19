'use strict';

var base = module.superModule;

module.exports = function fullProduct(product, apiProduct, options) {
    var testeDecorator = require('*/cartridge/models/product/decorators/teste');

    base.call(this, product, apiProduct, options);

    testeDecorator(product, apiProduct);

    return product;
};
