import { test as base } from "playwright-bdd";
import * as Pages from "../page/index";
import type { Page } from "@playwright/test";

type Fixtures = {
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
  return async ({ loginPage, page }, ...args) => {
    await handler({ loginPage, page }, ...args);
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
  loginPage: async ({ page }, use) => {
    const loginPage = new Pages.LoginPage(page);
    await use(loginPage);
  },
});
