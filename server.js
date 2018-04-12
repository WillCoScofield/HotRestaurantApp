//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express setup
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//reservations:
var reservations = [{
    name: "John Doe",
    email: "jd@mail.com",
    phoneNum: "111-111-1111",
    uID: "123456",
}]

var waitlist = [{
    name: "Jane Doe",
    email: "jd@mail.com",
    phoneNum: "111-222-2222",
    uID: "123456",
}]

//routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reserves.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});


//Server started and listening
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});