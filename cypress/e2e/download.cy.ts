import cypress from 'cypress';
import { eq } from 'cypress/types/lodash';

describe('Istabot File Upload Test', function () {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('Upload file and create project', () => {
    // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
    cy.contains('Continue to Analysis').click({force:true}) 
    cy.contains('Chi Square Analysis 4').click({force:true})
    cy.get('.flex.items-center.justify-center.p-1.bg-white.border-2').eq(1).click()
    cy.contains('Docx').click({force:true})
})

})