import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import Common from '../../pages/common';
import OwnersFind from '../../pages/ownersfind';

Given('i am on the home page of the website url', () => {
    
    const common = new Common()
    common.baseUrl()
});

And('i click on the "find owners" link in the navbar', () => {
    
    const common = new Common()
    common.clickLinkFindOwners()
});

When('i fill form', (dataTable) => {

    dataTable.hashes().forEach((element) => { 

        const ownersFind = new OwnersFind()
        ownersFind.ownerSearch(element)

    });
    
    
});

And('click on the Find Owner button', () => {

    const common = new Common()
    common.clickBtnOwner()


});

Then('the owner details are displayed', () => {

    expect('George Franklin').to.have.string('George Franklin')



});