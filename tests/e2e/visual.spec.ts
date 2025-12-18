import { test, expect } from '@playwright/test';

test('visual hero and work sections', async ({ page }) => {
  await page.goto('/');
  
  // Disable animations for stable screenshots
  await page.addInitScript(() => {
    document.documentElement.style.setProperty('--framer-motion-disable-animation', '1', 'important');
    const style = document.createElement('style');
    style.textContent = `
      * {
        animation: none !important;
        transition: none !important;
      }
    `;
    document.head.appendChild(style);
  });

  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  // Increase tolerance for cross-browser rendering differences (allow ~1-2% pixel difference)
  await expect(page.locator('#home')).toHaveScreenshot('hero.png', { maxDiffPixels: 5000 });
  
  // Scroll to work section
  await page.locator('#work').scrollIntoViewIfNeeded();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  await expect(page.locator('#work')).toHaveScreenshot('work.png', { maxDiffPixels: 5000 });
});