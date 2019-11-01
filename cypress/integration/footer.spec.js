describe('Footer Test', function() {
  it('Registration personal group information should has telephone link to ktb callcenter', function() {
    cy.visit('http://localhost:8000/')
    cy.get(`[data-cy=footer] [data-cy=ktb-phonenumber]`).should('have.attr', 'href', 'tel:021111144')
  })
  it('Registration corperate group information should has telephone link to CGD callcenter', function() {
    cy.visit('http://localhost:8000/')
    cy.get(`[data-cy=footer] [data-cy=cgd-phonenumber]`).should('have.attr', 'href', 'tel:022706400')
  })
  it('More information about travel campaign should has telephone link to TAT callcenter', function() {
    cy.visit('http://localhost:8000/')
    cy.get(`[data-cy=footer] [data-cy=tat-phonenumber]`).should('have.attr', 'href', 'tel:1672')
  })
  
})
