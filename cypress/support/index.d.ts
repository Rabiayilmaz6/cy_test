// cypress/support/index.d.ts
declare namespace Cypress {
    interface Chainable<Subject> {
      login(email: string, password: string): Chainable<any>;
    }
  }
  