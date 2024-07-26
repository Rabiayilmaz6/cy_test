describe('Login Test', () => {
  it('Test Login Scenario', () => {
    cy.visit('https://istabot.com/login')
  
   
    cy.get('input[name="email"]').type('enessusan1@gmail.com');
    cy.get('input[name="email"]').should('have.value', 'enessusan1@gmail.com');
    cy.get('input[name ="password"').type('asdfasdf')
    cy.get('button[type="submit"]').click();
    cy.contains('Login').click()

  })
})