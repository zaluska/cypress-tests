describe('Demo - front-end tests suite', 
  function(){

    it('Perform valid login and logout', 
      function(){
          cy.visit('http://localhost:8080/hotel/faces/login/login.xhtml')
          cy.title().should('eq','Hotel Accomodation - login page')   
          cy.contains('Please, login!')     
          cy.get('#login').type('jp')
          cy.get('#senha').type('1010')
          cy.get('#loginBtn').click()
          cy.title().should('eq','Dashboard') 
          cy.contains('Dashboard')
          cy.get('.dropdown-toggle').click()
          cy.get('.dropdown-menu > li > a').click()
          cy.contains('Please, login!')
          cy.title().should('eq','Hotel Accomodation - login page')     
      })
})
