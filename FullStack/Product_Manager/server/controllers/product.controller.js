const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { title, discription, price } = request.body;
    Product.create({
        title,
        discription,
        price

    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}
