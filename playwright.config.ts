import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import dotenv from "dotenv";

dotenv.config();

const testDir = defineBddConfig({
  paths: ["tests/UI_Test/Feature/**/*.feature"],
  require: ["tests/UI_Test/steps/**/*.ts", "tests/UI_Test/fixture/**/*.ts"],
  outputDir: ".features-gen/ui",
});

export default defineConfig({
  testDir,
  timeout: 30 * 1000,
  webServer: {
    command: "npm run start:mock",
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 30 * 1000,
  },
  expect: {
    timeout: 10 * 1000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { open: "never" }], ["list"]],
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,
  },
  projects: [
    {
      name: "ui-bdd-chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
  outputDir: "test-results",
});
