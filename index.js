var csv = require("csv-parser");
var fs = require("fs");
var cors = require('cors')
var express = require("express");
var path = require("path");
var app = express();

var GROCERIES = [];

fs.createReadStream("groceries.csv")
    .pipe(csv())
    .on("data", (row) => {
        GROCERIES.push(row);
    })
    .on("end", () => {
        console.log("CSV file successfully processed");
    });

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/groceries", (req, res, next) => {
    var GROCERIES_RES = [...GROCERIES];
    Object.keys(req.query).forEach((q) => {
        GROCERIES_RES = GROCERIES_RES.filter((g) => {
            let queryValue = req.query[q];
            return g[q].toLowerCase().includes(queryValue.toLowerCase());
        });
    });

    res.json(GROCERIES_RES);
});

app.get("/categories", (req, res, next) => {
    var CATEGORIES = [...new Set(GROCERIES.map((g) => g.category))];

    res.json(CATEGORIES);
});
