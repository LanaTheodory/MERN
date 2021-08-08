const mongoose = require("mongoose");

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const BeltSchema = new mongoose.Schema({

	name:  {
        type: String,
        required: [true, "task is required"],
        minLength: [ 2, "min length must be more than 2 characters"]
    },
	date: {
        type:  String,
        require : true,
        set: date => formatDate(date)
    } ,
    status: { 
        type: String
     },
   
},{ timestamps: true }) 


module.exports.Belt = mongoose.model("Belt", BeltSchema);
