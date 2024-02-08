Feature: Sort items in ascending and descending order
  Background:
    Given I am on the Swag Labs login page
    When I enter valid user credentials
    Then I should be logged in

  Scenario Outline: User should be able to sort inventory items
    When I sort inventory items in <type> order
    Then items should be sorted in <type> order

    Examples:
      | type      |
      | ascending  |
      | descending |
