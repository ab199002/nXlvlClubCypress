//const cypress = require("cypress");


export class LoginPageActions
{
    weblocators ={
                loginBtn: '.div.MuiGrid-root.MuiGrid-container.css-11lq3yg-MuiGrid-root main.MuiContainer-root.MuiContainer-disableGutters.css-idqxm-MuiContainer-root div.MuiBox-root.css-3bsf3f div.MuiBox-root.css-0 header.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation4.MuiAppBar-root.MuiAppBar-colorPrimary.MuiAppBar-positionFixed.mui-fixed.css-1vfadi1-MuiPaper-root-MuiAppBar-root:nth-child(1) div.MuiContainer-root.css-ur2jdm-MuiContainer-root div.MuiToolbar-root.MuiToolbar-regular.nx-toolbar.css-r6ewbb-MuiToolbar-root div.after-login-menu.MuiBox-root.css-0 div.MuiBox-root.css-1xdhyk6:nth-child(2) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeXsmall.MuiButton-containedSizeXsmall.MuiButton-disableElevation.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeXsmall.MuiButton-containedSizeXsmall.MuiButton-disableElevation.css-kpl1jy:nth-child(2)',
                userName: '#login-form-email',
                passWord: '#login-form-password',
                submitBtn: '#login-form-sign-in-button'
            
    }

    openURL()
    {
        
        cy.visit(Cypress.env('URL'));
        // cy.visit('https://www.google.com');
    }
    
    clickLoginBtn(){
        cy.get(this.weblocators.loginBtn).click();
    }
    enterUsername(email){
        cy.get(this.weblocators.userName).type(email);
    }
    enterPassword(password){
        cy.get(this.weblocators.passWord).type(password);
    }

    clickSubmitBtn(){
        cy.get(this.weblocators.submitBtn).click();
    }
}