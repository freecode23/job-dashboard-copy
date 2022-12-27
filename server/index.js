// base utility
require("dotenv").config();
const path = require('path');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// specify the static folders to be served since we are using parcel and 
// since there is only a single server
// app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '../dist')));

// console.log("path dist=", path.join(__dirname, '../dist'));

// Router
app.get('/help', function (req, res) {
    res.send("okkk")
});


const jobsRoute = require("./routes/jobs");
app.use("/api/jobs", jobsRoute);


const PORT = process.env.PORT || 5000
app.listen(PORT, function () {
    console.log(`Running on port ${PORT}`)
})
