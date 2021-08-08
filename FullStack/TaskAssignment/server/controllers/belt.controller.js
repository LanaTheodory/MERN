const { Belt } = require('../models/Belt.model');


module.exports.createBelt = (req, res) => {
    const { name, date, status} = req.body;
    Belt.create({
        name,
        date,
        status

    })
        .then(Belt => res.json(Belt))
        .catch(err => res.status(400).json(err))
}



module.exports.getAllBelts = (req,res) => {
    Belt.find({})
    .then(Belts => res.json(Belts))
    .catch(err => res.json(err))

}


module.exports.getOneBelt = (req , res) => {
    Belt.findOne({_id: req.params.id})
    .then(Belt => res.json(Belt))
    .catch(err => res.json(err))
}

module.exports.updateBelt = (req, res) => {
    Belt.findOneAndUpdate({_id: req.params.id} ,req.body, {new:true , runValidators: true} )
    .then(updatedPerson => res.json(updatedPerson))
    .catch(err => res.json(err))
}


module.exports.deleteBelt = (req, res) => {
    Belt.deleteOne({_id: req.params.id})
    .then(ifDeleted => res.json(ifDeleted))
    .catch(err => res.json(err))
}