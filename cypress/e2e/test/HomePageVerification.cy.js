
import { HomePageDetailsVerifications } from "../../Pages/HomePageDetailsVerification";
const homePageDetailsVerifications = new HomePageDetailsVerifications();
import testData from '../../fixtures/testData.json'

describe('test automation',()=>{
    beforeEach(()=>{
        cy.loginTest(testData.Login.username,testData.Login.password)
        
    })

    it('Verify store icon visibility', ()=>{
        cy.wait(8000)
        homePageDetailsVerifications.verifyappleStoreIconsVisibility().should('exist')
        homePageDetailsVerifications.verifyappleStoreIconsVisibility().should('exist')
    })

    it('HomePage Basic details verifications',()=>{
        cy.wait(8000)

        homePageDetailsVerifications.verifyuserNameDetails().invoke('text').then((text)=>{
            cy.log(text);
        })
        homePageDetailsVerifications.verifyuserNameDetails().should('contain',testData.UserDetails.username)
        homePageDetailsVerifications.verifynameDetails().should('contain', testData.UserDetails.name)
        homePageDetailsVerifications.verifybusinessEmailDetails().should('contain', testData.UserDetails.businessemail)
        
       
    })

    it('Store Details Verifications', ()=>{
        cy.wait(8000)
        homePageDetailsVerifications.verifyaplleStoreRedirection(testData.StoreDetails.appStoreURL)
        cy.wait(8000)
        homePageDetailsVerifications.verifyplayStoreRedirection()
    })

    it('Market Place redirection', ()=>{
        cy.wait(8000)
        homePageDetailsVerifications.verifymarketPlaceRedirection()
    })

    it('Nxconnect  Place redirection', ()=>{
        cy.wait(8000)
        homePageDetailsVerifications.verifynxconnectRedirection()
    })
    
})
