const {
    LinkedinScraper,
    relevanceFilter,
    timeFilter,
    typeFilter,
    experienceLevelFilter,
    events,
} = require("linkedin-jobs-scraper");
const jobOffer = require('../models/JobOfferModel');
const wordFinder = require('./utils/wordFinder');

async function runScrapper() {
    // Each scraper instance is associated with one browser.
    // Concurrent queries will run on different pages within the same browser instance.
    const scraper = new LinkedinScraper({
        headless: true,
        slowMo: 200,
        args: [
            "--lang=pt-BR",
        ],
    });

    console.log('Realizando scrapper')

    // Add listeners for scraper events
    scraper.on(events.scraper.data, async (data) => {

        let res = {
            company: data.company,
            title: data.title,
            text: data.description,
            linkedinLink: data.link,
            fullLocation: data.place,
            state: wordFinder.findState(data.place),
            workPlace: wordFinder.regimeTrabalho(data.place),
            level: wordFinder.nivelConhecimento(data.title),
            jobId: Number.parseInt(data.jobId),
            languages: wordFinder.encontrarFrameworks(data.description)
        }

        console.log(`Inserindo no banco: ${res.title}`)
        try {
            const upsert = await jobOffer.updateOne({
                    jobId: res.jobId
                },
                res, {
                    upsert: true
                })
        } catch (error) {
            console.error(error)
        }

    });

    scraper.on(events.scraper.error, (err) => {
        console.error(err);
    });

    scraper.on(events.scraper.end, () => {
        console.log('All done!');
        return 201;
    });

    // Add listeners for puppeteer browser events
    scraper.on(events.puppeteer.browser.targetcreated, () => {});
    scraper.on(events.puppeteer.browser.targetchanged, () => {});
    scraper.on(events.puppeteer.browser.targetdestroyed, () => {});
    scraper.on(events.puppeteer.browser.disconnected, () => {});

    // Run queries concurrently    
    await Promise.all([
        // Run queries serially
        scraper.run([{
                query: "Programador"
            },
            {
                query: "Desenvolvedor"
            },
            {
                query: "Engenharia de software"
            },
            {
                query: "Ciência de dados"
            }
        ], { // Global options, will be merged individually with each query options
            locations: ["Brasil"],
            optimize: true,
            limit: 1000
        }),
    ]);

    // Close browser
    await scraper.close();
}

module.exports = {
    runScrapper
}