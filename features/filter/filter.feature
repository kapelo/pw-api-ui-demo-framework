@filter
Feature: Filter entries
  Scenario: Filter entries by category
    Given I get all entries from Public APIs
    When I filter by <Category>
    Then returned entries should be of length <num>

    Examples:
      | Category                       | num |
      | Authentication & Authorization | 7   |
