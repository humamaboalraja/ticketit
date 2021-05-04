describe('Signout', () => {
   it('Should let a user Sign out', () =>{
      cy.loginAsNewUser().then(() => {
         cy.findByText('Sign Out').click()
         cy.assertUrl('')
      })
   })
})
