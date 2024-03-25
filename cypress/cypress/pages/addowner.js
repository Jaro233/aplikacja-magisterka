class AddOwner {
  elements = {
    dropdownOwners: () =>
      cy.xpath("//body/layout-nav[1]/nav[1]/div[2]/ul[1]/li[2]/a[1]"),
    linkRegister: () => cy.xpath('//span[contains(text(),"Register")]'),
    btnSubmit: () => cy.xpath('//span[contains(text(),"Submit")]'),
    inputLocator: () => cy.get("input"),
  };

  clickDropdownOwners() {
    this.elements.dropdownOwners().click();
  }

  clickRegisterLink() {
    this.elements.linkRegister().click();
  }

  newOwnerForm(elements) {
    this.elements.inputLocator().eq(0).type(elements.FIRSTNAME);
    this.elements.inputLocator().eq(1).type(elements.LASTNAME);
    this.elements.inputLocator().eq(2).type(elements.ADDRESS);
    this.elements.inputLocator().eq(3).type(elements.CITY);
    this.elements.inputLocator().eq(4).type(elements.TELEPHONE);
  }

  inputFormOutline(firstName, lastName, address, city, telephone) {
    this.elements.inputLocator().eq(0).type(firstName);
    this.elements.inputLocator().eq(1).type(lastName);
    this.elements.inputLocator().eq(2).type(address);
    this.elements.inputLocator().eq(3).type(city);
    this.elements.inputLocator().eq(4).type(telephone);
  }

  clickSubmit() {
    this.elements.btnSubmit().click();
  }
}

export default AddOwner;
