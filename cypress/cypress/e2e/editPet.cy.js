describe("Edit Pet Details", () => {
  it("allows a user to edit pet details", () => {
    // Step 1: Navigate to the specific owner's page which lists pets
    cy.visit("/");

    // Step 2: Interact with the dropdown menu to find all owners
    cy.get(
      "body layout-nav:first nav:first div:eq(1) ul:first li:eq(1) a:first"
    ).click(); // Replace with your actual dropdown selector
    cy.contains("All").click(); // Adjust if your link text is different

    // Step 3: Click on the specific owner's name
    cy.contains("George Franklin").click().wait(2000);

    // Step 4: Click on the "Edit Pet" button for the specific pet
    cy.contains("Edit Pet").click().wait(2000);

    // Step 5: Wait for the edit pet form to be visible
    cy.get("form").should("be.visible");

    // Step 6: Update the pet's name
    cy.get(
      "body > div:eq(0) > div:eq(0) > div:eq(0) > ui-view:eq(0) > pet-form:eq(0) > form:eq(0) > div:eq(1) > div:eq(0) > input:eq(0)"
    )
      .clear()
      .type("New Pet Name");

    // Step 7: Update the pet's birth date if necessary
    cy.get(
      "body > div:eq(0) > div:eq(0) > div:eq(0) > ui-view:eq(0) > pet-form:eq(0) > form:eq(0) > div:eq(2) > div:eq(0) > input:eq(0)"
    )
      .clear()
      .type("2020-04-01");

    // Step 8: Update the pet's type if there's a dropdown for it
    cy.get(
      "body > div:eq(0) > div:eq(0) > div:eq(0) > ui-view:eq(0) > pet-form:eq(0) > form:eq(0) > div:eq(3) > div:eq(0) > select:eq(0)"
    ).select("dog");

    // Step 9: Submit the form
    cy.get("form").submit().wait(2000);

    // Step 10: Assert that the pet's details have been updated
    cy.contains("George Franklin").click();
    cy.contains("New Pet Name").should("exist");
  });
});
