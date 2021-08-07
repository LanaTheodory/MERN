const authorControllers = require("../controllers/Author.controller");

module.exports = app => {
  app.get("/api/author/", authorControllers.findAllAuthors);
  app.get("/api/author/:id", authorControllers.findOneSingleAuthor);
  app.post("/api/author", authorControllers.createAuthor);
  app.put("/api/author/:id", authorControllers.updateExistingAuthor);
  app.delete("/api/author/:id", authorControllers.deleteAnExistingAuthor);
};