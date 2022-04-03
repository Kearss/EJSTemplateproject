var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
const PORT = process.env.PORT || 8080;

// Luodaan "aloitussivu".
app.get("/", function (req, res){
    // Lisätään paikallinen JSON-tiedosto muuttujaan.
    var json = require(__dirname + "/Civ.json")
    // Renderöidään index.ejs -tiedosto sivulle ja tuodaan mukana json-muuttujaan sijoitettu data.
    res.render("pages/index", json);   
})
app.get("*", function(req, res){
    res.send("Can't find the requested page", 404)
});
// Asetetaan ohjelma kuuntelemaan Herokun määrittämää porttia tai vaihtoehtoisesti porttia 8080.
app.listen(PORT, function(){
    console.log("Server is running!")
});