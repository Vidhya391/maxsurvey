@login
Feature: Verify login
  Verify user is able to login with valid and invalid credentials

  Background:
    Given the user is on the MaxSurvey login page

  @smoke
  Scenario: Successful login with valid "emailadreess"and "password"
    When the user enters username "swaroop.gowda@halliburton.com"
    And the user enters password "10r_Onsteroids19972715"
    And the user clicks the login button
    Then the user should be redirected to the home
    And the redirected url should contain "/dashboard"

  Scenario: Failed login with invalid username
    When the user enters username "invalid@maxsurvey.com"
    And the user enters password "Admin@123"
    And the user clicks the login button
    Then an error message "Invalid email or password" should be displayed

  Scenario: Failed login with invalid password
    When the user enters username "admin@maxsurvey.com"
    And the user enters password "WrongPass@123"
    And the user clicks the login button
    Then an error message "Invalid email or password" should be displayed

  Scenario: Failed login with empty credentials
    When the user leaves the username field empty
    And the user leaves the password field empty
    And the user clicks the login button
    Then a validation message for required fields should be displayed

  Scenario: Failed login with empty username
    When the user leaves the username field empty
    And the user enters password "Admin@123"
    And the user clicks the login button
    Then a validation message for the username field should be displayed

  Scenario: Failed login with empty password
    When the user enters username "admin@maxsurvey.com"
    And the user leaves the password field empty
    And the user clicks the login button
    Then a validation message for the password field should be displayed

  Scenario: Successful logout after login
    When the user enters username "admin@maxsurvey.com"
    And the user enters password "Admin@123"
    And the user clicks the login button
    And the user clicks the logout button
    Then the user should be redirected to the login page

  Scenario Outline: Login with multiple user roles
    When the user enters username "<username>"
    And the user enters password "<password>"
    And the user clicks the login button
    Then the user should be redirected to the dashboard

    Examples:
      | username            | password  |
      | admin@maxsurvey.com | Admin@123 |
