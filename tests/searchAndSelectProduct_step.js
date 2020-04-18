/* globals gauge*/
"use strict";
const { switchTo,write, closeBrowser, $, press, waitFor, text, focus, textBox, clear,toLeftOf, click } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
var path = require('path');

// beforeSuite(async () => {
//     await openBrowser({ headless: headless })
// });

afterSuite(async () => {
    await closeBrowser();
});

// gauge.customScreenshotWriter = async function () {
//     const screenshotFilePath = path.join(process.env['C:/Users/Keerthivasan.RC/Documents/Taiko-Gauge/reports/html-report/screenshots'], `screenshot-${process.hrtime.bigint()}.png`);
//     await screenshot({ path: screenshotFilePath });
//     return path.basename(screenshotFilePath);

// };
step("Search for <product>", async (product) => {
    //await(focus(textBox(toRightOf('Plus'))));
    await(focus(textBox({'name':'q'})));
    await(write(product));
    await(press('Enter'));
});

step("Select the <productSpec>", async (productSpec) => {
    waitFor(async () => !(await $("Gaming").exists()))
    await(text(productSpec),{ exactMatch: true }).exists;
    await(click(text("Sony PlayStation 4 (PS4) 1 TB with FIFA 19")));
    await(switchTo('Sony PlayStation 4 (PS4) 1 TB with FIFA 19 Price in India - Buy Sony PlayStation 4 (PS4) 1 TB with FIFA 19 Jet Black Online - Sony : Flipkart.com'))
    await(textBox(toLeftOf('Check')));
    await(clear(textBox(toLeftOf('Check'))));
    await(write("560010"));
    await(click('Check'));
});




