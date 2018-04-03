//  node dependencies 
var express = require("express");
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var app = express();
var PORT = 3000;

//  setting handlebars

var exphbs = require("express-handlebars")

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
)

app.set("view engine", "handlebars")

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  // useMongoClient: true
});

//  model dependenices 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});