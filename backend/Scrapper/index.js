require('dotenv').config();
const jobScrapper = require('./scrapper/jobScrapper');
const mongoose = require('mongoose');
const mongoUrl = process.env.mongo || "mongodb://localhost:27017"

(async () => {
    mongoose.connect(mongoUrl)

    await jobScrapper.runScrapper()
})()