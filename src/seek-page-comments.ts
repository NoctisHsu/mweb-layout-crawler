
const cheerio = require('cheerio');

const getMatchedItems = (rawString,seekTargets) => {
    const $ = cheerio.load(rawString, { decodeEntities: false });
    const matchedArray:any[] = [];
    $('body').contents().map((i, el) => {
        if (el.type === 'comment' && seekTargets.includes(el.data)) {
            matchedArray.push(el.data);
        }
    })
    return matchedArray;
};

const seekPageComments = async (page,config) => {
    const pageComments:any[] = [];
    const { siteBaseUrl, seekTargets } = config;
    console.log('seek Page Comment starting...');
    await Promise.all(config.pages.map(async (item) => {
        const { name, path } = item;
        const pageUrl = siteBaseUrl + path;
        await page.goto(pageUrl, { waitUntil: 'networkidle0' });
        console.log(`[${pageUrl}] load page content start...`);
        let bodyHTML = await page.evaluate(() => document.body.innerHTML);
        const matchedArray = getMatchedItems(bodyHTML,seekTargets);
        pageComments.push([{ name, path, matchedArray }]);
        console.log(`[${pageUrl}] load page content success`);

    }));
    console.log('seek Page Comment completed');
    return pageComments;
};
export default seekPageComments;