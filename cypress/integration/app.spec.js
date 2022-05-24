// app.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* globals cy */
    
describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with welcome message', () => {
      cy.visit ('/');
      cy.get('[data-cy=welcome]').should('contain', '🚀 micro');
    });

    it('opens google pop up', () => {
      cy.visit ('/');
      cy.get('[data-cy=login]').click();
      //Could add some more here to test more on Google side
      // cy.get('[data-cy=SignIn]').should('contain' ,'Sign in');
    });
  
  });

