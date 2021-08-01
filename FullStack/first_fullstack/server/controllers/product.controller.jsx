const Product = require("mongoose");
const Product = require("../models/product.models");

module.exports.findAllProducts = (req , res) => {
    Product.find()
    .then(allProducts => res.json( allProducts))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
  
  };

  module.exports.createProduct = (request, response) => {
    const { title, price , description } = request.body;
    Person.create({
        title,
        price,
        description

    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}