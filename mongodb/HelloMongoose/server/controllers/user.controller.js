const { model } = require("mongoose");
const joke = require("../models/user.model");

module.exports.findAllJokes = (req , res) => {
  joke.find()
  .then(allJokes => res.json( allJokes))
  .catch(err => res.json({ message: "Something went wrong", error: err }));

};

module.exports.findOneSingleJoke = (req, res) => {
	joke.findOne({ _id: req.params.id })
		.then(oneSinglejoke => res.json({ joke: oneSinglejoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewjoke = (req, res) => {
  joke.create(req.body)
    .then(newlyCreatedjoke => res.json({ joke: newlyCreatedjoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingjoke = (req, res) => {
  joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedjoke => res.json({ joke: updatedjoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingjoke = (req, res) => {
  joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
