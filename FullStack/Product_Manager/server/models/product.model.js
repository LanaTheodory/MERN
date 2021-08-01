
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	title:  {
        type: String,
        required: true,
        minLength: 2
    },
	price: {
        type: Number,
        require : true
    } ,
    discription: {
        type: String,
        required: true,
        minLength: 2
    },

},{ timestamps: true }) 


module.exports.Product = mongoose.model("Product", productSchema);

 