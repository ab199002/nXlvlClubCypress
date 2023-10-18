import  {LoginPageActions}  from "../../Pages/LoginPageActions"
const loginPageActions = new LoginPageActions();
import loginTestData from '../../fixtures/loginTestData.json'
describe ('test automation for login page flow ',()=> {

    it('LoginFlow Test',()=> {
        //cy.visit(("https://club.qa.nxlvl.app/login?returnUrl=/michigan.athletics&club=michigan.athletics"));
        
        loginPageActions.openURL()
        // loginPageActions.clickLoginBtn;
        loginPageActions.enterUsername(loginTestData.username);
        loginPageActions.enterPassword(loginTestData.password);
        loginPageActions.clickSubmitBtn();

    })
})