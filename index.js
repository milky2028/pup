const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://example.com', { waitUntil: 'networkidle0' });
        const html = await page.content();
        await browser.close();
        console.log(html);
    } catch (e) {
        console.error(e);
    }
})();