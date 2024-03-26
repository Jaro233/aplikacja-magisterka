describe("Veterinarians Table", () => {
  it("successfully see the veterinaries", () => {
    cy.visit("https://prod.devopshub.org/");

    cy.get("span:contains('Veterinarians')").click();

    cy.get("table tbody").contains("td", "Helen Leary").should("exist");
  });
});
