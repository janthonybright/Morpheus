
const monsterQueries = require("../controller/monsterQueries")
const userQueries = require("../controller/userQueries")
const statQueries = require("../controller/statQueries")


module.exports = function(app) {
  // Get all examples
  app.post("/api/signup", function (req, res){
    console.log(req.body)

  if(req.body.password !== req.body.confirmPassword) {
    res.status(404).json({ message: "Those passwords do not match!"})
  } else {
 var User = {
      username: req.body.username,
      password: req.body.password
    }
    userQueries.createUser(User, function(data){
      res.status(200).json(data.username)
    })
  }

  });

  app.get("/api/user/:id", function(req, res){
    userQueries.getUser(req.params.id, function(data){
      res.send(data); 
    })    
  })

  app.post("/api/monster", function(req, res){
    var monsterData = {
      name: req.body.name,
      color: req.body.color,
      element: req.body.element,
      UserId: req.body.UserId,
    }
    monsterQueries.createMonster(monsterData, function(data){
      res.status(200).json(data)
    })
  })
app.get("/api/monster/:id", function(req, res){

})






  



  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
