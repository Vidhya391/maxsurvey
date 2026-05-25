import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import {
  createLoginTestFunction,
  createTestFunction,
  test,
} from "../fixture/fixture";

const { Given, When, Then } = createBdd(test);

// ── Background ────────────────────────────────────────────────────────────────

Given(
  "the user is on the MaxSurvey login page",
  createLoginTestFunction(async (loginPage) => {
    await loginPage.goto();
    await loginPage.verifyLoginPageLoaded();
    console.log('This is report from branch')

  }),
);

// ── When Steps ────────────────────────────────────────────────────────────────

When(
  "the user enters username {string}",
  createLoginTestFunction(async (loginPage, _context, username: string) => {
    await loginPage.enterUsername(username);
  }),
);

When(
  "the user enters password {string}",
  createLoginTestFunction(async (loginPage, _context, password: string) => {
    await loginPage.enterPassword(password);
  }),
);

When(
  "the user clicks the login button",
  createLoginTestFunction(async (loginPage) => {
    await loginPage.clickLogin();
  }),
);

When(
  "the user leaves the username field empty",
  createLoginTestFunction(async (loginPage) => {
    await loginPage.clearUsername();
  }),
);

When(
  "the user leaves the password field empty",
  createLoginTestFunction(async (loginPage) => {
    await loginPage.clearPassword();
  }),
);

When(
  "the user clicks the logout button",
  createLoginTestFunction(async (loginPage) => {
    await loginPage.clickLogout();
  }),
);

// ── Then Steps ────────────────────────────────────────────────────────────────

Then(
  "the user should be redirected to the {word}",
  createTestFunction(async ({ loginPage, page }, destination: string) => {
    // Both "home" and "dashboard" land on the dashboard route in this app.
    if (!["home", "dashboard"].includes(destination.toLowerCase())) {
      throw new Error(`Unsupported destination: ${destination}`);
    }
    await loginPage.verifyPostLoginLanding();
    await expect(page).toHaveURL(/(dashboard|home)/i);
  }),
);

Then(
  "an error message {string} should be displayed",
  createLoginTestFunction(async (loginPage, _context, message: string) => {
    await loginPage.verifyErrorMessage(message);
  }),
);

Then(
  "a validation message for required fields should be displayed",
  createLoginTestFunction(async (loginPage) => {
    await loginPage.verifyRequiredFieldsValidation();
  }),
);

Then(
  "a validation message for the username field should be displayed",
  createLoginTestFunction(async (loginPage) => {
    await loginPage.verifyUsernameValidation();
  }),
);

Then(
  "a validation message for the password field should be displayed",
  createLoginTestFunction(async (loginPage) => {
    await loginPage.verifyPasswordValidation();
  }),
);

Then(
  "the user should be redirected to the login page",
  createTestFunction(async ({ loginPage, page }) => {
    await loginPage.verifyLoginPage();
    await expect(page).toHaveURL(/login/i);
  }),
);

Then(
  "the redirected url should contain {string}",
  createLoginTestFunction(async (loginPage, _context, expectedPath: string) => {
    await loginPage.verifyRedirectUrlContains(expectedPath);
  }),
);
