const express = require('express');
const fs = require('fs');
const path = require('path')
const router = express.Router();
const Survey = require('../models/SurveyModel');
const Papa = require('papaparse');


// https://drive.google.com/drive/folders/194vCkX_usaudUWp7tX36mselkB7fmYvV

router.get('/', (req, res) => {
    Survey.find({}).count()
    .then(data => {
        res.json(data)
    })
})

router.get('/LanguageHaveWorkedWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$LanguageHaveWorkedWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/LanguageWantToWorkWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$LanguageWantToWorkWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/DatabaseHaveWorkedWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$DatabaseHaveWorkedWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/DatabaseWantToWorkWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$DatabaseWantToWorkWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/PlatformHaveWorkedWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$PlatformHaveWorkedWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/PlatformWantToWorkWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$PlatformWantToWorkWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/WebframeHaveWorkedWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$WebframeHaveWorkedWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/WebframeWantToWorkWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$WebframeWantToWorkWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/MiscTechHaveWorkedWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$MiscTechHaveWorkedWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/MiscTechWantToWorkWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$MiscTechWantToWorkWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/ToolsTechHaveWorkedWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$ToolsTechHaveWorkedWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/ToolsTechWantToWorkWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$ToolsTechWantToWorkWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/NEWCollabToolsHaveWorkedWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$NEWCollabToolsHaveWorkedWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

router.get('/NEWCollabToolsWantToWorkWith', (req, res) => {
    Survey.aggregate([
        {$project: {_id: {$split: ["$NEWCollabToolsWantToWorkWith", ";"]}}},
        {$unwind: "$_id" },
        {$match: {"_id": {$nin: ["NA"]}}},
        {$group: { _id: "$_id", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
    ])
    .limit(10)
    .then(data => res.json(data))
})

module.exports = router