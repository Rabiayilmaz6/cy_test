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
    cy.visit('https://istabot.com/projects');

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
      cy.get('input[name = "labelTr"]').eq(i).clear().type(`label TR-${i}`, {force: true})
      
      // EN input  
      cy.get('input[name = "labelEn"]').eq(i).clear().type(`label EN-${i}`, {force: true})
    }
    
  
    cy.get('button[name="showValueLabels"]').eq(1).contains('Edit').click();
    
    cy.get('input[name="valueLabelTr"]').eq(0).type('label1')
    cy.get('input[name="valueLabelEn"]').eq(0).type('label1 EN')
    cy.get('input[name="valueLabelTr"]').eq(1).type('label2')
    cy.get('input[name="valueLabelEn"]').eq(1).type('label2 EN')
    

    cy.get('button.p-2.text-white.bg-blue-500.rounded-md.disabled\\:opacity-50').click()
    
    cy.wait(2000)

    cy.get('button[name="showValueLabels"]').eq(2).contains('Edit').click({ force: true }); // edit d1
    for (let i = 0; i <=3; i++) {
      cy.get('input[name="valueLabelTr"]').eq(i).type(`label-${i} TR`, {force: true})
    }
    for (let i = 0; i <=3; i++) {         
      cy.get('input[name="valueLabelEn"]').eq(i).type(`label-${i} EN`, {force: true})
    }
    cy.get('button.p-2.text-white.bg-blue-500.rounded-md.disabled\\:opacity-50').click()

    cy.wait(1000)

    for (let i = 3; i <=7; i++) {
      cy.get('button[name="showValueLabels"]').eq(i).contains('Edit').click({ force: true }); // edit d6
      cy.get('input[name="valueLabelTr"]').eq(0).type('label1')
      cy.get('input[name="valueLabelEn"]').eq(0).type('label1 EN')
      cy.get('input[name="valueLabelTr"]').eq(1).type('label2')
      cy.get('input[name="valueLabelEn"]').eq(1).type('label2 EN')
  
      cy.get('button.p-2.text-white.bg-blue-500.rounded-md.disabled\\:opacity-50').click() // save
      cy.wait(1000)
      
    }
    cy.contains('Save').click()
    cy.contains('Finish Changes').click()
    cy.contains('Finalise').click({ force: true })

  });
  
});

