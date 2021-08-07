const mongoose = require("mongoose");
const TeamRoutes = require("../routes/Team.routes");

const TeamSchema = new mongoose.Schema({
	name: {
        type: String,
       required: TeamRoutes,
        minLength:[3, "name must be at least 3 characters"]
    },
	position: String ,
  
       
    game1:{ type: String , default: "undecided"},
    game2: {type: String , default: "undecided"},
    game3: {type: String , default: "undecided"},


        
  
},{ timestamps: true }) 


module.exports.Team = mongoose.model("Team", TeamSchema);