class Common {
  xpathLinkFindOwners = "//span[contains(text(),'Find owners')]";
  findOwnerBtn = "//button[contains(text(),'Owner')]";
  titleMenu = "title";

  baseUrl() {
    cy.visit("https://petclinic.devopshub.org/");
  }

  clickLinkFindOwners() {
    return cy.xpath(this.xpathLinkFindOwners).click();
  }

  clickBtnOwner() {
    return cy.xpath(this.findOwnerBtn).click();
  }

  clickOnMenuTitle(namesection) {
    cy.get(this.titleMenu).contains(namesection).click();
  }
}

export default Common;
