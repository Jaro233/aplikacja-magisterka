describe("Add New Pet", () => {
  it("allows a user to add a new pet for an owner", () => {
    // Step 1: Visit the homepage
    cy.visit("https://prod.devopshub.org/");

    // Step 2: Interact with the dropdown menu to find all owners
    cy.get(
      "body layout-nav:first nav:first div:eq(1) ul:first li:eq(1) a:first"
    ).click(); // Replace with your actual dropdown selector
    cy.contains("All").click(); // Adjust if your link text is different

    // Step 3: Click on the specific owner's name
    // This assumes that "George Franklin" is the text to click on. Adjust as needed.
    cy.contains("George Franklin").click();

    // Step 4: Click the "Add New Pet" button
    cy.contains("Add New Pet").click();

    // Step 5: Wait for the new pet form to appear and fill out the details
    cy.get("form").should("be.visible");
    cy.get(
      "body > div > div > div > ui-view > pet-form > form > div:eq(1) > div > input"
    ).type("Whiskers");
    cy.get(
      "body > div > div > div > ui-view > pet-form > form > div:eq(2) > div > input"
    ).type("2015-01-20");
    cy.get(
      "body > div:eq(0) > div:eq(0) > div:eq(0) > ui-view:eq(0) > pet-form:eq(0) > form:eq(0) > div:eq(3) > div:eq(0) > select:eq(0)"
    ).select("cat");

    // Step 6: Submit the form
    cy.get("button:contains('Submit')").click();

    // Step 7: Go back to George Franklin's page by clicking on his name
    cy.contains("George Franklin").click();

    // Step 8: Check the pets table for the new pet's details
    cy.contains("Whiskers").should("be.visible");
    cy.contains("2015 Jan 19").should("be.visible");
    cy.contains("cat").should("be.visible");
  });
});
