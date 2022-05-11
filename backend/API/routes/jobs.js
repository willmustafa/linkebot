const express = require('express');
const jobOffer = require('../models/JobOfferModel');
const router = express.Router();

router.get('/', (req, res) => {
    jobOffer.aggregate([
        {$group: { _id: "$date", qtd: { $sum: 1 } }},
        {$sort: {_id: -1}}
    ])
    .limit(1)
    .then((data)=> res.json(data))
})

router.get('/by-state', (req, res) => {
    jobOffer.aggregate([
        {$match: {state: {$nin: ["Brasil", null]}}},
        {
            $group: {
                _id: {
                    date: "$date",
                    state: "$state"
                },
                qtd: {$count: {}}
            }
        },
        {$group: {_id: "$_id.state", qtd: {$push: "$qtd"}}},
        {$sort: {qtd: -1}}
    ])
    .limit(10)
    .then((data)=> res.json(data))
})

router.get('/by-level', (req, res) => {
    jobOffer.aggregate([
        {$match: {level: {$nin: ["N/A", null]}}},
        {$project: { _id: 0, level: 1 } },
        {$unwind: "$level" },
        {$group: { _id: "$level", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
      ]).then((data) => res.json(data))
})

router.get('/workplace', (req, res) => {
    jobOffer.aggregate([
        {$match: {workPlace: {$nin: ["N/A", null]}}},
        {$group: {_id: "$workPlace", qtd: {$sum: 1}}},
        {$sort: {qtd: -1}}
    ]).then((data)=> res.json(data))
})

router.get('/by-company', (req, res) => {
    jobOffer.aggregate([
        {$match: {company: {$nin: ["", "GeekHunter", "Confidencial", "ProgramaThor", "Caderno Nacional", "BNE - Banco Nacional de Empregos", null]}}},
        {$group: {_id: "$company", qtd: {$sum: 1}}},
        {$sort: {qtd: -1}}
    ])
    .limit(10)
    .then((data)=> res.json(data))
})

router.get('/reset-state', (req, res) => {
    const wordFinder = require('../scrapper/utils/wordFinder')
    jobOffer.find({},{fullLocation: 1, jobId: 1, _id: 0})
    .then(data => data.map(el => ({
        jobId: el.jobId,
        state: wordFinder.findState(el.fullLocation)
    })))
    .then(async data => await data.forEach(async el => await jobOffer.updateOne({jobId: el.jobId}, {$set: {state: el.state}})))
    .then(data => res.json(data))
})

router.get('/reset-level', (req, res) => {
    const wordFinder = require('../scrapper/utils/wordFinder')
    jobOffer.find({},{title: 1, jobId: 1, _id: 0})
    .then(data => data.map(el => ({
        jobId: el.jobId,
        level: wordFinder.nivelConhecimento(el.title)
    })))
    .then(async data => await data.forEach(async el => await jobOffer.updateOne({jobId: el.jobId}, {$set: {level: el.level}})))
    .then(data => res.json(data))
})

module.exports = router