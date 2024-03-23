import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/home';
import Common from '../../pages/common';

Given('i enter the url in the Google Chrome web browser', () => {
    
    const common = new Common()
    common.baseUrl()
});

Then('i am redirected to the home page of the website', () => {

    const home = new HomePage()
    home.HomeTitleAssert()

});