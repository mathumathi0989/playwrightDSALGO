// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://dsportalapp.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Numpy Ninja/);
});

