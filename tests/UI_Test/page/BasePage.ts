import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  async expectUrl(urlPattern: RegExp) {
    await expect(this.page).toHaveURL(urlPattern);
  }

  async click(locator: Locator) {
    await expect(locator).toBeVisible();
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await expect(locator).toBeVisible();
    await locator.fill(value);
  }

  async clear(locator: Locator) {
    await this.fill(locator, "");
  }
}
