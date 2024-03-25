class Common {
  dropdownLink = "//body/layout-nav[1]/nav[1]/div[2]/ul[1]/li[2]/a[1]";
  xpathLinkOwners = "//body/layout-nav[1]/nav[1]/div[2]/ul[1]/li[2]/a[1]";
  xpathLinkAll = "//span[contains(text(),'All')]";
  findOwnerBtn = "//button[contains(text(),'Owner')]";
  titleMenu = "title";

  baseUrl() {
    cy.visit("https://petclinic111.devopshub.org/");
  }

  clickLinkOwners() {
    return cy.xpath(this.dropdownLink).click();
  }

  clickBtnOAll() {
    return cy.xpath(this.xpathLinkOwners).click();
  }

  clickBtnOAll() {
    return cy.xpath(this.xpathLinkOwners).click();
  }

  clickOnMenuTitle(namesection) {
    cy.get(this.titleMenu).contains(namesection).click();
  }
}

export default Common;
