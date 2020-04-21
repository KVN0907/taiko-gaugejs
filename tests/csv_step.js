/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, textBox, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';


beforeSuite(async () => {
    await openBrowser();
});

afterSuite(async () => {
    await closeBrowser();
});

step("Goto Flipkart Login Page <url>", async (url) => {
    await goto(url);
      
});

step("Login with Valid <email> and <password> from csv", async (email, password) => {
   await focus(textBox(toRightOf('Login')))
   await write(email);
   await focus(textBox(toRightOf('Recommendations')))
   await write(password)
   await press('Enter');

});
step("Home Page contains <user> from csv", async (user) => {
    assert.ok(await text(user).exists());

});

