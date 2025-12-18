import { test, expect } from '@playwright/test';

test('hero section renders with title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Wait for the Hero section to be visible
  const heroTitle = page.locator('h1');
  await expect(heroTitle).toBeVisible();
  
  // Verify the title contains "Moss Victor"
  await expect(heroTitle).toContainText('Moss Victor');
});

test('scroll indicator is visible in hero', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Wait for scroll indicator (the arrow SVG)
  const scrollIndicator = page.locator('svg').first();
  await expect(scrollIndicator).toBeVisible();
});