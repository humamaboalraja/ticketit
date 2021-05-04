import { buildUser } from '../../support/generate'
describe('Authenticate', () => {
   it('Should authenticate an existing user', () => {

      cy.createUser().then(user => {
         cy.visit('/');
         cy.findByText('Sign Out').click()
         // Now we can start out tests
         cy.findByText('Sign In').click()
         cy.findByPlaceholderText('E.g humam@ticketit.com').type(user.email);
         cy.findByPlaceholderText('Your Password').type(user.password);
         cy.get('.btn').click();
         // it should verify we have an express:sess coockie object
         cy.assertUrl()
         cy.assertLoggedInAs()
      })
   })

   it('Should check if the email a user entered is invalid', () => {
      // Creating the user
      const user = buildUser()
      // Now we can start out tests
      cy.findByText('Sign Out').click()
      cy.findByText('Sign In').click()
      cy.findByPlaceholderText('E.g humam@ticketit.com').type('user.email');
      cy.findByPlaceholderText('Your Password').type(user.password);
      cy.get('.btn').click();
      // 
      cy.url().should('eq', `${Cypress.config().baseUrl}/auth/signin`)
      cy.window()
      cy.findByText('Email must be valid')
   })


   it('Should check if the password a user entered is wrong', () => {
      // Creating the user
      const user = buildUser()
      // Now we can start out tests
      cy.visit('/');
      cy.findByText('Sign In').click()
      cy.findByPlaceholderText('E.g humam@ticketit.com').type(user.email);
      cy.findByPlaceholderText('Your Password').type('placeholder');
      cy.get('.btn').click();
      // 
      cy.url().should('eq', `${Cypress.config().baseUrl}/auth/signin`)
      cy.window()
      cy.findByText('Invalid Credentials')
   })

   it('Should check if the email exists', () => {
      // Creating the user
      const user = buildUser()
      // Now we can start out tests
      cy.visit('/');
      cy.findByText('Sign In').click()
      cy.findByPlaceholderText('E.g humam@ticketit.com').type("test_" + user.email);
      cy.findByPlaceholderText('Your Password').type(user.password);
      cy.get('.btn').click();
      // 
      cy.url().should('eq', `${Cypress.config().baseUrl}/auth/signin`)
      cy.window()
      cy.findByText('Invalid Credentials')
   })

})
