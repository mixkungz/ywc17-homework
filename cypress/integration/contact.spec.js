describe('Contact Test', function() {
  before(function() {
    const url = Cypress.config('url')
    cy.visit(url)
    cy.scrollTo(0, 500)
  })
  it('Contact should has 3 contacts', function() {
    cy.get('[data-cy=contact-list]').children().should('have.length', 3)
  })
  it('Contact image should has correct telephone number link and has image', function() {
    cy.get('[data-cy=contact-list] > :nth-child(1)').find('img').should('have.attr', 'alt', 'กรุงไทย')
    cy.get('[data-cy=contact-list] > :nth-child(1) > a').should('have.attr', 'href', 'tel:021111144')
    cy.get('[data-cy=contact-list] > :nth-child(2)').find('img').should('have.attr', 'alt', 'กรมบัญชีกลาง')
    cy.get('[data-cy=contact-list] > :nth-child(2) > a').should('have.attr', 'href', 'tel:022706400')
    cy.get('[data-cy=contact-list] > :nth-child(3)').find('img').should('have.attr', 'alt', 'การท่องเที่ยวแห่งประเทศไทย')
    cy.get('[data-cy=contact-list] > :nth-child(3) > a').should('have.attr', 'href', 'tel:1672')
  })
})
