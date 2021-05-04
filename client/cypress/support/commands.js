import { buildUser } from '../support/generate'


Cypress.Commands.add('createUser', overrides => {

   // Create a user
   const user = buildUser(overrides)
   cy.request({
      url: 'https://ticketit.dev/api/users/signup',
      method: 'POST',
      body: user
   }).then(response => ({...response.body.user, ...user}))
})



Cypress.Commands.add('signIn', user => {
   return cy.request({
      url: 'https://ticketit.dev/api/users/signin',
      method: 'POST',
      body: user
   }).then(response => {
      document.cookie.indexOf('express:sess');
      return {...response.body.user, ...user}
   })
})




Cypress.Commands.add('assertUrl', (url = '') => {
   cy.url().should('eq', `${Cypress.config().baseUrl}/${url}`)
})


Cypress.Commands.add('assertLoggedInAs', () => {
   // it should verify we have an express:sess coockie object
   cy.window()
   cy.getCookie('express:sess')
})


Cypress.Commands.add('loginAsNewUser', () => {
   cy.createUser().then(user => {
      cy.visit('/');
      // cy.findByText('Sign Out').click()
      cy.signIn(user);
   })
})





Cypress.Commands.add('createTicket', ticket => {
   cy.findByText('Sell Tickets').click()
   cy.assertUrl('tickets/new')
   cy.findByPlaceholderText('E.g NFT').type(ticket.ticket_title);
   cy.findByPlaceholderText('E.g 20$').type(ticket.price);
   cy.get('.btn').click();
   cy.findByText(ticket.ticket_title);
   cy.window()
})



