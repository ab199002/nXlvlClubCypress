
export class HomePageDetailsVerifications
{
    weblocators =
    {
        //loginBtn: '.div.MuiGrid-root.MuiGrid-container.css-11lq3yg-MuiGrid-root main.MuiContainer-root.MuiContainer-disableGutters.css-idqxm-MuiContainer-root div.MuiBox-root.css-3bsf3f div.MuiBox-root.css-0 header.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation4.MuiAppBar-root.MuiAppBar-colorPrimary.MuiAppBar-positionFixed.mui-fixed.css-1vfadi1-MuiPaper-root-MuiAppBar-root:nth-child(1) div.MuiContainer-root.css-ur2jdm-MuiContainer-root div.MuiToolbar-root.MuiToolbar-regular.nx-toolbar.css-r6ewbb-MuiToolbar-root div.after-login-menu.MuiBox-root.css-0 div.MuiBox-root.css-1xdhyk6:nth-child(2) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeXsmall.MuiButton-containedSizeXsmall.MuiButton-disableElevation.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeXsmall.MuiButton-containedSizeXsmall.MuiButton-disableElevation.css-kpl1jy:nth-child(2)',
        userName: '.user-name',
        name: '.institute-details > .MuiTypography-h2',
        businessEmail: '.institute-details > .email-text',
        appleStoreButton: '.app-btns-box > :nth-child(2)',
        playStoreBtn : '.app-btns-box > :nth-child(2)',
        arroeBtn : '.css-xyfhm8 > .MuiButtonBase-root',
        marketPlaceBtn: '.MuiCollapse-wrapperInner > .MuiBox-root > :nth-child(2)',
        nxconnectBtn: '.MuiCollapse-wrapperInner > .MuiBox-root > :nth-child(3)'
    
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

    verifyplayStoreIconsVisibility()
    {
        return cy.get(this.weblocators.playStoreBtn)
    }
    verifyappleStoreIconsVisibility()
    {
        return cy.get(this.weblocators.appleStoreButton)
    }
    verifyaplleStoreRedirection(storeURL)
    {
        cy.window().then((win) => 
        {
            cy.stub(win, 'open', url => {
                win.location.href = storeURL;
            }).as("popup")
        })
            
            cy.wait(4000)
            cy.get(this.weblocators.playStoreBtn).click()
    
        cy.get('@popup')
            .should("be.called")
        cy.origin(storeURL, () => 
        {
    
        cy.get('h1')
            .should('contain', 'nXlvl: Next Level')
            cy.go('back');
        })
    }

    verifyplayStoreRedirection()
    {
        cy.window().then((win) => 
        {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://play.google.com/store/apps/details?id=com.nxlvl.app';
            }).as("popup")
        })
            
            cy.wait(4000)
            cy.get(this.weblocators.playStoreBtn).click()
    
        cy.get('@popup')
            .should("be.called")
        cy.origin('https://play.google.com/store/apps/details', () => 
        {
    
            cy.get('h1')
            .should('contain', 'nXlvl: Next Level')
            cy.go('back');
        })
    }

    verifymarketPlaceRedirection()
    {
        cy.window().then((win) => 
        {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://marketplace.qa.nxlvl.app/nft/1167/listed';
            }).as("popup")
        })
            
            cy.wait(4000)
            cy.get(this.weblocators.arroeBtn).click()
            cy.get(this.weblocators.marketPlaceBtn).click()
    
        cy.get('@popup')
            .should("be.called")
            cy.title()
            .should('contain', 'User Profile')
            cy.go('back');

    }

    verifynxconnectRedirection()
    {
        cy.window().then((win) => 
        {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://qa.nxconnect.me/michigan.athletics';
            }).as("popup")
        })
            
            cy.wait(4000)
            cy.get(this.weblocators.arroeBtn).click()
            cy.get(this.weblocators.nxconnectBtn).click()
            cy.wait(5000)
    
        cy.get('@popup')
            .should("be.called")

            cy.origin('https://qa.nxconnect.me/michigan.athletics', () => 
        {
    
            ccy.title()
            .should('contain', 'Michigan athletics')
            cy.go('back');
        })
            
            
       
    }
}
