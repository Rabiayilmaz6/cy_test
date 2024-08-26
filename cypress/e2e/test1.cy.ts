import 'cypress-file-upload';
import cypress from 'cypress';

describe('Istabot File Upload Test', function () {
  
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('Upload file and create project', () => {
    
    // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
    cy.url().should('include', '/projects');

    // Proje oluşturma sayfasına git
    cy.visit('http://192.168.1.89:4200/');

    cy.contains('Create Project').click();

    // Dosya yükleme işlemi
    const fileName = 'istabot_veri.xlsx';
    const filePath = '/home/rabis/cy_test/data/' + fileName;

    // Proje adını gir
    cy.get('input[name="projectName"]').type('proje1');

    // Dosyayı yükle
    cy.readFile(filePath, 'binary').then((fileContent) => {
      cy.get('input[type="file"]').selectFile(filePath,{force: true} );
    });

    // Submit butonuna tıkla
    cy.get('button[type="submit"]')
      .should('be.enabled')
      .click();
      cy.wait(4000)

    cy.get('#0').check({force: true})
    cy.get('#0').click({force: true})
    cy.wait(1000)
    cy.get('#1').check({force: true})  
    cy.get('#1').click({force: true})

    for (let i = 2; i < 32; i++) {
      // TR input
      cy.get('input[placeholder = "Label-TR"]').eq(i).clear().type(`label TR-${i}`, {force: true})
      
      // EN input  
      cy.get('input[placeholder = "Label-En"]').eq(i).clear().type(`label EN-${i}`, {force: true})
    }

  
  
    cy.get('button[name="showValueLabels"]').eq(1).contains('Edit').click();
    
    cy.get('input[name="labelTr"]').type('label')
    cy.get('input[name="labelEn"]').eq(1).type('label EN')
    cy.get('input[name="labelTr"]').eq(2).type('label2')
    cy.get('input[name="labelEn"]').eq(3).type('label2 EN')
    

    cy.contains('Save').click({ force: true }) 
    

    cy.get('button.text-blue-600').eq(2).contains('Edit').click({ force: true });

    for (let i = 0; i <= 6; i+=2) {
      cy.get('input[name="labelTr"]').eq(i).type(`label-${i} TR`, {force: true})
    }
    for (let i = 1; i <= 7; i+=2) {         
      cy.get('input[name="labelEn"]').eq(i).type(`label-${i} EN`, {force: true})
    }
    cy.contains('Save').click({ force: true }) 


      
    cy.get('button.text-blue-600').eq(3).contains('Edit').click({ force: true });

    for (let i = 3; i <= 7; i++) {
      cy.get('input[name="labelTr"]').eq(0).type('label', {force: true})
      cy.get('input[name="labelEn"]').eq(1).type('label EN', {force: true})
      cy.get('input[name="labelTr"]').eq(2).type('label2', {force: true})
      cy.get('input[name="labelEn"]').eq(3).type('label2 EN', {force: true})
      cy.contains('Save').click({ force: true }) 
    }

    cy.contains('Save').click()
    cy.contains('Finish Changes').click()
    cy.contains('Finalise').click({ force: true })

  });
  
});

