require('dotenv').config();
const jobScrapper = require('./scrapper/jobScrapper');
const mongoose = require('mongoose');

(async () => {
    const mongoUrl = process.env.mongo ?? "mongodb://localhost:27017"
    await mongoose.connect(mongoUrl)

    await jobScrapper.runScrapper()

    await mongoose.disconnect()
})()
