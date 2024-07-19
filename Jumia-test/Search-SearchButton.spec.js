import { test, expect } from '@playwright/test';

test('Checking the functionality of Search and Search button ', async ({ page }) => {
  test.setTimeout(150_000);
  await page.goto('https://www.jumia.com.gh/');
  await page.getByRole('button', { name: 'newsletter_popup_close-cta' }).click();
  await page.getByPlaceholder('Search products, brands and').click();
  await page.getByPlaceholder('Search products, brands and').fill('xbox');
  await page.getByRole('button', { name: 'Search' }).click();
});