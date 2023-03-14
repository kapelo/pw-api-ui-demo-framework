@login

Feature: Login
    Background:
        Given I am on the Swag Labs homepage

    Scenario: User should be able to login with valid username and valid password
        When I enter valid user credentials
        Then I should be logged in

    Scenario: User should not be able to login with invalid username and valid password
        When I enter invalid user credentials
        Then I should see invalid credential error message
        And I should not be logged in

    Scenario: User should not be able to login with invalid username and valid password
        When I enter invalid username
        Then I should see invalid credential error message
        And I should not be logged in

    Scenario: User should not be able to login with valid username and invalid password
        When I enter invalid password
        Then I should see invalid credential error message
        And I should not be logged in

    Scenario: User should not be able to login without entering both username and password
        When I do not enter user credentials
        Then I should see username is required error message
        And I should not be logged in

    Scenario: User should not be able to login if account is locked
        When I enter locked user credentials
        Then I should locked user error message
        And I should not be logged in
