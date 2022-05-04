const { 
    LinkedinScraper,
    relevanceFilter,
    timeFilter,
    typeFilter,
    experienceLevelFilter,
    events,
} = require("linkedin-jobs-scraper");
const jobOffer = require('../models/jobOffer');
const framework = require('../models/framework');
const frameworkByJob = require('../models/FrameworkByJob');
let frameworkList = '';

(async ()=>{
    framework.find({}, (error, data) => {
        if(error){
            console.error(error)
        }else{
            frameworkList = data
        }
    })
})()

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
            localizacao: data.place,
            linkedinLink: data.link,
            jobId: Number.parseInt(data.jobId)
        }

        console.log(`Inserindo no banco: ${res.title}`)
        try {
            await jobOffer.updateOne({text: res.text, jobId: res.jobId},
            res, {
             upsert: true   
            })
            
        } catch (error) {
            
        }

        try {
            await findFramework(res.text, res.jobId)
        } catch (error) {
            
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
    scraper.on(events.puppeteer.browser.targetcreated, () => {
    });
    scraper.on(events.puppeteer.browser.targetchanged, () => {
    });
    scraper.on(events.puppeteer.browser.targetdestroyed, () => {
    });
    scraper.on(events.puppeteer.browser.disconnected, () => {
    });

    // Custom function executed on browser side to extract job description [optional]
    const descriptionFn = () => document.querySelector(".description__text")
        .innerText
        .replace(/[\s\n\r]+/g, " ")
        .trim();

    // Run queries concurrently    
    await Promise.all([
        // Run queries serially
        scraper.run([
            {
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
            limit: 200
        }),
    ]);

    // Close browser
    await scraper.close();
}

async function findFramework(word, jobId){
    let keywords = []
    for (let i = 0; i < frameworkList.length; i++) {

        const name = `\\b${escapeRegex(frameworkList[i].name)}(?!\\w)`
        const nameRegex = new RegExp(name, "i")

        if(nameRegex.test(word)){
            keywords.push({
                framework: frameworkList[i].name,
                variations: '',
                jobId
            })
        }

        let secundarios = frameworkList[i].variations.filter(el => {
            if(el !== ""){
                const variation = `\\b${escapeRegex(el)}(?!\\w)`
                const variationRegex = new RegExp(variation, "i")

                return variationRegex.test(word)
            }
        })

        if(secundarios.length>0){
            secundarios.forEach(el => {
                keywords.push({
                framework: frameworkList[i].name,
                variations: el,
                jobId
            })});
        }
    }

    if(keywords.length > 0){
        await frameworkByJob.insertMany(keywords)
    }
}

function escapeRegex(string) {
    return string.replaceAll('+', '\\+');
}

module.exports = {runScrapper, findFramework}