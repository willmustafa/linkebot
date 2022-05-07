const express = require('express');
const router = express.Router();
const jobOffer = require('../models/JobOfferModel');

router.get('/', (req, res) => {
    jobOffer.find({}).then(data => res.json(data))
})

router.get('/programming-languages', (req, res) => {
    jobOffer.aggregate([
        {$match: {$and: [
            {"languages": {$ne: {}}}
        ]}},
        {$project: { _id: 0, "languages.ProgrammingLanguages": 1 } },
        {$unwind: "$languages.ProgrammingLanguages" },
        {$group: { _id: "$languages.ProgrammingLanguages", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/databases', (req, res) => {
    jobOffer.aggregate([
        {$match: {$and: [
            {"languages": {$ne: {}}}
        ]}},
        {$project: { _id: 0, "languages.Databases": 1 } },
        {$unwind: "$languages.Databases" },
        {$group: { _id: "$languages.Databases", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/cloud-platform', (req, res) => {
    jobOffer.aggregate([
        {$match: {$and: [
            {"languages": {$ne: {}}}
        ]}},
        {$project: { _id: 0, "languages.CloudPlatform": 1 } },
        {$unwind: "$languages.CloudPlatform" },
        {$group: { _id: "$languages.CloudPlatform", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/other-frameworks', (req, res) => {
    jobOffer.aggregate([
        {$match: {$and: [
            {"languages": {$ne: {}}}
        ]}},
        {$project: { _id: 0, "languages.OtherFrameworks": 1 } },
        {$unwind: "$languages.OtherFrameworks" },
        {$group: { _id: "$languages.OtherFrameworks", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/soft-skills', (req, res) => {
    jobOffer.aggregate([
        {$match: {$and: [
            {"languages": {$ne: {}}}
        ]}},
        {$project: { _id: 0, "languages.SoftSkills": 1 } },
        {$unwind: "$languages.SoftSkills" },
        {$group: { _id: "$languages.SoftSkills", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/tools', (req, res) => {
    jobOffer.aggregate([
        {$match: {$and: [
            {"languages": {$ne: {}}}
        ]}},
        {$project: { _id: 0, "languages.Tools": 1 } },
        {$unwind: "$languages.Tools" },
        {$group: { _id: "$languages.Tools", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/web-frameworks', (req, res) => {
    jobOffer.aggregate([
        {$match: {$and: [
            {"languages": {$ne: {}}}
        ]}},
        {$project: { _id: 0, "languages.WebFrameworks": 1 } },
        {$unwind: "$languages.WebFrameworks" },
        {$group: { _id: "$languages.WebFrameworks", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

module.exports = router