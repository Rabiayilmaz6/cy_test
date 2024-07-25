describe('Login Test', () => {
  it('Test Login Scenario', () => {
    cy.visit('https://istabot.com/')
    cy.contains('Log In').click()
    cy.url().should('include', '/login')

    cy.get('input[name="email"]').type('enessusan1@gmail.com');
    cy.get('input[name="email"]').should('have.value', 'enessusan1@gmail.com');
    cy.get('input[name ="password"').type('asdfasdf')
    cy.get('button[type="submit"]').click();
    cy.contains('Login').click()

  })
})