
const teamControllers = require("../controllers/Team.controller");

module.exports = app => {
  app.get("/api/team", teamControllers.getAllTeams);
  app.get("/api/team/:id", teamControllers.getOneTeam);
  app.post("/api/team", teamControllers.createTeam);
  app.put("/api/team/:id", teamControllers.updateTeam);
  app.delete("/api/team/:id", teamControllers.deleteTeam);
  
};
