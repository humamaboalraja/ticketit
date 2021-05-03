import { buildUser } from '../support/generate'
describe('Registration', () => {
   it('Should register a new user ', () => {
      const user = buildUser()

      cy.visit('/');
      cy.findByText('Sign Up').click();
      cy.findByPlaceholderText('E.g humam@ticketit.com').type(user.email);
      cy.findByPlaceholderText('Your Password').type(user.password);
      cy.get('.btn').click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)
      cy.window()
      cy.findByText('Sign Out')
   })

   it('Should show and error message if there is an error registering ', () => {
      cy.server().route({
         url: 'https://ticketit.dev/auth/signup',
         method: 'POST',
         status: 400,
         response: {},
      })
      cy.visit('/auth/signup')
      cy.get('.btn').click()
      cy.findByText('Opps....')

   })

   it('Should return an error message if an email is invalid ', () => {
      const user = buildUser()

      cy.visit('/');
      cy.findByText('Sign Up').click();
      cy.findByPlaceholderText('E.g humam@ticketit.com').type('user.email');
      cy.findByPlaceholderText('Your Password').type(user.password);
      cy.get('.btn').click();
      cy.findByText('Email must be valid')
   })

   it('Should return an error message if a password is invalid ', () => {
      const user = buildUser()

      cy.visit('/');
      cy.findByText('Sign Up').click();
      cy.findByPlaceholderText('E.g humam@ticketit.com').type(user.email);
      cy.findByPlaceholderText('Your Password').type('1');
      cy.get('.btn').click();
      cy.findByText('Your password should be between 4 and 20 characters')
   })
})
