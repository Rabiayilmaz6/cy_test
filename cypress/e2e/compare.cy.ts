
import cypress from 'cypress';
import { eq } from 'cypress/types/lodash';

describe('Istabot File Upload Test', function () {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });
  it('Son Oluşturulan Analizi Kontrol Et', () => {
    cy.get('button[name="analysis"]').click() // continue analysis
    cy.get('button p:contains("Create Analyse")').click({force: true})

    cy.get('button[name="chisq"]').click()

    cy.get('input[type="checkbox"]').eq(1).check();
    cy.contains('Forward').click({ force: true })

    cy.get('input[type="checkbox"]').eq(2).check();
    cy.contains('Forward').click({ force: true })

    cy.get('button span:contains("Create Analyse")').parent('button').click()

    // cy.get('#start-analyze-process').type("submit").click()

    cy.contains('According to Row').click() 
    cy.request('POST', 'https://api.istabot.com/v1/analyses/descriptive', {
      // Gerekli payload'u burada tanımlayın
    }).then((response) => {
      const newAnalysisId = response.body.id; // Dönen analiz ID'sini alıyoruz
    
      // Bu ID'ye göre tabloyu kontrol ediyoruz
      cy.get(`[data-cy=table-${newAnalysisId}]`).should('exist'); // Tablo var mı kontrol ediyoruz
    });
    // log out
    cy.wait(4000)
    cy.visit('https://istabot.com/projects');

    cy.wait(4000)

    cy.get('.relative.flex.justify-center.h-12.sidebar').click({force:true})
    cy.contains("Log out").click({force:true})

    
    
  })
  
})

