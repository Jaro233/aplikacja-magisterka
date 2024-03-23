class HomePage {

  elements = {

    homePageTitle: () => cy.get('h2')
}

HomeTitleAssert() {
    
    this.elements.homePageTitle().should('be.visible')
  }

}

export default HomePage;
