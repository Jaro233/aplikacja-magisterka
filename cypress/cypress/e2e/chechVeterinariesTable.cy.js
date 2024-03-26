describe("Veterinarians Table", () => {
  it("successfully see the veterinaries", () => {
    cy.visit("https://prod.devopshub.org/");

    cy.get("span:contains('Veterinarians')").click();

    cy.get(
      "body div:first > div:first > div:first > ui-view:first > owner-list:first > form:first > div:first > input:first"
    ).type("george");

    cy.get("table tbody").contains("td", "George Franklin").should("exist");
  });
});
