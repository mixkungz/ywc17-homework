describe('Footer Test', function() {
  before(function() {
    const url = Cypress.config('url')
    cy.visit(url)
    cy.scrollTo(0, 500)
  })
  it('Registration personal group information should has telephone link to ktb callcenter', function() {
    cy.get(`[data-cy=footer] [data-cy=ktb-phonenumber]`).should('have.attr', 'href', 'tel:021111144')
  })
  it('Registration corperate group information should has telephone link to CGD callcenter', function() {
    cy.get(`[data-cy=footer] [data-cy=cgd-phonenumber]`).should('have.attr', 'href', 'tel:022706400')
  })
  it('More information about travel campaign should has telephone link to TAT callcenter', function() {
    cy.get(`[data-cy=footer] [data-cy=tat-phonenumber]`).should('have.attr', 'href', 'tel:1672')
  })
  
})
