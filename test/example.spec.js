import { test, expect } from '@playwright/test'; 
test('Verificar título de Playwright', async ({ page }) => { 
await page.goto('https://playwright.dev/'); 
await expect(page).toHaveTitle(/Playwright/); 
}); 