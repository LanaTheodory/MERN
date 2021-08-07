const { author } = require('../models/Author.model');


    /////// to create a author///////////////////

module.exports.createAuthor = (request, response) => {

    author.create({
        name : request.body.name
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}

//////////get all authors//////

module.exports.findAllAuthors = (request,response) => {
    author.find({})
    .then(authors => response.json(authors))
    .catch(err => response.json(err))

}

///////// find one author ///////////////////
module.exports.findOneSingleAuthor = (request , response) => {
    author.findOne({_id: request.params.id})
    .then(author => response.json(author))
    .catch(err => response.json(err))
}

////////update///////////////

module.exports.updateExistingAuthor = (request, response) => {
    author.findOneAndUpdate({_id: request.params.id} ,request.body, {new:true , runValidators: true} )
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))
}

/////delete/////////////
module.exports.deleteAnExistingAuthor = (request, response) => {
    author.deleteOne({_id: request.params.id})
    .then(ifDeleted => response.json(ifDeleted))
    .catch(err => response.json(err))
}