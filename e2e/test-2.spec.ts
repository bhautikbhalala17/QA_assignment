import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Email or mobile phone number').click();
  await page.getByLabel('Email or mobile phone number').fill('your_amazon@gmail.com'); // Enter ypur amazon Email ID
  await page.getByLabel('Continue').click();
  await page.getByLabel('Password').fill('Pass@123') // Enter your amazon password
  await page.getByLabel('Sign in').click();
});