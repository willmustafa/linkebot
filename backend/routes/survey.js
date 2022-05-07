const express = require('express');
const fs = require('fs');
const path = require('path')
const router = express.Router();
const Survey = require('../models/SurveyModel');
const Papa = require('papaparse');

router.get('/', (req, res) => {
    Survey.find({}).count()
    .then(async data => {
        if(data == 0){
            const csv = fs.readFileSync(path.join(__dirname, '../pre-data/survey_results_public.csv'), {encoding: 'utf-8'})
            
            try {
                const survey = Papa.parse(csv, {
                    header: true,
                    step: async function (results, parser){
                        await Survey.create(results.data)
                    }
                });
            } catch (error) {
                console.error(error)
            }
        }
        else{
            res.json(data)
        }
    })
})

module.exports = router