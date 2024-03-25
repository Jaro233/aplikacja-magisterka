class OwnersFind {
  elements = {
    ownersTableVerify: () =>
      cy.xpath("//body/div[1]/div[1]/div[1]/ui-view[1]/owner-list[1]/table[1]"),
    ownerInput: () => cy.get("input"),
  };

  ownersListVisible() {
    this.elements.ownersTableVerify();
    return true;
  }

  ownerSearch(element) {
    this.elements.ownerInput().type(element.lastname);
  }
}

export default OwnersFind;
