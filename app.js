

/* Init -------------------------------------------------------------------- */


// Requirements
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
    res.render("index");
});


/* Port -------------------------------------------------------------------- */


app.listen(3000, () => {
    console.log("Listening on port 3000!");
});
