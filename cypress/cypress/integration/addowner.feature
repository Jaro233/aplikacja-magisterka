Feature: As a visitor to the website i can add an owner to have access to this information

  Scenario: user can add owner
    Given i'm on the home page of the website petclinic
    And i click on the "find owners" link
    And I click on "Add Owner" button
    And I fill form in the following:
      |FIRSTNAME  |LASTNAME |ADDRESS           |CITY            |TELEPHONE  |
      |jeremy     |dufour   |rue du pere noel  |henin beaumont  |0303030303 |
    When I click "Add Owner" button
    Then I'm redirected on page with title Owner Information
    And I check that the owner's information is displayed

    Scenario Outline:
      Given i'm on home page
      And click on the "find owners" link
      And i click on the "Add Owner" button to access the form
      And I fill form in the following "<firstName>" and "<lastName>" and "<address>" and "<city>" and "<telephone>"
      When I click on the "Add Owner" button
      Then I'am redirected on page with title Owner Information
      Examples:
      |firstName  |lastName    |address                          |city   |telephone   |
      |julien     |leclerc     |5 rue du pont                    |lille  |0770234512  |
      |leo        |dubois      |7 avenue du pres                 |arras  |0325478952  |
      |corentin   |carpentier  |123 boulevard du marechal juin   |amiens |0678234501  |