describe("Homepage", () => {
  it("should have an h1 tag", () => {
    // Step 1: Visit the homepage
    cy.visit("/");

    // Step 2: Check for the presence of an h1 tag
    cy.get("h1").should("exist");
  });
});
