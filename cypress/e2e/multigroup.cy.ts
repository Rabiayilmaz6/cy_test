import cypress from 'cypress';
import { eq } from 'cypress/types/lodash';

describe('Istabot File Upload Test', function () {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('Upload file and create project', () => {
    // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
    cy.get('[_ngcontent-ng-c549554740]').contains('Continue to Analysis').click() 
    cy.get('button p:contains("Create Analyse")').click({force: true})

    cy.get('[_ngcontent-ng-c1355604787]').contains('Multi Group').click() 
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