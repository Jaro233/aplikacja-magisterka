describe("Veterinarians Table", () => {
  it("successfully see the veterinaries", () => {
    cy.visit("https://prod.devopshub.org/");

    cy.xpath("//body/layout-nav[1]/nav[1]/div[2]/ul[1]/li[3]/a[1]").click();

    cy.get("table tbody").contains("td", "Helen Leary").should("exist");
  });
});
