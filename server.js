//  node dependencies 
var express = require("express");
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var app = express();

var htmlRouter = require("./routes/htmlRoutes");
//  set port to env or 3000 
var PORT =  process.env.PORT || 3000;

//  setting handlebars
app.use(htmlRouter);

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