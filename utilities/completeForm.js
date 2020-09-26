export const fillLoginForm = (email, password) => {
  cy.get('[name=email]').type(email);
  cy.get('[name=password]').type(password);
}

export const fillResetForm = (email) => {
  cy.get('[name=email]').type(email);
}