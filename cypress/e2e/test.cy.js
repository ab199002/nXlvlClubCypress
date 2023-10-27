describe("window handling", () => {
    // it.only('Handling New Window', function () {
    //     cy.visit('https://club.qa.nxlvl.app/michigan.athletics');
    //     cy.wait(4000)
    //     const newUrl = "https://apps.apple.com/in/app/nxlvl/id1583608085";
    //     cy.window().then(win => {
    //       cy.stub(win, 'open').as('windowOpen');
    //     });
    //     cy.get('.app-btns-box > :nth-child(1)').click();
    //     cy.get('@windowOpen').should('be.calledWith', newUrl);
    //     cy.window().then(win => {
    //       win.location.href = newUrl;
          
    //     });
    //     cy.wait(2000)
    //     //cy.url().should('include','nxlvl-next-level')
    //     cy.get('h1').should('contain', 'nXlvl: Next Level');
    //   })

      it('Handling new Browser Window', function () {
        cy.visit('https://club.qa.nxlvl.app/michigan.athletics')
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://apps.apple.com/in/app/nxlvl/id1583608085';
            }).as("popup")
        })
        cy.get('.app-btns-box > :nth-child(1)').click()
        cy.get('@popup')
            .should("be.called")
        cy.origin('https://apps.apple.com/in/app/nxlvl/id1583608085', () => {
      
        cy.get('h1')
            .should('contain', 'nXlvl: Next Level')
            cy.go('back');
    }
        )
        
    })
    });