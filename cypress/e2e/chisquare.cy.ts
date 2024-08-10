
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

    cy.get('[_ngcontent-ng-c1355604787]').contains('Chi Square Analysis').click() 

    cy.get('input[type="checkbox"]').eq(1).check();
    cy.contains('Forward').click({ force: true })

    cy.get('input[type="checkbox"]').eq(2).check();
    cy.contains('Forward').click({ force: true })

    cy.get('button span:contains("Create Analyse")').parent('button').click()

    cy.get('[_ngcontent-ng-c1355604787]').contains('According to Row').click() 
    cy.wait(4000)
    cy.visit('https://istabot.com/projects');

    cy.wait(4000)

    cy.get('.relative.flex.justify-center.h-12.sidebar').click({force:true})
    cy.contains("Log out").click({force:true})
    
})

})