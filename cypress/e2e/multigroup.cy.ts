import cypress from 'cypress';
import { eq } from 'cypress/types/lodash';

describe('Istabot File Upload Test', function () {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('Upload file and create project', () => {
    // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
    cy.get('button[name="analysis"]').click() // continue analysis
    cy.get('button p:contains("Create Analyse")').click({force: true})

    cy.get('button[name="multi"]').click()  
    cy.get('input[type="checkbox"]').eq(0).check(); 

    cy.get('button[type="submit"].flex.items-center.justify-center')
    .should('be.visible')
    .contains('Forward')
    .click({ force: true });

    cy.wait(5000)

  cy.get('input[type="checkbox"]').first().check();
        
    cy.get('button[type="submit"].flex.items-center.justify-center')
    .should('be.visible')
    .contains('Forward')
    .click({ force: true });

    cy.get('button span:contains("Create Analyse")').parent('button').click()
    })

})