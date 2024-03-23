class AddOwner {

  elements = {

    btnPageAddOwner: () => cy.xpath('//a[contains(text(),"Add Owner")]'),
    btnAddOwnerValidate: () => cy.xpath('//button[contains(text(),"Add Owner")]'),
    inputLocator: () => cy.get('input')
}

linkAddOwner() {
   
    this.elements.btnPageAddOwner().click()
  }

AddOwnerValidate() {

    this.elements.btnAddOwnerValidate().click()
}

newOwnerForm(elements) {

  this.elements.inputLocator().eq(0).type(elements.FIRSTNAME)
  this.elements.inputLocator().eq(1).type(elements.LASTNAME)
  this.elements.inputLocator().eq(2).type(elements.ADDRESS)
  this.elements.inputLocator().eq(3).type(elements.CITY)
  this.elements.inputLocator().eq(4).type(elements.TELEPHONE)

  }

  inputFormOutline(firstName, lastName, address, city, telephone) {

  this.elements.inputLocator().eq(0).type(firstName)
  this.elements.inputLocator().eq(1).type(lastName)
  this.elements.inputLocator().eq(2).type(address)
  this.elements.inputLocator().eq(3).type(city)
  this.elements.inputLocator().eq(4).type(telephone)

  }

}

export default AddOwner