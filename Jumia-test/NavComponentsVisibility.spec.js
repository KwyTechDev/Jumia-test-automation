import { test, expect } from '@playwright/test';

test('Checking for the presence of category icons in Navbar', async ({ page }) => {
  await page.goto('https://www.jumia.com.gh/');
  await page.getByRole('button', { name: 'newsletter_popup_close-cta' }).click();
  await expect(page.getByRole('menuitem', { name: 'Supermarket' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Phones & Tablets' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Health & Beauty' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Home & Office' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Appliances' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Electronics' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Computing' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Sporting Goods' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Baby Products' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Other categories' })).toBeVisible();
});