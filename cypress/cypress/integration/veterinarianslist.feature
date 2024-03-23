Feature: As a visitor to the website I can access the list of veterinarians to view their information

  Scenario: The visitor can access the list of veterinarians through the dedicated link in the navbar of the site
    Given i am on the home page of the website petclinic
    When click on the "veterinarians" link
    Then i am redirected to the list of vets