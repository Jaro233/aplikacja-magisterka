class OwnersFind {

    elements = {

        ownersTableVerify: () => cy.xpath('//table[@id="vets"]'),
        ownerInput: () => cy.get('input')
    }
    
    ownersListVisible() {
        
     this.elements.ownersTableVerify()
     return true

    }

    ownerSearch(element) {
        
    this.elements.ownerInput().type(element.lastname)

    }

}

export default OwnersFind;