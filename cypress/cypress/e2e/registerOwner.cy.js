describe("Owner Registration", () => {
  it("should register a new owner", () => {
    // Step 1: Visit the homepage
    cy.visit("https://prod.devopshub.org/");

    // Step 2: Interact with the dropdown menu
    // Replace '.dropdown' with the actual selector for your dropdown menu
    cy.get(
      "body layout-nav:first nav:first div:eq(1) ul:first li:eq(1) a:first"
    ).click();

    // Step 3: Click the register link
    // Replace 'Register' with the actual text or selector inside the dropdown for registration
    cy.get("span:contains('Register')").click();

    // Step 4: Fill out the registration form
    // Replace the selectors with the actual form field identifiers from your application
    cy.get('input[name="firstName"]').type("John1");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="address"]').type("123 Elm Street");
    cy.get('input[name="city"]').type("Metropolis");
    cy.get('input[name="telephone"]').type("1234567890");

    // Step 5: Submit the form
    cy.get('button[type="submit"]').click();

    // Step 6: Verify successful registration
    // Adjust the verification step based on how your application confirms successful registration
    cy.get(
      "body layout-nav:first nav:first div:eq(1) ul:first li:eq(1) a:first"
    ).click();

    cy.get("span:contains('All')").click();

    cy.get("table tbody").contains("td", "John1 Doe").should("exist");
  });
});
