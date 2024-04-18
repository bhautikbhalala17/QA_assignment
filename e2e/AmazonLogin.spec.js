const {test, expect} =require('@playwright/test');
// import {test,expect} from '@playwright/test'

test('SignIn Button',async ({page})=>{

    await page.goto('https://www.amazon.in/');

    // click on signIn button
    await page.locator('id=nav-link-accountList').click()
    // await page.click('id=nav-link-accountList')

    // Fill the sign In form
    await page.locator('#ap_email').fill("bsbhalala17@gmail.com")
    await page.waitForTimeout(2000);
    await page.click("//*[@id='continue']")

    await page.waitForTimeout(3000);

    await page.locator('#ap_password').fill("Bhautik@1712")
    await page.click("//*[@id='signInSubmit']")

    await page.waitForTimeout(5000);


    // const pageTitle=page.title()
    // console.log('Page Title is:', pageTitle);

    // await expect(page).toHaveTitle('Amazon.com. Spend less. Smile more.');
    // await expect(page).toHaveURL('https://www.amazon.in/');
    await page.close();

})