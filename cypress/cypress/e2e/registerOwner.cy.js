describe("Owner Registration", () => {
  it("should register a new owner", () => {
    // Step 1: Visit the homepage
    cy.visit("/");

    // Step 2: Interact with the dropdown menu
    cy.get(
      "body layout-nav:first nav:first div:eq(1) ul:first li:eq(1) a:first"
    ).click();

    // Step 3: Click the register link
    cy.get("span:contains('Register')").click();

    // Step 4: Fill out the registration form
    cy.get('input[name="firstName"]').type("John1");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="address"]').type("123 Elm Street");
    cy.get('input[name="city"]').type("Metropolis");
    cy.get('input[name="telephone"]').type("1234567890");

    // Step 5: Submit the form
    cy.get('button[type="submit"]').click();

    // Step 6: Verify successful registration
    cy.get(
      "body layout-nav:first nav:first div:eq(1) ul:first li:eq(1) a:first"
    ).click();
    cy.get("span:contains('All')").click();
    cy.get("table tbody").contains("td", "John1 Doe").should("exist");
  });
});
