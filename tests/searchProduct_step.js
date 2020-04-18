/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, screenshot, text, focus, textBox, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';


beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

 

step("Goto Flipkart Login Page", async () => {
    await goto('https://flipkart.com');
      
});

step("Login with Valid <email> and <password>", async (email, password) => {
  // expect (await(button('Login').exists())).to.be.true;
 //  click(button('Login'));
   await focus(textBox(toRightOf('Login')))
   await write(email);
   await focus(textBox(toRightOf('Recommendations')))
   await write(password)
   await press('Enter');

});
step("Home Page contains <user>", async (user) => {
    assert.ok(await text(user).exists());

});

