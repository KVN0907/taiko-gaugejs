/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, screenshot, text, focus, textBox, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
var path = require('path');

beforeSuite(async () => {
    await openBrowser({args:['--window-size=1366,768']})
});

// afterSuite(async () => {
//     await closeBrowser();
// });

// gauge.customScreenshotWriter = async function () {
//     const screenshotFilePath = path.join(process.env['C:/Users/Keerthivasan.RC/Documents/Taiko-Gauge/reports/html-report/screenshots'], `screenshot-${process.hrtime.bigint()}.png`);
//     await screenshot({ path: screenshotFilePath });
//     return path.basename(screenshotFilePath);

// };


step("Login with Valid <userid> and <password> and home Page should contain <user>", async (email, password,user) => {
  // expect (await(button('Login').exists())).to.be.true;
 //  click(button('Login'));
   await goto('https://flipkart.com');
   await focus(textBox(toRightOf('Login')))
   await write(email);
   await focus(textBox(toRightOf('Recommendations')))
   await write(password)
   await press('Enter');
   assert.ok(await text(user).exists());
});



