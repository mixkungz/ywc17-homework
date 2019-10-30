describe('Contact Test', function() {
  it('Contact should has 3 contacts', function() {
    cy.visit('http://localhost:8000/')
    cy.get('[data-cy=contact-list]').children().should('have.length', 3)
  })
  it('Contact image should visible', function() {
    cy.visit('http://localhost:8000/')
    cy.get('[data-cy=contact-list] > :nth-child(1)').find('img').should('be.visible')
    cy.get('[data-cy=contact-list] > :nth-child(2)').find('img').should('be.visible')
    cy.get('[data-cy=contact-list] > :nth-child(3)').find('img').should('be.visible')
  })
})
