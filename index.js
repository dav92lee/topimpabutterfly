var csv = require("csv-parser");
var fs = require("fs");
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

app.listen(3000, () => {
    console.log("Server running on port 3000");
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
