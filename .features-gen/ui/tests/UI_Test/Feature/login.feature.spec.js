// Generated from: tests\UI_Test\Feature\login.feature
import { test } from "../../../../../tests/UI_Test/fixture/fixture.ts";

test.describe("Verify login", () => {
  test.beforeEach(
    "Background",
    async ({ Given, loginPage, page }, testInfo) => {
      if (testInfo.error) return;
      await Given("the user is on the MaxSurvey login page", null, {
        loginPage,
        page,
      });
    },
  );

  test(
    'Successful login with valid "emailadreess"and "password"',
    { tag: ["@login", "@smoke"] },
    async ({ When, Then, And, loginPage, page }) => {
      await When(
        'the user enters username "swaroop.gowda@halliburton.com"',
        null,
        { loginPage, page },
      );
      await And('the user enters password "10r_Onsteroids19972715"', null, {
        loginPage,
        page,
      });
      await And("the user clicks the login button", null, { loginPage, page });
      await Then("the user should be redirected to the home", null, {
        loginPage,
        page,
      });
      await And('the redirected url should contain "/dashboard"', null, {
        loginPage,
        page,
      });
    },
  );

  test(
    "Failed login with invalid username",
    { tag: ["@login"] },
    async ({ When, Then, And, loginPage, page }) => {
      await When('the user enters username "invalid@maxsurvey.com"', null, {
        loginPage,
        page,
      });
      await And('the user enters password "Admin@123"', null, {
        loginPage,
        page,
      });
      await And("the user clicks the login button", null, { loginPage, page });
      await Then(
        'an error message "Invalid email or password" should be displayed',
        null,
        { loginPage, page },
      );
    },
  );

  test(
    "Failed login with invalid password",
    { tag: ["@login"] },
    async ({ When, Then, And, loginPage, page }) => {
      await When('the user enters username "admin@maxsurvey.com"', null, {
        loginPage,
        page,
      });
      await And('the user enters password "WrongPass@123"', null, {
        loginPage,
        page,
      });
      await And("the user clicks the login button", null, { loginPage, page });
      await Then(
        'an error message "Invalid email or password" should be displayed',
        null,
        { loginPage, page },
      );
    },
  );

  test(
    "Failed login with empty credentials",
    { tag: ["@login"] },
    async ({ When, Then, And, loginPage, page }) => {
      await When("the user leaves the username field empty", null, {
        loginPage,
        page,
      });
      await And("the user leaves the password field empty", null, {
        loginPage,
        page,
      });
      await And("the user clicks the login button", null, { loginPage, page });
      await Then(
        "a validation message for required fields should be displayed",
        null,
        { loginPage, page },
      );
    },
  );

  test(
    "Failed login with empty username",
    { tag: ["@login"] },
    async ({ When, Then, And, loginPage, page }) => {
      await When("the user leaves the username field empty", null, {
        loginPage,
        page,
      });
      await And('the user enters password "Admin@123"', null, {
        loginPage,
        page,
      });
      await And("the user clicks the login button", null, { loginPage, page });
      await Then(
        "a validation message for the username field should be displayed",
        null,
        { loginPage, page },
      );
    },
  );

  test(
    "Failed login with empty password",
    { tag: ["@login"] },
    async ({ When, Then, And, loginPage, page }) => {
      await When('the user enters username "admin@maxsurvey.com"', null, {
        loginPage,
        page,
      });
      await And("the user leaves the password field empty", null, {
        loginPage,
        page,
      });
      await And("the user clicks the login button", null, { loginPage, page });
      await Then(
        "a validation message for the password field should be displayed",
        null,
        { loginPage, page },
      );
    },
  );

  test(
    "Successful logout after login",
    { tag: ["@login"] },
    async ({ When, Then, And, loginPage, page }) => {
      await When('the user enters username "admin@maxsurvey.com"', null, {
        loginPage,
        page,
      });
      await And('the user enters password "Admin@123"', null, {
        loginPage,
        page,
      });
      await And("the user clicks the login button", null, { loginPage, page });
      await And("the user clicks the logout button", null, { loginPage, page });
      await Then("the user should be redirected to the login page", null, {
        loginPage,
        page,
      });
    },
  );

  test.describe("Login with multiple user roles", () => {
    test(
      "Example #1",
      { tag: ["@login"] },
      async ({ When, Then, And, loginPage, page }) => {
        await When('the user enters username "admin@maxsurvey.com"', null, {
          loginPage,
          page,
        });
        await And('the user enters password "Admin@123"', null, {
          loginPage,
          page,
        });
        await And("the user clicks the login button", null, {
          loginPage,
          page,
        });
        await Then("the user should be redirected to the dashboard", null, {
          loginPage,
          page,
        });
      },
    );
  });
});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: "test", box: true }],
  $uri: [
    ({}, use) => use("tests\\UI_Test\\Feature\\login.feature"),
    { scope: "test", box: true },
  ],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [
  // bdd-data-start
  {
    pwTestLine: 10,
    pickleLine: 10,
    tags: ["@login", "@smoke"],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 7,
        keywordType: "Context",
        textWithKeyword: "Given the user is on the MaxSurvey login page",
        isBg: true,
        stepMatchArguments: [],
      },
      {
        pwStepLine: 11,
        gherkinStepLine: 11,
        keywordType: "Action",
        textWithKeyword:
          'When the user enters username "swaroop.gowda@halliburton.com"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"swaroop.gowda@halliburton.com"',
              children: [
                {
                  start: 26,
                  value: "swaroop.gowda@halliburton.com",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 12,
        gherkinStepLine: 12,
        keywordType: "Action",
        textWithKeyword:
          'And the user enters password "10r_Onsteroids19972715"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"10r_Onsteroids19972715"',
              children: [
                {
                  start: 26,
                  value: "10r_Onsteroids19972715",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 13,
        gherkinStepLine: 13,
        keywordType: "Action",
        textWithKeyword: "And the user clicks the login button",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 14,
        gherkinStepLine: 14,
        keywordType: "Outcome",
        textWithKeyword: "Then the user should be redirected to the home",
        stepMatchArguments: [
          {
            group: { start: 37, value: "home", children: [] },
            parameterTypeName: "word",
          },
        ],
      },
      {
        pwStepLine: 15,
        gherkinStepLine: 15,
        keywordType: "Outcome",
        textWithKeyword: 'And the redirected url should contain "/dashboard"',
        stepMatchArguments: [
          {
            group: {
              start: 34,
              value: '"/dashboard"',
              children: [
                {
                  start: 35,
                  value: "/dashboard",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
    ],
  },
  {
    pwTestLine: 18,
    pickleLine: 17,
    tags: ["@login"],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 7,
        keywordType: "Context",
        textWithKeyword: "Given the user is on the MaxSurvey login page",
        isBg: true,
        stepMatchArguments: [],
      },
      {
        pwStepLine: 19,
        gherkinStepLine: 18,
        keywordType: "Action",
        textWithKeyword:
          'When the user enters username "invalid@maxsurvey.com"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"invalid@maxsurvey.com"',
              children: [
                {
                  start: 26,
                  value: "invalid@maxsurvey.com",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 20,
        gherkinStepLine: 19,
        keywordType: "Action",
        textWithKeyword: 'And the user enters password "Admin@123"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"Admin@123"',
              children: [
                { start: 26, value: "Admin@123", children: [{ children: [] }] },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 21,
        gherkinStepLine: 20,
        keywordType: "Action",
        textWithKeyword: "And the user clicks the login button",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 22,
        gherkinStepLine: 21,
        keywordType: "Outcome",
        textWithKeyword:
          'Then an error message "Invalid email or password" should be displayed',
        stepMatchArguments: [
          {
            group: {
              start: 17,
              value: '"Invalid email or password"',
              children: [
                {
                  start: 18,
                  value: "Invalid email or password",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
    ],
  },
  {
    pwTestLine: 25,
    pickleLine: 23,
    tags: ["@login"],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 7,
        keywordType: "Context",
        textWithKeyword: "Given the user is on the MaxSurvey login page",
        isBg: true,
        stepMatchArguments: [],
      },
      {
        pwStepLine: 26,
        gherkinStepLine: 24,
        keywordType: "Action",
        textWithKeyword: 'When the user enters username "admin@maxsurvey.com"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"admin@maxsurvey.com"',
              children: [
                {
                  start: 26,
                  value: "admin@maxsurvey.com",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 27,
        gherkinStepLine: 25,
        keywordType: "Action",
        textWithKeyword: 'And the user enters password "WrongPass@123"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"WrongPass@123"',
              children: [
                {
                  start: 26,
                  value: "WrongPass@123",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 28,
        gherkinStepLine: 26,
        keywordType: "Action",
        textWithKeyword: "And the user clicks the login button",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 29,
        gherkinStepLine: 27,
        keywordType: "Outcome",
        textWithKeyword:
          'Then an error message "Invalid email or password" should be displayed',
        stepMatchArguments: [
          {
            group: {
              start: 17,
              value: '"Invalid email or password"',
              children: [
                {
                  start: 18,
                  value: "Invalid email or password",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
    ],
  },
  {
    pwTestLine: 32,
    pickleLine: 29,
    tags: ["@login"],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 7,
        keywordType: "Context",
        textWithKeyword: "Given the user is on the MaxSurvey login page",
        isBg: true,
        stepMatchArguments: [],
      },
      {
        pwStepLine: 33,
        gherkinStepLine: 30,
        keywordType: "Action",
        textWithKeyword: "When the user leaves the username field empty",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 34,
        gherkinStepLine: 31,
        keywordType: "Action",
        textWithKeyword: "And the user leaves the password field empty",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 35,
        gherkinStepLine: 32,
        keywordType: "Action",
        textWithKeyword: "And the user clicks the login button",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 36,
        gherkinStepLine: 33,
        keywordType: "Outcome",
        textWithKeyword:
          "Then a validation message for required fields should be displayed",
        stepMatchArguments: [],
      },
    ],
  },
  {
    pwTestLine: 39,
    pickleLine: 35,
    tags: ["@login"],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 7,
        keywordType: "Context",
        textWithKeyword: "Given the user is on the MaxSurvey login page",
        isBg: true,
        stepMatchArguments: [],
      },
      {
        pwStepLine: 40,
        gherkinStepLine: 36,
        keywordType: "Action",
        textWithKeyword: "When the user leaves the username field empty",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 41,
        gherkinStepLine: 37,
        keywordType: "Action",
        textWithKeyword: 'And the user enters password "Admin@123"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"Admin@123"',
              children: [
                { start: 26, value: "Admin@123", children: [{ children: [] }] },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 42,
        gherkinStepLine: 38,
        keywordType: "Action",
        textWithKeyword: "And the user clicks the login button",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 43,
        gherkinStepLine: 39,
        keywordType: "Outcome",
        textWithKeyword:
          "Then a validation message for the username field should be displayed",
        stepMatchArguments: [],
      },
    ],
  },
  {
    pwTestLine: 46,
    pickleLine: 41,
    tags: ["@login"],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 7,
        keywordType: "Context",
        textWithKeyword: "Given the user is on the MaxSurvey login page",
        isBg: true,
        stepMatchArguments: [],
      },
      {
        pwStepLine: 47,
        gherkinStepLine: 42,
        keywordType: "Action",
        textWithKeyword: 'When the user enters username "admin@maxsurvey.com"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"admin@maxsurvey.com"',
              children: [
                {
                  start: 26,
                  value: "admin@maxsurvey.com",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 48,
        gherkinStepLine: 43,
        keywordType: "Action",
        textWithKeyword: "And the user leaves the password field empty",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 49,
        gherkinStepLine: 44,
        keywordType: "Action",
        textWithKeyword: "And the user clicks the login button",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 50,
        gherkinStepLine: 45,
        keywordType: "Outcome",
        textWithKeyword:
          "Then a validation message for the password field should be displayed",
        stepMatchArguments: [],
      },
    ],
  },
  {
    pwTestLine: 53,
    pickleLine: 47,
    tags: ["@login"],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 7,
        keywordType: "Context",
        textWithKeyword: "Given the user is on the MaxSurvey login page",
        isBg: true,
        stepMatchArguments: [],
      },
      {
        pwStepLine: 54,
        gherkinStepLine: 48,
        keywordType: "Action",
        textWithKeyword: 'When the user enters username "admin@maxsurvey.com"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"admin@maxsurvey.com"',
              children: [
                {
                  start: 26,
                  value: "admin@maxsurvey.com",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 55,
        gherkinStepLine: 49,
        keywordType: "Action",
        textWithKeyword: 'And the user enters password "Admin@123"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"Admin@123"',
              children: [
                { start: 26, value: "Admin@123", children: [{ children: [] }] },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 56,
        gherkinStepLine: 50,
        keywordType: "Action",
        textWithKeyword: "And the user clicks the login button",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 57,
        gherkinStepLine: 51,
        keywordType: "Action",
        textWithKeyword: "And the user clicks the logout button",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 58,
        gherkinStepLine: 52,
        keywordType: "Outcome",
        textWithKeyword: "Then the user should be redirected to the login page",
        stepMatchArguments: [],
      },
    ],
  },
  {
    pwTestLine: 63,
    pickleLine: 62,
    tags: ["@login"],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 7,
        keywordType: "Context",
        textWithKeyword: "Given the user is on the MaxSurvey login page",
        isBg: true,
        stepMatchArguments: [],
      },
      {
        pwStepLine: 64,
        gherkinStepLine: 55,
        keywordType: "Action",
        textWithKeyword: 'When the user enters username "admin@maxsurvey.com"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"admin@maxsurvey.com"',
              children: [
                {
                  start: 26,
                  value: "admin@maxsurvey.com",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 65,
        gherkinStepLine: 56,
        keywordType: "Action",
        textWithKeyword: 'And the user enters password "Admin@123"',
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: '"Admin@123"',
              children: [
                { start: 26, value: "Admin@123", children: [{ children: [] }] },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 66,
        gherkinStepLine: 57,
        keywordType: "Action",
        textWithKeyword: "And the user clicks the login button",
        stepMatchArguments: [],
      },
      {
        pwStepLine: 67,
        gherkinStepLine: 58,
        keywordType: "Outcome",
        textWithKeyword: "Then the user should be redirected to the dashboard",
        stepMatchArguments: [
          {
            group: { start: 37, value: "dashboard", children: [] },
            parameterTypeName: "word",
          },
        ],
      },
    ],
  },
]; // bdd-data-end
