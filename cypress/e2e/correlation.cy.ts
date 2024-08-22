import cypress from 'cypress';
import { eq } from 'cypress/types/lodash';

describe('Create Analyse --corelation--', function () {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('Upload file and create project', () => {
    // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
    cy.get('button[name="analysis"]').click() // continue analysis 
    cy.get('button p:contains("Create Analyse")').click({force: true})

    // ***HDL***
    cy.get('button[name="correlation"]').click() 

    for (let i = 5; i <= 11 ; i++) {
        cy.get('input[type="checkbox"]').eq(i).check();
        
    }

    for (let i = 22; i <= 26 ; i++) {
      cy.get('input[type="checkbox"]').eq(i).check();
      
  }
  cy.contains('Forward').click({ force: true })
  cy.get('button span:contains("Create Analyse")').parent('button').click()

  // log out
    cy.wait(4000)
    cy.visit('https://istabot.com/projects');

    cy.wait(4000)

    cy.get('.relative.flex.justify-center.h-12.sidebar').click({force:true})
    cy.contains("Log out").click({force:true})
    })

})