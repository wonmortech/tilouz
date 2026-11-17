// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0

// Smoke tests for the concept demo (demo/), built by tools/build-demo.mjs and served under the production CSP
// at /demo/tilo/. site/ itself has no build step and is checked by tools/check-site.mjs.
//   npm run test:demo
import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.DEMO_PORT) || 4177;
const executablePath = process.env.PW_CHROMIUM_PATH || undefined;

export default defineConfig({
  testDir: 'tests/demo',
  timeout: 60_000,
  forbidOnly: !!process.env.CI,
  reporter: 'list',
  use: { baseURL: `http://127.0.0.1:${PORT}/demo/tilo/` },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], launchOptions: executablePath ? { executablePath } : {} } }],
  webServer: {
    command: 'node tools/build-demo.mjs && node tools/serve-demo.mjs',
    env: { PORT: String(PORT) },
    url: `http://127.0.0.1:${PORT}/demo/tilo/`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
