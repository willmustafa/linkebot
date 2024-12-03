import dotenv from 'dotenv';
import puppeteer from 'puppeteer-extra';
import {Browser, HTTPRequest, Page} from "puppeteer";
import {sleep} from "../scrapper/utils/Sleep.util";

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

class LinkedinScrapper {
    private browser: Browser | null = null;
    private page: Page | null = null;

    constructor() {
        dotenv.config();
    }

    private async initializeBrowser(): Promise<void> {
        if (!this.browser) {
            this.browser = await puppeteer.launch({
                headless: false,
                defaultViewport: null
            });
        }
    }

    private async login(): Promise<void> {
        if (!this.page) return;

        const linkedinCookie = process.env.LINKEDIN_COOKIE;
        if (!linkedinCookie) {
            throw new Error('LinkedIn cookie not found in .env');
        }

        await this.page.setCookie({...JSON.parse(linkedinCookie), domain: ".www.linkedin.com", path: "/"});
        await this.page.goto('https://www.linkedin.com/jobs');
    }

    public async run(jobTitle: string, location: string = 'Brasil'): Promise<Array<object>> {
        try {
            await this.initializeBrowser();

            if (!this.browser) {
                throw new Error('Browser initialization failed');
            }

            this.page = await this.browser.newPage();

            await this.page.setRequestInterception(true);

            const onRequest = async (request: HTTPRequest) => {
                const url = new URL(request.url());
                const domain = url.hostname.split(".").slice(-2).join(".").toLowerCase();

                // Block tracking and other stuff not useful
                const toBlock = [
                    'li/track',
                    'realtime.www.linkedin.com/realtime',
                    'platform.linkedin.com/litms',
                    'linkedin.com/sensorCollect',
                    'linkedin.com/pixel/tracking',
                ];

                if (toBlock.some(e => url.pathname.includes(e))) {
                    return request.abort();
                }

                if (!["linkedin.com", "licdn.com"].includes(domain)) {
                    return request.abort();
                }

                await request.continue();
            }

            this.page.on("request", onRequest);

            await this.login();

            await this.page.goto(`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(jobTitle)}&location=${encodeURIComponent(location)}`);

            let hasPagination = true

            while (hasPagination) {
                await this.page.waitForSelector('#main ul');

                const jobs = await this.page.$$('.scaffold-layout__list-item')
                const foundJobs = []

                for (const job of jobs) {
                    await job.click();

                    await sleep(Math.floor(Math.random() * (400 - 200 + 1)) + 200)

                    const title = await this.getTextFromPage('.job-details-jobs-unified-top-card__job-title')
                    const description = await this.getTextFromPage('.jobs-description__content.jobs-description-content')
                    const company = await this.getTextFromPage('.job-details-jobs-unified-top-card__company-name')
                    const whereHow = await this.getTextFromPage('.job-details-jobs-unified-top-card__job-insight.job-details-jobs-unified-top-card__job-insight--highlight')
                    const matched = await this.getTextFromPage('.job-details-jobs-unified-top-card__job-insight-text-button')

                    foundJobs.push([{title, description, company, whereHow, matched}])
                }

                const paginationButtons = await this.page.$$('.artdeco-pagination button');

                const currentIndex = await this.page.evaluate((buttons) => {
                    return buttons.findIndex(async button => await button.evaluate(async body => await body.getAttribute(('aria-current'))) === 'true');
                }, paginationButtons);

                await paginationButtons[currentIndex + 1].click();
            }
        } catch (error) {
            console.error('Scraping error:', error);
            return [];
        } finally {
            if (this.browser) {
                await this.browser.close();
            }
        }
    }

    private async getTextFromPage(selector: string) {
        let res = ''
        try{
            res = await this.page.$eval(selector, res => res?.textContent?.trim())
        } catch(err) {

        }
        return res
    }
}

export default LinkedinScrapper;