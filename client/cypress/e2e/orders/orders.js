import { buildTicket } from '../../support/generate'
describe('Orders', () => {
   it('Should let the user who created the product to order the ticket', () => {

      // Data Generators
      const ticket = buildTicket()
      cy.loginAsNewUser().then(() => {
         cy.createTicket(ticket)
         cy.get(`:nth-child(1) > .card > .card-body > .btn`).click()
         cy.findByText('Purchase now 😍').click();
         cy.get('span').click();
         cy.wait(2000)
         cy.get('iframe').then($iframe => {
            const doc = $iframe.contents()
            let input = doc.find('input')[0]
            cy.wrap(input).type('4242424242424242')     
            input = doc.find('input')[1]
            cy.wrap(input).clear().type('12').type('30')
            input = doc.find('input')[2]
            cy.wrap(input).type('123').type('{enter}') 
         })
         cy.wait(5000)
         cy.assertUrl('orders')
      })
   })

   it('Should let a user order ticket', () => {

      cy.loginAsNewUser().then(() => {
         cy.get(`:nth-child(${Math.floor(Math.random() * 6) + 1}) > .card > .card-body > .btn`).click()
         cy.findByText('Purchase now 😍').click();
         cy.get('span').click();
         cy.wait(2000)
         cy.get('iframe').then($iframe => {
            const doc = $iframe.contents()
            let input = doc.find('input')[0]
            cy.wrap(input).type('4242424242424242')     
            input = doc.find('input')[1]
            cy.wrap(input).clear().type('12').type('30')
            input = doc.find('input')[2]
            cy.wrap(input).type('123').type('{enter}') 
         })
         cy.wait(5000)
         cy.assertUrl('orders')
      })
   })
})
