const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');   
const port = 4000;

let app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config();

app.use(fileUpload());
app.use(express.static('public'));

app.get("/test", (req, res) => {
    res.send({ status: "OK" })
})

app.use("/game", require('./routes/game'));

app.listen(port, function () {
    console.log("Backend API listening on port " + port)
})