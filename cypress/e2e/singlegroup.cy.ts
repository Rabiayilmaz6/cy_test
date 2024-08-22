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
    
    cy.get('button[name="single"]').click()

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
    
     // log out
     cy.wait(4000)
     cy.visit('https://istabot.com/projects');
 
     cy.wait(4000)
 
     cy.get('.relative.flex.justify-center.h-12.sidebar').click({force:true})
     cy.contains("Log out").click({force:true})
  })

})
