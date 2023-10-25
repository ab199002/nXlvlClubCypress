export class HomePageDetailsVerifications
{
    weblocators ={
        //loginBtn: '.div.MuiGrid-root.MuiGrid-container.css-11lq3yg-MuiGrid-root main.MuiContainer-root.MuiContainer-disableGutters.css-idqxm-MuiContainer-root div.MuiBox-root.css-3bsf3f div.MuiBox-root.css-0 header.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation4.MuiAppBar-root.MuiAppBar-colorPrimary.MuiAppBar-positionFixed.mui-fixed.css-1vfadi1-MuiPaper-root-MuiAppBar-root:nth-child(1) div.MuiContainer-root.css-ur2jdm-MuiContainer-root div.MuiToolbar-root.MuiToolbar-regular.nx-toolbar.css-r6ewbb-MuiToolbar-root div.after-login-menu.MuiBox-root.css-0 div.MuiBox-root.css-1xdhyk6:nth-child(2) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeXsmall.MuiButton-containedSizeXsmall.MuiButton-disableElevation.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeXsmall.MuiButton-containedSizeXsmall.MuiButton-disableElevation.css-kpl1jy:nth-child(2)',
        userName: '.user-name',
        name: '.institute-details > .MuiTypography-h2',
        businessEmail: '.institute-details > .email-text',
        appleStoreButton: '.app-btns-box > :nth-child(1)',
        playStoreBtn : '.app-btns-box > :nth-child(2)'
    
}

verifyuserNameDetails()
{
    return cy.get(this.weblocators.userName)
}
verifynameDetails()
{
    return cy.get(this.weblocators.name)
}
verifybusinessEmailDetails()
{
    return cy.get(this.weblocators.businessEmail)
}
verifyaplleStoreRedirection()
{
    // // cy.get(this.weblocators.appleStoreButton).invoke("attr", "target", "_self").click()
    // // cy.wait(2000)
    // cy.window().then(win => {
    //     cy.spy(win, 'open').as('redirect')
    //   })
    //   cy.get(this.weblocators.appleStoreButton).click()
      
    // return cy.url()
    // cy.go('back')
}

}