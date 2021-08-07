const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
	name:  {
        type: String,
        required: true,
        minLength: [3 , "name mustbe atleast3 characters"],
    }, 
    },{ timestamps: true }) 


module.exports.author = mongoose.model("author", authorSchema);
