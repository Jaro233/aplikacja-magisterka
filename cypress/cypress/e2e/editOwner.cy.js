describe("Owner Information Editing", () => {
  it("should edit an existing owner", () => {
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

    // Step 4: Click "Edit Owner" button or link
    cy.get(
      "body > div > div > div > ui-view > owner-details > table:first > tbody > tr:eq(4) > td:first > a"
    ).click();

    // Step 5: Change the values of certain inputs
    cy.get('input[name="firstName"]').clear().type("George1");
    cy.get('input[name="lastName"]').clear().type("Franklin1");
    cy.get('input[name="address"]').clear().type("123 Updated Address");
    cy.get('input[name="city"]').clear().type("UpdatedCity");
    cy.get('input[name="telephone"]').clear().type("1234567890");

    // Step 6: Submit the form
    cy.get(
      "body > div > div > div > ui-view > owner-form > form > div:eq(5) > button"
    ).click();

    // Step 7: Verify the changes
    cy.get(
      "body layout-nav:first nav:first div:eq(1) ul:first li:eq(1) a:first"
    ).click();
    cy.get("span:contains('All')").click();
    cy.get("table tbody").contains("td", "George1 Franklin1").should("exist");
  });
});
