import cypress from 'cypress';
import { eq } from 'cypress/types/lodash';

describe('Istabot File Upload Test', function () {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('Upload file and create project', () => {
    cy.get('button[name="analysis"]').click() // continue analysis

    // İlk olarak, sayfadaki tüm tabloları seçin ve tablo sayısını kaydedin
    cy.get('table').then((initialTables) => {
      const initialTableCount = initialTables.length;

      // Tetikleme işlemini gerçekleştir
      // Örneğin, bir butona tıklama işlemi tetikleme olarak kullanılabilir
      
      cy.get('button p:contains("Create Analyse")').click({force: true})
  
      cy.get('button[name="chisq"]').click()
  
      cy.get('input[type="checkbox"]').eq(1).check();
      cy.contains('Forward').click({ force: true })
  
      cy.get('input[type="checkbox"]').eq(2).check();
      cy.contains('Forward').click({ force: true })
  
      cy.get('button span:contains("Create Analyse")').parent('button').click()
  
      // cy.get('#start-analyze-process').type("submit").click()
  
      cy.contains('According to Row').click() 
  
      cy.wait(2000)
      // Tetikleme sonrasında, sayfadaki tablo sayısını tekrar kontrol edin
      cy.get('table').should((newTables) => {
        const newTableCount = newTables.length;
        // Yeni tablo sayısının, eski tablo sayısından en az 1 fazla olduğundan emin olun
        expect(newTableCount).to.be.greaterThan(initialTableCount);
      });
    });
  });
});