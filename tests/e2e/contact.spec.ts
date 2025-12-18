import { test, expect } from './ci-fixtures'; // relative path

test('contact form submits successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  // Scroll to contact section
  await page.locator('#contact').scrollIntoViewIfNeeded();

  // Fill form
  await page.fill('[placeholder="Name"]', 'Test User');
  await page.fill('[placeholder="Email"]', 'test@example.com');
  await page.fill('[placeholder="Message"]', 'Test message');

  // Submit form and wait for the POST /api/contact response in parallel
  await Promise.all([
    page.waitForResponse(response => response.url().includes('/api/contact') && response.status() === 200, { timeout: 10000 }),
    page.click('button[type="submit"]'),
  ]);

  // Then assert the success UI appears
  const success = page.locator('p[aria-live="polite"]');
  await expect(success).toBeVisible({ timeout: 5000 });
  await expect(success).toHaveText('Message sent!');
});