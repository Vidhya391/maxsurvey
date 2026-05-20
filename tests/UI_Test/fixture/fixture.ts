import { test as base } from "playwright-bdd";
import * as Pages from "../page/index";
import type { Browser, Page } from "@playwright/test";

type Fixtures = {
  chromiumBrowser: Browser;
  loginPage: Pages.LoginPage;
};

type TestContext = Fixtures & {
  page: Page;
};

export type TestFunction<TArgs extends unknown[] = []> = (
  context: TestContext,
  ...args: TArgs
) => Promise<void>;

export function createTestFunction<TArgs extends unknown[] = []>(
  handler: TestFunction<TArgs>,
): TestFunction<TArgs> {
  return async ({ chromiumBrowser, loginPage, page }, ...args) => {
    await handler({ chromiumBrowser, loginPage, page }, ...args);
  };
}

export function createLoginTestFunction<TArgs extends unknown[] = []>(
  handler: (
    loginPage: Pages.LoginPage,
    context: TestContext,
    ...args: TArgs
  ) => Promise<void>,
): TestFunction<TArgs> {
  return createTestFunction(async (context, ...args) => {
    await handler(context.loginPage, context, ...args);
  });
}

export const test = base.extend<Fixtures>({
  chromiumBrowser: async ({ browser }, use) => {
    await use(browser);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new Pages.LoginPage(page);
    await use(loginPage);
  },
});
