const beltControllers = require("../controllers/belt.controller");

module.exports = app => {
  app.get("/api/belt", beltControllers.getAllBelts);
  app.get("/api/belt/:id", beltControllers.getOneBelt);
  app.post("/api/belt", beltControllers.createBelt);
  app.put("/api/belt/:id", beltControllers.updateBelt);
  app.delete("/api/belt/:id", beltControllers.deleteBelt);
};