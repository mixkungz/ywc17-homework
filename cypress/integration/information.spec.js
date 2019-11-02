describe('Information Test', function() {
  before(function() {
    const url = Cypress.config('url')
    cy.visit(url)
  })
  it('Information should has correct duration', function() {
    cy.get('[data-cy=duration]').should('contain', '27 ก.ย. - 31 ธ.ค. 62')
  })
  
})
