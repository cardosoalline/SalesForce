'use strict';

module.exports = function (object, apiProduct) {
    Object.defineProperty(object, 'teste', {
        enumerable: true,
        value: apiProduct.custom.teste
    });
};

