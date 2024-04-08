describe("Veterinarians Table", () => {
  it("successfully see the veterinaries", () => {
    // Step 1: Visit the homepage
    cy.visit("/");

    // Step 2: Click on veterinarians tab
    cy.get("span:contains('Veterinarians')").click();

    // Step 3: Verify George Franklin exists in the table
    cy.get("td:contains('James Carter')").should("exist");
  });
});
