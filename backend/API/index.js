require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log("App is running on port " + port);
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

// MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get('/', (req, res) => {
    res.json({message: 'API linkebot!'})
})

app.use('/framework', require('./routes/framework'))
app.use('/jobs', require('./routes/jobs'))
app.use('/survey', require('./routes/survey'))

const mongoUrl = process.env.mongo || "mongodb://localhost:27017"
mongoose.connect(mongoUrl)