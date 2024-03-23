import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import OwnersFind from '../../pages/ownersfind';
import Common from '../../pages/common';

Given('i am on the home page of the website', () => {
    
    const common = new Common()
    common.baseUrl()
});

When('i click on the {string} link', (namesection) => {
    
    const common = new Common()
    common.clickOnMenuTitle(namesection)
});

And('i click on the Find Owner button for access all owners', () => {
    
    const common = new Common()
    common.clickBtnOwner()
});

Then('i access the list of all owners', () => {

    const ownersFind = new OwnersFind()
    assert.isTrue(true, ownersFind.ownersListVisible())


});