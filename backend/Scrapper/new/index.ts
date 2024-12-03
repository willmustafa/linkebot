import LinkedinScrapper from "./LinkedinScrapper";

(async () => {
    const scrapper = new LinkedinScrapper();
    const jobs = await scrapper.run('Software Engineer');
    console.log(jobs);

})()
