import 'cypress-file-upload';
import cypress from 'cypress';

// """ LOGİN """

    describe('Istabot E2E Test Suite', function () {
      it('Login Test', () => {
      cy.viewport(1920, 1080);
      cy.visit('https://istabot.com/login');
      cy.get('body').should('be.visible');
      cy.wait(2000);

      // Sayfanın yüklenmesini bekleyin ve elementin hazır olmasını sağlayın
      cy.get('input[name="email"]', { timeout: 10000 }).should('be.visible').type('enessusan1@gmail.com');
      cy.get('input[name="password"]').should('be.visible').type('asdfasdf');
      cy.get('button[type="submit"]').should('be.visible').click();
      cy.contains('Login').should('be.visible').click();

      // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
      cy.url().should('include', '/projects');

      
    });


//"""" Descriptive Analysis """" 

    it('Descriptive Statistics', () => {
      cy.viewport(1920, 1080);
      cy.wait(4000)
      // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
      cy.get('[_ngcontent-ng-c549554740]').contains('Continue to Analysis').click({force: true}) 
      cy.get('button p:contains("Create Analyse")').click({force: true})
      cy.contains('Descriptive Statistics').click({force: true})
      
      cy.get('input[type="checkbox"]').eq(0).check(); 
      cy.get('input[type="checkbox"]').eq(2).uncheck(); 
      
      cy.get('button[type="submit"].flex.items-center.justify-center')
      .should('be.visible')
      .contains('Forward')
      .click({ force: true });
      cy.get('button span:contains("Create Analyse")').parent('button').click()

    })


// """Single Group""""

    it('Single Group', () => {
      cy.viewport(1920, 1080);
      // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
      cy.wait(5000)

      cy.get('button p:contains("Create Analyse")').click({force: true})
      cy.get('[_ngcontent-ng-c1355604787]').contains('Single Group').click({force: true}) 

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

// """Multi Group"""

    it('multi group', () => {
      cy.viewport(1920, 1080);
      cy.wait(5000)
      // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
      cy.get('button p:contains("Create Analyse")').click({force: true})

      cy.contains('Multi Group').click({force:true}) 
      cy.get('input[type="checkbox"]').eq(0).check(); 

      cy.get('button[type="submit"].flex.items-center.justify-center')
      .should('be.visible')
      .contains('Forward')
      .click({ force: true });

      cy.wait(5000)

    cy.get('input[type="checkbox"]').first().check();
          
      cy.get('button[type="submit"].flex.items-center.justify-center')
      .should('be.visible')
      .contains('Forward')
      .click({ force: true });

      cy.get('button span:contains("Create Analyse")').parent('button').click()
      })

      
// """Dependent Data Analysis"""

    it('Dependent Data Analysis', () => {
      cy.viewport(1920, 1080);
      cy.wait(4000)
      // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
      cy.get('button p:contains("Create Analyse")').click({force: true})
  
      // ***HDL***
      cy.get('[_ngcontent-ng-c1355604787]').contains('Dependent Data Analysis').click({force:true}) 
      cy.get('input[placeholder="Turkish Definition"]').type('HDL')
      cy.get('input[placeholder="English Definition"]').type('HDL')
  
      cy.get('.ng-select-container').first().click({ force: true });
      cy.wait(4000); 
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
      cy.wait(4000); 
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
        cy.wait(4000); 
        cy.get('.ng-dropdown-panel .ng-option').contains('v9').click();
        cy.get('input[placeholder="Enter Time"]').eq(0).type('tedavi öncesi')
        cy.get('input[placeholder="Enter Time"]').eq(1).type('pre-treatment')
    
        cy.get('.ng-select-container').eq(1).click({ force: true });
        cy.get('.ng-dropdown-panel .ng-option').contains('v14').click();
        cy.get('input[placeholder="Enter Time"]').eq(2).type('tedavi sonrası')
        cy.get('input[placeholder="Enter Time"]').eq(3).type('post-treatment')
    
      cy.contains('Add Definition').click({ force: true })
  
      // ***Nötrofil***
      cy.get('input[placeholder="Turkish Definition"]').type('Notrofil')
      cy.get('input[placeholder="English Definition"]').type('Notrofil')
  
      cy.get('.ng-select-container').first().click({ force: true });
      cy.wait(4000); 
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
      cy.wait(4000); 
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
 
      
//"""Corelation Analysis"""

      it('Corelation Analysis', () => {
        cy.viewport(1920, 1080);
        // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
        cy.wait(4000)
        cy.get('button p:contains("Create Analyse")').click({force: true})
    
        // ***HDL***
        cy.get('[_ngcontent-ng-c1355604787]').contains('Correlation Analysis').click() 
    
        for (let i = 5; i <= 11 ; i++) {
            cy.get('input[type="checkbox"]').eq(i).check();
            
        }
    
        for (let i = 22; i <= 26 ; i++) {
          cy.get('input[type="checkbox"]').eq(i).check();
          
      }
      cy.contains('Forward').click({ force: true })
      cy.get('button span:contains("Create Analyse")').parent('button').click()
    
        })

        
// """Chi Square"""

   it('Chi square', () => {
    cy.viewport(1920, 1080);
    // Login sonrası doğru sayfaya yönlendirildiğinden emin olun
    cy.wait(4000)
    cy.get('button p:contains("Create Analyse")').click({force: true})

    cy.get('[_ngcontent-ng-c1355604787]').contains('Chi Square Analysis').click() 

    cy.get('input[type="checkbox"]').eq(1).check();
    cy.contains('Forward').click({ force: true })

    cy.get('input[type="checkbox"]').eq(2).check();
    cy.contains('Forward').click({ force: true })

    cy.get('button span:contains("Create Analyse")').parent('button').click()

    cy.get('[_ngcontent-ng-c1355604787]').contains('According to Row').click() 
})

});
