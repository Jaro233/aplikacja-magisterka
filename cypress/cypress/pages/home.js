class HomePage {
  elements = {
    homePageTitle: () => cy.get("h1"),
  };

  HomeTitleAssert() {
    this.elements.homePageTitle().should("be.visible");
  }
}

export default HomePage;
