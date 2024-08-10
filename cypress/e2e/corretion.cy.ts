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

    // ***HDL***
    cy.get('[_ngcontent-ng-c1355604787]').contains('Correlation Analysis').click() 

    for (let i = 5; i <= 11 ; i++) {
        cy.get('input[type="checkbox"]').eq(i).check();
        
    }

    for (let i = 22; i <= 26 ; i++) {
      cy.get('input[type="checkbox"]').eq(i).check();
      
  }
  cy.contains('Forward').click({ force: true })
  cy.get('button span:contains("Create Analyse")').parent('button').click()

    })

})