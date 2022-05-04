const {
    LinkedinScraper,
    relevanceFilter,
    timeFilter,
    typeFilter,
    experienceLevelFilter,
    events,
} = require("linkedin-jobs-scraper");
const jobOffer = require('../models/JobOfferModel');
const framework = require('../models/FrameworkModel');
const frameworkByJob = require('../models/FrameworkByJobModel');
let frameworkList = '';

(async () => {
    framework.find({}, (error, data) => {
        if (error) {
            console.error(error)
        } else {
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
            linkedinLink: data.link,
            jobId: Number.parseInt(data.jobId),
            state: findState(data.place),
            workPlace: regimeTrabalho(data.place),
            level: nivelConhecimento(data.title)
        }

        console.log(`Inserindo no banco: ${res.title}`)
        try {
            const upsert = await jobOffer.updateOne({
                    jobId: res.jobId
                },
                res, {
                    upsert: true
                })
            
                if(upsert.upsertedCount){
                    await findFramework(res.text, res.jobId)
                }
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

    // Custom function executed on browser side to extract job description [optional]
    const descriptionFn = () => document.querySelector(".description__text")
        .innerText
        .replace(/[\s\n\r]+/g, " ")
        .trim();

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

async function findFramework(word, jobId) {
    let keywords = []
    for (let i = 0; i < frameworkList.length; i++) {

        const name = `\\b${escapeRegex(frameworkList[i].name)}(?!\\w)`
        const nameRegex = new RegExp(name, "i")

        if (nameRegex.test(word)) {
            keywords.push({
                framework: frameworkList[i].name,
                variations: '',
                jobId
            })
        }

        let secundarios = frameworkList[i].variations.filter(el => {
            if (el !== "") {
                const variation = `\\b${escapeRegex(el)}(?!\\w)`
                const variationRegex = new RegExp(variation, "i")

                return variationRegex.test(word)
            }
        })

        if (secundarios.length > 0) {
            secundarios.forEach(el => {
                keywords.push({
                    framework: frameworkList[i].name,
                    variations: el,
                    jobId
                })
            });
        }
    }

    if (keywords.length > 0) {
        try {
            await frameworkByJob.insertMany(keywords)
        } catch (error) {
            console.log(error)
        }
    }
}

function findState(string) {
    const word = wordsInArray([
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Espirito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins",
        "Distrito Federal"
    ], string)

    return word == string ? string : word[0]
}

function regimeTrabalho(string) {
    const words = wordsInArray([
        "Remoto",
        "Híbrido",
        "Presencial"
    ], string)

    return words == string ? "Presencial" : words[0]
}

function nivelConhecimento(string) {
    const words = wordsInArray([
        "Sênior",
        "Pleno",
        "Junior",
        "Pl",
        "Jr",
        "Sn",
        "Júnior",
        "Senior"
    ], string)

    return words == string ? ["N/A"] : words
}

function wordsInArray(array, string){
    let filteredArray = array.filter(el => {
        const variation = `\\b${escapeRegex(el)}(?!\\w)`
        const variationRegex = new RegExp(variation, "i")

        return variationRegex.test(string)
    })

    if (filteredArray.length > 0) {
        return filteredArray
    } else {
        return string
    }
}

function escapeRegex(string) {
    return string.replaceAll('+', '\\+');
}

module.exports = {
    runScrapper,
    findFramework
}