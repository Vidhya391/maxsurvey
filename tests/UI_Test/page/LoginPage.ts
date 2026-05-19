import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  Pause() {
    throw new Error("Method not implemented.");
  }
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly appBranding: Locator;
  readonly dashboardHeading: Locator;
  readonly logoutButton: Locator;
  readonly errorMessage: Locator;
  readonly usernameValidation: Locator;
  readonly passwordValidation: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.locator(
      'input[name="email"], input[name="username"], input[type="email"], #email, #username',
    );
    this.passwordInput = page.locator(
      'input[name="password"], input[type="password"], #password',
    );
    this.loginButton = page.locator(
      'button[type="submit"], button:has-text("Login"), button:has-text("Sign In"), [data-testid="login-button"]',
    );
    this.appBranding = page.locator(
      'text=MaxSurvey, [data-testid="app-brand"], .brand-logo',
    );
    this.dashboardHeading = page.locator(
      'h1:has-text("Dashboard"), [data-testid="dashboard-title"]',
    );
    this.logoutButton = page.locator(
      'button:has-text("Logout"), button:has-text("Sign Out"), [data-testid="logout"]',
    );
    this.errorMessage = page.locator(
      '.error-message, [role="alert"], .alert-danger',
    );
    this.usernameValidation = page.locator(
      '#email-error, [data-testid="email-error"]',
    );
    this.passwordValidation = page.locator(
      '#password-error, [data-testid="password-error"]',
    );
  }

  async goto() {
    await super.goto("/login");
  }

  async verifyLoginPageLoaded() {
    await expect(this.page).toHaveURL(/login/i);
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async enterUsername(username: string) {
    await this.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.fill(this.passwordInput, password);
  }

  async clearUsername() {
    await this.clear(this.usernameInput);
  }

  async clearPassword() {
    await this.clear(this.passwordInput);
  }

  async clickLogin() {
    await this.click(this.loginButton);
  }

  async clickLogout() {
    await this.click(this.logoutButton);
  }

  async verifyDashboard() {
    await expect(this.page).toHaveURL(/(dashboard|home)/i);
  }

  async verifyPostLoginLanding() {
    await this.verifyDashboard();
    await expect(this.dashboardHeading).toBeVisible();
    await expect(this.logoutButton).toBeVisible();
  }

  async verifyRedirectUrlContains(expectedPath: string) {
    await expect(this.page).toHaveURL(new RegExp(expectedPath, "i"));
  }

  async verifyLoginPage() {
    await expect(this.page).toHaveURL(/.*login/);
  }

  async verifyErrorMessage(message: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(message);
  }

  async verifyRequiredFieldsValidation() {
    const validationMessages = this.page.locator(
      '.error, .validation-error, [data-testid*="error"]',
    );
    await expect(validationMessages.first()).toBeVisible();
  }

  async verifyUsernameValidation() {
    await expect(this.usernameValidation).toBeVisible();
  }

  async verifyPasswordValidation() {
    await expect(this.passwordValidation).toBeVisible();
  }
}
