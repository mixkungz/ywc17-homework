describe('Information Test', function() {
  it('Information should has correct duration', function() {
    cy.visit('http://localhost:8000/')
    cy.get('[data-cy=duration]').should('contain', '27 ก.ย. - 31 ธ.ค. 62')
  })
  
})
