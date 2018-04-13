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
    userName: "John Doe",
    userPhone: "jd@mail.com",
    userEmail: "111-111-1111",
    userID: "123456",
}]

var waitlist = [{
    userName: "Jane Doe",
    userPhone: "111-222-2222",
    userEmail: "jd@mail.com",
    userID: "123456",
}]

//routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

app.post("/api/tables", function (req, res) {
    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});

//Server started and listening
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});