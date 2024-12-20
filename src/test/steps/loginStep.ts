import {Given, When, Then} from '@cucumber/cucumber'
import {chromium, Page, Browser} from '@playwright/test'

let browser:Browser;
let page:Page;

Given('the user navigates to the login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://bookcart.azurewebsites.net/login",{timeout:15000}); // Increase timeout to 10 seconds
});

// Given('User click on Login Link', async function () {
//   const loginLink = await page.locator('button.login-btn'); // Replace with a proper class or selector
//   await loginLink.click();
// });


Given('User enter Username as {string}', async (s: string) => {
  await page.locator('//*[@id="mat-input-0"]').fill("jagtapda")
})

Given('User enter Password as {string}', async (s: string) => {
  await page.locator('//*[@id="mat-input-1"]').fill("Deepak@1994")

})

Then('click on Login Button', async function () {
  await page.locator('xpath=/html/body/app-root/div/app-login/div/mat-card/mat-card-content/form/mat-card-actions/button/span[2]').click();

});







