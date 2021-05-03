describe('App', () => {
   it('can do things', () => {
      cy.visit('/')
         .findByText('a', { name: /Sign Up/i })
         .click()
   })
})
;