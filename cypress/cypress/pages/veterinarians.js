class VeterinariansPage {
  elements = {
    xpathLinkVet: () => cy.xpath('//span[contains(text(),"Veterinarians")]'),
    xpathTableVetsSpecialities: () =>
      cy.xpath("//body/div[1]/div[1]/div[1]/ui-view[1]/owner-list[1]/table[1]"),
  };

  clickLinkVeterinarians() {
    this.elements.xpathLinkVet().click();
  }

  assertVerifyVetsPage() {
    this.elements.xpathTableVetsSpecialities().should("be.visible");
  }
}

export default VeterinariansPage;
