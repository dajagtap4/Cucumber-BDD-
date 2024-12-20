"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
let browser;
let page;
(0, cucumber_1.Given)('the user navigates to the login page', async function () {
    browser = await test_1.chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://www.orangehrm.com/");
});
