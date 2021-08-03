const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // to create a product (post request)
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

module.exports.getAllProducts = (request,response) => {
    Product.find({})
    .then(product => response.json(product))
    .catch(err => response.json(err))

}


module.exports.getOneProduct = (request , response) => {
    Product.findOne({_id: request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id} ,request.body, {new:true} )
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
    .then(ifDeleted => response.json(ifDeleted))
    .catch(err => response.json(err))
}