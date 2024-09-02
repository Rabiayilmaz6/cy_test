describe('Sign Up Test', () => {
    it('Test Login Scenario', () => {
      cy.visit('https://istabot.com/')
      cy.contains('Sign Up').click()
      cy.url().should('include', '/signup')
  
      cy.get('input[name="name"]').type('rabia');
      cy.get('input[name="surname"]').type('yilmaz');
      cy.get('input[name="email"]').type('21060999@stu.omu.edu.tr');
      cy.get('#phone').type('5075550608')
      cy.get('input[formcontrolname ="password"').type('123456')
      cy.get('input[formcontrolname ="confirmPassword"').type('123456')
      cy.get('#privacyCheckbox').check()
      cy.get('#privacyCheckbox').should('be.checked');
      cy.get('#termsCheckbox').check()
      cy.get('#termsCheckbox').should('be.checked');
      cy.contains('Sign Up').click()
  
    })
  })

  