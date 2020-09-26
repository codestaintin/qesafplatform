
/**
 * Tests for Landing page elements
 */

describe('Landing page elements tests', () => {
  beforeEach(() => {
    cy.visit('qa.safplatform.com')
  });

  it('should assert change in URL', () => {
    cy.url().should('equal', 'https://qa.safplatform.com/login?redirect=%2Fproducts%2Ffunds');
  });

  it('assert that the subscribe svg is visible', () => {
    cy.get("#app > div > div > div > svg").should('exist')

  });

  it('assert that the welcome text is visible', () => {
    cy.get("h1").contains('h1', 'Welcome');
  });

  it('assert email form field exists', () => {
    cy.get("input#email").should('exist');
  });

  it('assert password form field exists', () => {
    cy.get("input#password").should('exist');
  });

  it('assert show button in the password form field exists', () => {
    cy.get("button > span").contains('Show');
  });

  it('assert that the Forgot Password text is visible', () => {
    cy.get("form > div:nth-child(2) > p > a > span").contains('Forgot password?');
  });

  it('assert that the submit button is visible', () => {
    cy.get("form > div > button").should('exist');
  });

  it('assert that the submit button text is visible', () => {
    cy.get("form > div > button").contains('Sign in');
  });

  it('assert that the Having trouble signing text is visible', () => {
    cy.get("form > div > p").eq(1).contains('Having trouble signing in?');
  });

  it('assert that the Reset Password text is visible', () => {
    cy.get("p > a > span").eq(1).contains('Reset password');
  });

  it('assert that the Assess Policy text is visible', () => {
    cy.get("div > div > button").eq(1).contains('Access Policy');
  });
});
