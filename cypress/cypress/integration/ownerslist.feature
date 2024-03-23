@owners
Feature: As a visitor to the website I can view the list of all owners to find the owner I want to contact

  Scenario: Visitors to the site can access the list of owners via the dedicated link in the navbar of the site
    Given i am on the home page of the website
    When i click on the "find owners" link
    And i click on the Find Owner button for access all owners
    Then i access the list of all owners