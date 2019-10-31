describe('Partner Test', function() {
  it('Partner should has 6 partners', function() {
    cy.visit('http://localhost:8000/')
    cy.get('[data-cy=partner-list]').children().should('have.length', 6)
  })
  it('Partner image should has correct image alt', function() {
    cy.visit('http://localhost:8000/')
    cy.get('[data-cy=partner-list] > :nth-child(1)').find('img').should('have.attr', 'alt', 'กระทรวงการคลัง')
    cy.get('[data-cy=partner-list] > :nth-child(2)').find('img').should('have.attr', 'alt', 'สำนักงานเศรษฐกิจ กระทรวงการคลัง')
    cy.get('[data-cy=partner-list] > :nth-child(3)').find('img').should('have.attr', 'alt', 'กรมบัญชีกลาง')
    cy.get('[data-cy=partner-list] > :nth-child(4)').find('img').should('have.attr', 'alt', 'ธนาคารกรุงไทย')
    cy.get('[data-cy=partner-list] > :nth-child(5)').find('img').should('have.attr', 'alt', 'กระทรวงการท่องเที่ยวและกีฬา')
    cy.get('[data-cy=partner-list] > :nth-child(6)').find('img').should('have.attr', 'alt', 'กระทรวงการท่องเที่ยวแห่งประเทศไทย')
  })
})
