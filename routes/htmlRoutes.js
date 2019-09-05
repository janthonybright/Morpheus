var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.User.findAll({}).then(function(dbExamples) {
      res.render("home", {
        // msg: "Welcome!",
        // examples: dbExamples
      });
    // });
  });

  app.get("/create1", function (req, res) {
    res.render("tokemon")
  })

  // Load example page and pass in an example by id
  app.get("/create2", function(req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("elements", {
      });
    });
  // });

app.get("/create3", function (req, res){
  res.render("name")
});

app.get("/home", function (req, res){
  res.render("living")
});

app.get ("/battle", function (req, res){
  res.render("battle")
})
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
