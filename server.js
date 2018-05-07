var express = require("express");
var app = express();
var port = 8000;
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
var cc = require('cryptocompare')

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/coinApp/dist")));
app.set("views", path.join(__dirname, "./views"));

mongoose.connect("mongodb://localhost/bitcoin");
mongoose.Promise = global.Promise;



app.all("*", (request,response,next) => {
  response.sendFile(path.resolve("./coinApp/dist/index.html"))
});

app.listen(port, function(){
	console.log("Listening on the port 8000 for the Bitcoin project");
})




















