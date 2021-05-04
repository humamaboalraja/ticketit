describe('Authenticated User', () => {
   it('Displays Sign Out', () => {
      cy.loginAsNewUser().then(() => {
         cy.visit('/');
         cy.assertUrl('')
         cy.findByText('Sign Out').click()
         cy.findByText('Sign Out').should('not.exist')
      })
   })
})
