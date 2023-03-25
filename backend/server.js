const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser');
const port = 4000;

let app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config();

app.get("/test", (req, res) => {
    res.send({ status: "OK" })
})

app.listen(port, function () {
    console.log("Backend API listening on port " + port)
})