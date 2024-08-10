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
    
    cy.get('[_ngcontent-ng-c1355604787]').contains('Single Group').click() 

    cy.get('input[type="checkbox"]').eq(10).check(); 
    cy.get('input[type="text"][id="9"]').type('50', {force: true})

    cy.get('input[type="checkbox"]').eq(11).check(); 
    cy.get('input[type="text"][id="10"]').type('160', {force: true})

    cy.get('input[type="checkbox"]').eq(12).check(); 
    cy.get('input[type="text"][id="11"]').type('150', {force: true})

    cy.get('input[type="checkbox"]').eq(13).check(); 
    cy.get('input[type="text"][id="12"]').type('7000', {force: true})

    cy.get('input[type="checkbox"]').eq(14).check(); 
    cy.get('input[type="text"][id="13"]').type('4800', {force: true})

    cy.get('button[type="submit"].flex.items-center.justify-center')
    .should('be.visible')
    .contains('Forward')
    .click({ force: true });

    cy.get('button span:contains("Create Analyse")').parent('button').click()
    cy.get('input[type="checkbox"]').eq(0).check(); 
  })

})
