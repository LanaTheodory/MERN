const { Team } = require('../models/Team.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    /////// to create a Team///////////////////

module.exports.createTeam = (request, response) => {
    const { name, position, game1 , game2, game3 } = request.body;
    Team.create({
        name,
        position,
        game1,
        game2,
        game3

    })
        .then(Team => response.json(Team))
        .catch(err => response.status(400).json(err))
}

//////////get all Teams//////

module.exports.getAllTeams = (request,response) => {
    Team.find({})
    .then(Teams => response.json(Teams))
    .catch(err => response.json(err))

}

///////// find one Team ///////////////////
module.exports.getOneTeam = (request , response) => {
    Team.findOne({_id: request.params.id})
    .then(Team => response.json(Team))
    .catch(err => response.json(err))
}

////////update///////////////

module.exports.updateTeam = (request, response) => {
    Team.findOneAndUpdate({_id: request.params.id} ,request.body, {new:true , runValidators: true})
    .then(updatedTeam => response.json(updatedTeam))
    .catch(err => response.status(400).json(err))
}

/////delete/////////////
module.exports.deleteTeam = (request, response) => {
    Team.deleteOne({_id: request.params.id})
    .then(ifDeleted =>{ response.json(ifDeleted); console.log(ifDeleted)})
    .catch(err => response.json(err))
}