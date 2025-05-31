describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => { 
    cy.visit('/');
    cy.contains('Hello, Cypress!');
  });
});