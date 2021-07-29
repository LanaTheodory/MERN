const JokesControllers = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api/jokes/", JokesControllers.findAllJokes);
  app.get("/api/jokes/:id", JokesControllers.findOneSingleJoke);
  app.post("/api/jokes/new", JokesControllers.createNewjoke);
  app.put("/api/jokes/update/:id", JokesControllers.updateExistingjoke);
  app.delete("/api/jokes/delete/:id", JokesControllers.deleteAnExistingjoke);
};