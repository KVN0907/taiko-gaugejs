/* globals gauge*/
"use strict";
const { dropDown,checkBox, text,waitFor, $,hover,click,toLeftOf,toRightOf,link,switchTo, title,scrollTo ,write, textBox} = require('taiko');

step("Navigate to the <category> select <subcategory>", async (category,subcategory) => {
    await hover(category);
    waitFor(async () => !(await $("Laptops").exists()))
    await click(link("Gaming Laptops"))   
});

step("Validate the pageheader <pageHeader>", async (pageheader) => {
    await(text(pageheader),{ exactMatch: true }).exists;

});

step("Select the <minrate> and <maxrate>", async (min, max) => {
    await dropDown(toLeftOf('to')).select(min);
    await dropDown(toRightOf('to')).select(max);

});

step("Select the subfilter <type> and select the first product", async(type) => {
    await scrollTo(type)
    await checkBox(type).exists();
    await checkBox(type).check();
    waitFor (5000);
    await scrollTo('Sort By')
    await click($('div.col.col-7-12:nth-child(1)'));
});

