const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setUp: String,
	punchLine: String
});

const joke = mongoose.model("joke", JokeSchema);

module.exports = joke;