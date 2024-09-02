declare namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      startLoaderTest(testId: string): Chainable<any>;
      getLoaderTestResult(testId: string, resultId: string): Chainable<any>;
    }
  }