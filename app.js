

/* Init -------------------------------------------------------------------- */


// Requirements
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Configure app
const app = express(); 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({"extended": true}));

// View engine setup
app.set("view engine", "ejs");


/* Home rout --------------------------------------------------------------- */


app.get("/", (req, res) => {
    const currentFontAwesomeKey = process.env.FONTAWESOME_KEY;
    
    res.render("index", {fontAwesomeKey: currentFontAwesomeKey});
});


/* Port -------------------------------------------------------------------- */


app.listen(3000, () => {
    console.log("Listening on port 3000!");
});
