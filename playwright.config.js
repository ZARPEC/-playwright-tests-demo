import { defineConfig } from '@playwright/test'; 
export default defineConfig({ 
timeout: 30 * 1000, 
retries: 1,               
// Reintenta 1 vez si falla (reduce flaky tests) 
reporter: [ 
['list'],               
// Salida en consola 
['html', { outputFolder: 'playwright-report', open: 'never' }] 
], 
use: { 
baseURL: process.env.BASE_URL || 'https://playwright.dev', 
headless: true, 
screenshot: 'only-on-failure', 
video: 'retain-on-failure', 
trace: 'on-first-retry' 
}, 
// Ejecuta pruebas en paralelo en diferentes navegadores 
projects: [ 
{ name: 'Chromium', use: { browserName: 'chromium' } }, 
{ name: 'Firefox',  use: { browserName: 'firefox'  } }, 
{ name: 'WebKit',   use: { browserName: 'webkit'   } } 
] 
});