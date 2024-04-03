describe("Add Visit for a Pet", () => {
  it("allows a user to add a new visit for a pet", () => {
    // Step 1: Navigate to the specific pet's page which lists visits
    // This assumes that the pet's page has a URL you can directly navigate to
    cy.visit("https://prod.devopshub.org/");
    cy.get(
      "body layout-nav:first nav:first div:eq(1) ul:first li:eq(1) a:first"
    ).click(); // Replace with your actual dropdown selector
    cy.contains("All").click(); // Adjust if your link text is different

    // Step 2: Click on the specific owner's name
    // This assumes that "George Franklin" is the text to click on. Adjust as needed.
    cy.contains("George Franklin").click();

    // Step 3: Click on the "Add Visit" button or link
    // You will need to adjust the selector to match your application
    cy.contains("Add Visit").click();

    // Step 4: Wait for the new visit form to be visible
    cy.get("form").should("be.visible");

    // Step 5: Fill out the form with visit details
    // Replace these selectors with the actual selectors for your form
    cy.get(
      "body > div:eq(0) > div:eq(0) > div:eq(0) > ui-view:eq(0) > visits:eq(0) > form:eq(0) > div:eq(0) > input:eq(0)"
    ).type("2024-04-04"); // Use the correct format for your date
    cy.get(
      "body > div:eq(0) > div:eq(0) > div:eq(0) > ui-view:eq(0) > visits:eq(0) > form:eq(0) > div:eq(1) > textarea:eq(0)"
    ).type("Checkup and vaccinations");

    // Step 6: Submit the form
    cy.get("form").submit();

    // Step 7: Verify that the visit has been added
    cy.contains("George Franklin").click();
    // You might redirect to the pet's details page and you can assert the new visit there
    cy.contains("2024 Apr 04").should("exist");
    cy.contains("Checkup and vaccinations").should("exist");

    // Make sure to replace '2024-04-04' and 'Checkup and vaccinations' with the actual data you expect to see
  });
});
