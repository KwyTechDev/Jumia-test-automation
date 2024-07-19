import { test, expect } from '@playwright/test';

test('Testing of Card components', async ({ page }) => {
  test.setTimeout(150_000);
  await page.goto('https://www.jumia.com.gh/');
  await page.getByRole('button', { name: 'newsletter_popup_close-cta' }).click();
  await page.locator('section').filter({ hasText: 'SmartphonesAppliancesHalf' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: 'SmartphonesAppliancesHalf' }).getByRole('button').first().click();
  await page.getByRole('link', { name: 'Smartphones Smartphones' }).click();
  await page.getByRole('link', { name: 'Jumia Ghana | Buy Electronics' }).click();
  await page.getByRole('link', { name: 'Appliances Appliances' }).click();
  await page.goto('https://www.jumia.com.gh/');
});