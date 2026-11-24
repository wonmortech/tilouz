// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0

// Smoke tests for the test app (site/app/), served from site/ with the production headers of deploy/Caddyfile.
// The camera is Chromium's fake device, so the video message flow runs without hardware.
//   npm run test:app
import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.APP_PORT) || 4178;
const executablePath = process.env.PW_CHROMIUM_PATH || undefined;

export default defineConfig({
  testDir: 'tests/app',
  timeout: 60_000,
  forbidOnly: !!process.env.CI,
  reporter: 'list',
  use: { baseURL: `http://127.0.0.1:${PORT}/app/` },
  projects: [
    {
      name: 'phone',
      use: {
        ...devices['Pixel 7'],
        permissions: ['camera'],
        launchOptions: {
          ...(executablePath ? { executablePath } : {}),
          args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],
        },
      },
    },
  ],
  webServer: {
    command: 'node tools/serve-site.mjs',
    env: { PORT: String(PORT) },
    url: `http://127.0.0.1:${PORT}/app/`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
