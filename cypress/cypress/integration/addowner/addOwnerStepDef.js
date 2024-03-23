import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import Common from '../../pages/common'
import AddOwner from '../../pages/addowner';

Given('i\'m on the home page of the website petclinic', () => {
    
    const common = new Common()
    common.baseUrl()
});

And('i click on the "find owners" link', () => {
    
    const common = new Common()
    common.clickLinkFindOwners()
});

And('I click on "Add Owner" button', () => {

    const addowner = new AddOwner()
    addowner.linkAddOwner()
    
});

And('I fill form in the following:', (dataTable) => {

    dataTable.hashes().forEach((elements) => { 

        const addowner = new AddOwner()
        addowner.newOwnerForm(elements)

    });

});

When('I click "Add Owner" button', () => {

    const addowner = new AddOwner()
    addowner.AddOwnerValidate()

});

Then('I\'m redirected on page with title Owner Information', () => {

    expect('Owner Information').to.have.string('Owner Information')

});

And('I check that the owner\'s information is displayed', () => {

    expect('jeremy dufour').to.have.string('jeremy dufour')
    expect('rue du pere noel').to.have.string('rue du pere noel')
    expect('henin beaumont').to.have.string('henin beaumont')
    expect('0303030303').to.have.string('0303030303')

});



Given('i\'m on home page', () => {
    
    const common = new Common()
    common.baseUrl()
});

And('click on the "find owners" link', () => {
    
    const common = new Common()
    common.clickLinkFindOwners()
});

And('i click on the "Add Owner" button to access the form', () => {

    const addowner = new AddOwner()
    addowner.linkAddOwner()
    
});

And('I fill form in the following {string} and {string} and {string} and {string} and {string}', (firstName, lastName, address, city, telephone) => {
    
    const addowner = new AddOwner()
    addowner.inputFormOutline(firstName, lastName, address, city, telephone)
});

When('I click on the "Add Owner" button', () => {

    const addowner = new AddOwner()
    addowner.AddOwnerValidate()

});

Then('I\'am redirected on page with title Owner Information', () => {

});