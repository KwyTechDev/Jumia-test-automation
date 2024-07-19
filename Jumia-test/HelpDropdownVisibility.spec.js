import { test, expect } from '@playwright/test';

test('Checking for the Visibility of the icons in the help dropdown', async ({ page }) => {
  test.setTimeout(150_000);
  await page.goto('https://www.jumia.com.gh/');
  await page.getByRole('button', { name: 'newsletter_popup_close-cta' }).click();
  await page.locator('label').filter({ hasText: 'Help' }).getByRole('img').nth(1).click();
  await expect(page.locator('#dpdw-help-box').getByRole('link', { name: 'Help Center' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Place an Order' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Pay for Your Order' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Track Your Order', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Cancel an Order' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Create a Return' })).toBeVisible();
  await page.locator('label').filter({ hasText: 'Help' }).getByRole('img').nth(1).click();
  

});