import { buildTicket } from '../../support/generate'
describe('Tickets', () => {
   it('Should let a user create a ticket', () => {

      // Data Generators
      const ticket = buildTicket()
      cy.loginAsNewUser().then(() => {
         cy.findByText('Sell Tickets').click()
         // cy.pause()
         cy.assertUrl('tickets/new')
         cy.findByPlaceholderText('E.g NFT').type(ticket.ticket_title);
         cy.findByPlaceholderText('E.g 20$').type(ticket.price);
         cy.get('.btn').click();
         cy.findByText(ticket.ticket_title);
         cy.window()
         cy.findByText('Tickets')
      })
   })
   it('Should return not authorized error when user is not logged in', () => {

      // Data Generators      
      // cy.findByText('Sell Tickets').click()
      // cy.pause()
      cy.get(`:nth-child(${Math.floor(Math.random() * 6) + 1}) > .card > .card-body > .btn`).click()
      cy.findByText('Purchase now 😍').click();
      cy.findByText('Not authorized')
   })

   it('Should return not authorized error when user is not logged in but trying to create a ticket', () => {

      cy.findByText('Sell Tickets').click()
      cy.findByText('Purchase now 😍').click();
      cy.findByText('Not authorized')
   })
})
