
import { HomePageDetailsVerifications } from "../../Pages/HomePageDetailsVerification";
const homePageDetailsVerifications = new HomePageDetailsVerifications();
import testData from '../../fixtures/testData.json'

describe('test automation',()=>{
    before(()=>{
        cy.loginTest(testData.Login.username,testData.Login.password)
        
    })

    it('HomePage Basic details verifications',()=>{
        cy.wait(8000)

        homePageDetailsVerifications.verifyuserNameDetails().invoke('text').then((text)=>{
            cy.log(text);
        })
      
        //cy.log( homePageDetailsVerifications.verifyuserNameDetails().getText());
        //homePageDetailsVerifications.verifyuserNameDetails().should('contain' ,testData.UserDetails.username)
        homePageDetailsVerifications.verifyuserNameDetails().should('contain',testData.UserDetails.username)
        homePageDetailsVerifications.verifynameDetails().should('contain', testData.UserDetails.name)
        homePageDetailsVerifications.verifybusinessEmailDetails().should('contain', testData.UserDetails.businessemail)
        // homePageDetailsVerifications.verifyaplleStoreRedirection().invoke('text').then((text)=>{
        //     cy.log(text);
        // })
        homePageDetailsVerifications.verifyaplleStoreRedirection().should('contain', 'nxlvl-next-level')
    })
})
