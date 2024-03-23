class VeterinariansPage {

    elements = {

        xpathLinkVet: () => cy.xpath('//span[contains(text(),"Veterinarians")]'),
        xpathTableVetsSpecialities: () => cy.xpath('//table[@id="vets"]')
    }

    clickLinkVeterinarians() {
      
       this.elements.xpathLinkVet().click()
    }

    assertVerifyVetsPage() {

        this.elements.xpathTableVetsSpecialities().should('be.visible')
    }
}
    
    export default VeterinariansPage;