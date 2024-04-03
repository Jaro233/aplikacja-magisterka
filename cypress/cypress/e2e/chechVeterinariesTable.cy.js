describe("Veterinarians Table", () => {
  it("successfully see the veterinaries", () => {
    // Step 1: Visit the homepage
    cy.visit("https://prod.devopshub.org/");

    // Step 2: Click on veterinarians tab
    cy.get("span:contains('Veterinarians')").click();

    // Step 3: Search for George Franklin
    cy.get('body div:first > div:first > div:first > ui-view:first > owner-list:first > form:first > div:first > input:first').type("george");

    // Step 4: Verify George Franklin exists in the table
    cy.get("table tbody").contains("td", "George Franklin").should("exist");
  });
});
