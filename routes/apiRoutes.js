var db = require("../models");
const monsterQueries = require("../controller/monsterQueries")


module.exports = function(app) {
  // Get all examples
  app.post("/api/signup", function (req, res){
    console.log(req.body)
    db.User.create({
      username: req.body.username,
      password: req.body.password
    })
    .then(function(user){
      res.send({
        success: true,
        data: user 
      })

    })
  })
  
  app.get("/api/monsters", function(req, res) {
    db.Monster.findAll({}).then(function(dbMonsters) {
      res.json(dbMonsters);
    });
  });


  // Create a new example
  app.post("/monster", function(req, res) {
    const data = {
      name: "test monster",
      color: "blue",
      element: "water",
      UserId: 1
    }
    db.Monster.create(data).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
