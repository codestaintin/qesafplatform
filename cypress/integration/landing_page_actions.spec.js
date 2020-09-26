import {fillLoginForm, fillResetForm } from '../../utilities/completeForm'

/**
 * Landing page action tests
 */

describe('Tests for landing page actions', () => {
  beforeEach(() => {
    cy.visit('qa.safplatform.com');
  });

  it('clicks the access policy button to view modal and close it', () => {
    cy.get("div > div > button").eq(1).click();
    cy.get("div > div > div > button > svg").click();
  });

  it('clicks the submit button without filling the login form', () => {
    cy.get("form > div > button").click();
    cy.get("form > div:nth-child(1) > div > p:nth-child(1)").should('exist');
    cy.get("form > div:nth-child(1) > div > p:nth-child(1)")
      .contains('You have entered an invalid email or password.');
    cy.get("form > div:nth-child(1) > div > p:nth-child(2)").should('exist');
    cy.get("form > div:nth-child(1) > div > p:nth-child(2)")
      .contains('Try again or click Reset Password below.');
  });

  it('fills the email field and clicks the submit button', () => {
    cy.get('[name=email]').type('m@safplatform.com');
    cy.get("form > div > button").click();
    cy.get("form > div:nth-child(1) > div > p:nth-child(1)")
      .contains('You have entered an invalid email or password.');
    cy.get("form > div:nth-child(1) > div > p:nth-child(2)")
      .contains('Try again or click Reset Password below.');
  });

  it('fills the password field and clicks the submit button', () => {
    cy.get('[name=email]').type('m@safplatform.com')
    cy.get('[name=password]').type('password');
    cy.get("form > div > button").click();
  });

  it('complete the login form and click the submit button', () => {
    fillLoginForm('m@saf.com', 'password');
    cy.get("button > span").first().click();
    cy.get("button > span").first().click();
    cy.get("form > div > button").click();
    cy.get("form > div:nth-child(1) > div > p:nth-child(1)")
      .contains('You have entered an invalid email or password.');
    cy.get("form > div:nth-child(1) > div > p:nth-child(2)")
      .contains('Try again or click Reset Password below.');
  });

  it('tests the forgot password functionality', () => {
    const pageText = 'Enter your registered email address and we’ll send you a link to reset your password.'

    cy.get("form > div:nth-child(2) > p > a > span").click();
    cy.url().should('equal', 'https://qa.safplatform.com/forgot');
    cy.get("div > div > h1").contains("Reset Password");
    cy.get("div > div > p").contains(pageText);
    cy.get("#email").type('m@safplatform.com');
    cy.get("form > div > button").click();
    cy.url().should('include', '/login');
  });

  it('tests the reset password functionality', () => {
    const message = "Your new password is on its way! Check your mailbox for the link to reset your password.";
    const resetText = 'Enter your registered email address and we’ll send you a link to reset your password.';

    cy.get('form > div > p > a > span').eq(1).click();
    cy.get(' div > div > div > p').contains(resetText);
    fillResetForm('m@saf.com');
    cy.get('form > div > button').click();
    cy.contains('[data-testid="notification-bar-message"]', message);
    
    cy.url().should('include', '/login');
  });

  it('navigate back to login page from Reset Password page', () => {
    cy.get("form > div:nth-child(2) > p > a > span").click();
    cy.url().should('equal', 'https://qa.safplatform.com/forgot');
    cy.get("div > a > div > span").contains("Back to Login")
    cy.get("div > a > div > span").click()
    cy.url().should('equal', 'https://qa.safplatform.com/login');
  });
});