@owners
Feature: As a visitor to the website I can search for an owner by name to get access to this information

  Scenario: The website visitor can access the information sheet of an owner
    Given i am on the home page of the website url
    And i click on the "find owners" link in the navbar
    When i fill form
    | lastname |
    | Franklin |
    And click on the Find Owner button
    Then the owner details are displayed