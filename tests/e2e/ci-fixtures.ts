// tests/e2e/ci-fixtures.ts
import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    // Mock contact API to return deterministic success response
    // This ensures E2E tests don't depend on external email service
    await page.route('**/api/contact', route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Message sent!' }),
      })
    );
    await use(page);
  },
});

export { expect };