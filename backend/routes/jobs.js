const express = require('express');
const jobOffer = require('../models/jobOffer');
const router = express.Router();
const jobScrapper = require('../scrapper/jobScrapper');

router.get('/', (req, res) => {
    jobOffer.find({}, (error, data) => {
        if(error){
            console.error(error)
        }else{
            res.json(data)
        }
    })
})



router.post('/linkedin-scrapper', async (req, res) => {
    const {user, pass} = req.body

    if(user && pass){
        
        const status = await jobScrapper.runScrapper()
        res.status(201).json({message: 'Scrapper realizado com sucesso!'})
    }
})


module.exports = router