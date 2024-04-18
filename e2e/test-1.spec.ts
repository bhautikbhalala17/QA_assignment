import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=amazon&oq=amazon&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI4OTBqMGoxqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Shop online at Amazon India' }).click();
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Email or mobile phone number').click();
  await page.getByLabel('Email or mobile phone number').fill('bsbhalala17@gmail.com');
  await page.getByLabel('Continue').click();
  await page.getByLabel('Password').fill('Bhautik@1712');

});