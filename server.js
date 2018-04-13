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

var waitList = [];


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
    console.log(req.body)
    return res.json(reservations);
});

app.post("/api/tables", function (req, res) {
    var newReservation = req.body;

    console.log(newReservation);

    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    // console.log(newReservation);

    
    if (reservations.length <= 5) {

        reservations.push(newReservation);
        res.json(newReservation);
        

    }
    else {

        waitList.push(newReservation);
        res.json(newReservation);
    }



});

//Server started and listening
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});