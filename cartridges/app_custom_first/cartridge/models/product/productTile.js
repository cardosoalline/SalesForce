'use strict';

var base = module.superModule;

module.exports = function productTile(product, apiProduct, productType) {
    var testeDecorator = require('*/cartridge/models/product/decorators/teste');

    base.call(this, product, apiProduct, productType);

    testeDecorator(product, apiProduct);

    return product;
};
