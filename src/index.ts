import puppeteer from 'puppeteer';
import autoLogin from './auto-login';
import seekPageComments from './seek-page-comments';
import generateResult from './generate-result';

const main = async (config, loginUserName, loginPwd) => {
    console.log('crawler is launching...')
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 720 });
    await page.goto(config.siteBaseUrl, { waitUntil: 'networkidle0' }); // wait until page load
    await autoLogin(page, loginUserName, loginPwd);
    const pageComments = await seekPageComments(page, config);
    console.dir(pageComments, { depth: null, colors: true })
    browser.close();
    generateResult(pageComments)
}

export default main;
