describe('Hello',function(){


    it('hi',function(){

        cy.visit("https://club.qa.nxlvl.app/login?returnUrl=/michigan.athletics&club=michigan.athletics")
        //cy.get('.gb_Hd').click()
        cy.get('#login-form-email').type("a.b@yopmail.com")
        

    })
})