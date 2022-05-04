require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

// MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.json({message: 'API linkebot!'})
})

app.use('/framework', require('./routes/framework'))
app.use('/jobs', require('./routes/jobs'))

mongoose.connect(
    process.env.mongo
)
.then(() => {
    app.listen(3000)
})
.catch((err) => {
    console.log("Deu ruim")
    console.log(err)
})