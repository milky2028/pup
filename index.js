const puppeteer = require('puppeteer');

const pages = [
    '/'
];

const ssr = async (url) => {
    try {
        const start = Date.now();
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://example.com${url}`, { waitUntil: 'networkidle0' });
        const html = await page.content();
        await browser.close();
        const time = Date.now() - start;
        return { html, time };
    } catch (e) {
        throw e;
    }
};

pages.forEach((pageURL) => ssr(pageURL));