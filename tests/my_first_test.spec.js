const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.amazon.com/');

  // Click on the "Hello, Sign in" button
  await page.click('#nav-link-accountList');

  // Wait for the sign-in page to load
  await page.waitForSelector('#ap_email');

  // Fill in the email field and click "Continue"
  await page.fill('#ap_email', 'your_email@example.com');
  await page.click('#continue');

  // Wait for the password field to appear
  await page.waitForSelector('#ap_password');

  // Fill in the password field and click "Sign-In"
  await page.fill('#ap_password', 'your_password');
  await page.click('#signInSubmit');

  // Wait for login to complete
  await page.waitForNavigation();

  console.log('Logged in successfully!');

  // You can add additional steps or assertions here

  await browser.close();
})();
