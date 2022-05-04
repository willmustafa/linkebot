const express = require('express');
const router = express.Router();
const Survey = require('../models/SurveyModel');

router.get('/', (req, res) => {
    Survey.find({}).limit(20).exec((error, data) => {
        if(error){
            console.error(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = router