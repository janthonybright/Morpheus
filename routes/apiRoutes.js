
const monsterQueries = require("../controller/monsterQueries")
const userQueries = require("../controller/userQueries")
const statQueries = require("../controller/statQueries")


module.exports = function(app) {
 
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

  app.put("/api/monster/:id", function(req, res){
    var monsterId = req.params.id;
    var colName = req.body.colName;
    var info = req.body.info
    statQueries.updateMonster(monsterId, colName, info, function(data) {
      res.status(200).end()
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
      var stats = {
        HealthPoint: 100, 
        AttPoint: 69, 
        DefPoint: 69, 
        MonsterId: data.id
      }
      var monster = data;
        statQueries.createStat(stats, function(data) {
          res.status(200).json({ monster: monster, stats: data})
        })
    })
  })


app.get("/api/monster/:id", function(req, res){
  // the req.params.id is the id of the user
  monsterQueries.getMonster(req.params.id, function(data) {
    res.send(data)
  })
  
})








  



  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};



