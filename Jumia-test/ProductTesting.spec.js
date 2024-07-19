import { test, expect } from '@playwright/test';

test('ProductTesting', async ({ page }) => {
  await page.goto('https://www.jumia.com.gh/');
  await page.getByRole('button', { name: 'newsletter_popup_close-cta' }).click();
  await page.goto('https://www.jumia.com.gh/db313-2-in-1-blender-blue-delron-mpg1971483.html');
});