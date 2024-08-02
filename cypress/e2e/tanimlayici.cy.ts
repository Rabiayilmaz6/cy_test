import cypress from 'cypress';

describe('Istabot File Upload Test', function () {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('Upload file and create project', () => {
    // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
    cy.url().should('include', '/projects');
     cy.viewport(1920, 1080);
    // Proje oluşturma sayfasına git
    cy.visit('https://istabot.com/projects');
    
    cy.contains('deneme').click({force: true})
    cy.contains('Descriptive Statistics 8').click({force: true})

    cy.contains('Create Analyse').click({force: true})
    cy.contains(' Descriptive Statistics ').click({force: true})
    cy.get('input[type="checkbox"]').eq(0).check(); 
    cy.get('input[type="checkbox"]').eq(2).uncheck(); 
    
    
  })

})
