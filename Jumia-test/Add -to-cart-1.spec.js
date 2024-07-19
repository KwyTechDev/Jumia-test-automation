import { test, expect } from '@playwright/test';

test('Testing Add to Cart button from product detail page', async ({ page }) => {
  await page.goto('https://www.jumia.com.gh/');
  await page.getByRole('button', { name: 'newsletter_popup_close-cta' }).click();
  await page.getByRole('link', { name: 'Appliances Appliances' }).click();
  await page.goto('https://www.jumia.com.gh/asano-1.5-hp-as-a15-split-air-conditioner-white-140566679.html');
  await page.locator('#add-to-cart').getByRole('button', { name: 'Add to cart' }).click();
});