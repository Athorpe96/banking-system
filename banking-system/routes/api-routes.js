// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  app.get("/api/accounts", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Accounts.findAll({}).then(function (accounts) {
      // We have access to the todos as an argument inside of the callback function
      res.json(accounts);
    });
  });

  app.post("/api/accounts", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Accounts.create({
      savings: req.body.savings,
      checking: req.body.checking
    }).then(function (accounts) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(accounts);
    });
  });



  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });


  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });


  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
