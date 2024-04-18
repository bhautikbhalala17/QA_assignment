import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Email or mobile phone number').click();
  await page.getByLabel('Email or mobile phone number').fill('bsbhalala17@gmail.com');
  await page.getByLabel('Continue').click();
  await page.getByLabel('Password').fill('Bhautik@1712');
  await page.getByLabel('Sign in').click();
});