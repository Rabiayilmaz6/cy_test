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
    cy.get('[_ngcontent-ng-c1355604787]').contains('Dependent Data Analysis').click() 
    cy.get('input[placeholder="Turkish Definition"]').type('HDL')
    cy.get('input[placeholder="English Definition"]').type('HDL')

    cy.get('.ng-select-container').first().click({ force: true });
    cy.wait(500); 
    cy.get('.ng-dropdown-panel .ng-option').contains('v7').click();
    cy.get('input[placeholder="Enter Time"]').eq(0).type('tedavi öncesi')
    cy.get('input[placeholder="Enter Time"]').eq(1).type('pre-treatment')

    cy.get('.ng-select-container').eq(1).click({ force: true });
    cy.get('.ng-dropdown-panel .ng-option').contains('v12').click();
    cy.get('input[placeholder="Enter Time"]').eq(2).type('tedavi sonrası')
    cy.get('input[placeholder="Enter Time"]').eq(3).type('post-treatment')

    cy.contains('Add Definition').click({ force: true })

    // ***LDL***
    cy.get('input[placeholder="Turkish Definition"]').type('LDL')
    cy.get('input[placeholder="English Definition"]').type('LDL')

    cy.get('.ng-select-container').first().click({ force: true });
    cy.wait(500); 
    cy.get('.ng-dropdown-panel .ng-option').contains('v8').click();
    cy.get('input[placeholder="Enter Time"]').eq(0).type('tedavi öncesi')
    cy.get('input[placeholder="Enter Time"]').eq(1).type('pre-treatment')

    cy.get('.ng-select-container').eq(1).click({ force: true });
    cy.get('.ng-dropdown-panel .ng-option').contains('v13').click();
    cy.get('input[placeholder="Enter Time"]').eq(2).type('tedavi sonrası')
    cy.get('input[placeholder="Enter Time"]').eq(3).type('post-treatment')

    cy.contains('Add Definition').click({ force: true })

      // ***Trigliserit***
      cy.get('input[placeholder="Turkish Definition"]').type('Trigliserit')
      cy.get('input[placeholder="English Definition"]').type('Trigliserit')
  
      cy.get('.ng-select-container').first().click({ force: true });
      cy.wait(500); 
      cy.get('.ng-dropdown-panel .ng-option').contains('v9').click();
      cy.get('input[placeholder="Enter Time"]').eq(0).type('tedavi öncesi')
      cy.get('input[placeholder="Enter Time"]').eq(1).type('pre-treatment')
  
      cy.get('.ng-select-container').eq(1).click({ force: true });
      cy.get('.ng-dropdown-panel .ng-option').contains('v14').click();
      cy.get('input[placeholder="Enter Time"]').eq(2).type('tedavi sonrası')
      cy.get('input[placeholder="Enter Time"]').eq(3).type('post-treatment')
  
    cy.contains('Add Definition').click({ force: true })

    // ***Nötrofil***
    cy.get('input[placeholder="Turkish Definition"]').type('Nötrofil')
    cy.get('input[placeholder="English Definition"]').type('Nötrofil')

    cy.get('.ng-select-container').first().click({ force: true });
    cy.wait(500); 
    cy.get('.ng-dropdown-panel .ng-option').contains('v10').click();
    cy.get('input[placeholder="Enter Time"]').eq(0).type('tedavi öncesi')
    cy.get('input[placeholder="Enter Time"]').eq(1).type('pre-treatment')

    cy.get('.ng-select-container').eq(1).click({ force: true });
    cy.get('.ng-dropdown-panel .ng-option').contains('v15').click();
    cy.get('input[placeholder="Enter Time"]').eq(2).type('tedavi sonrası')
    cy.get('input[placeholder="Enter Time"]').eq(3).type('post-treatment')

  cy.contains('Add Definition').click({ force: true })

    // ***Lenfosit***
    cy.get('input[placeholder="Turkish Definition"]').type('Lenfosit')
    cy.get('input[placeholder="English Definition"]').type('Lenfosit')

    cy.get('.ng-select-container').first().click({ force: true });
    cy.wait(500); 
    cy.get('.ng-dropdown-panel .ng-option').contains('v11').click();
    cy.get('input[placeholder="Enter Time"]').eq(0).type('tedavi öncesi')
    cy.get('input[placeholder="Enter Time"]').eq(1).type('pre-treatment')

    cy.get('.ng-select-container').eq(1).click({ force: true });
    cy.get('.ng-dropdown-panel .ng-option').contains('v16').click(); 
    cy.get('input[placeholder="Enter Time"]').eq(2).type('tedavi sonrası')
    cy.get('input[placeholder="Enter Time"]').eq(3).type('post-treatment')


    cy.contains('Forward').click({ force: true })
    
    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('button span:contains("Create Analyse")').parent('button').click()


    })

})