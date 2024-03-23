import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import VeterinariansPage from '../../pages/veterinarians';
import Common from '../../pages/common';

Given('i am on the home page of the website petclinic', () => {
    
    const common = new Common()
    common.baseUrl()
});

When('click on the "veterinarians" link', () => {
    
    const vets = new VeterinariansPage()
    vets.clickLinkVeterinarians()
});

Then('i am redirected to the list of vets', () => {

    const vets = new VeterinariansPage()
    assert.isTrue(true, vets.assertVerifyVetsPage())


});