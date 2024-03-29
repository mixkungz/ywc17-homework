describe('Partner Test', function() {
  before(function() {
    const url = Cypress.config('url')
    cy.visit(url)
    cy.scrollTo(0, 500)
  })
  it('Partner should has 6 partners', function() {
    cy.get('[data-cy=partner-list]').children().should('have.length', 6)
  })
  it('Partner image should has correct image alt and link', function() {
    cy.get('[data-cy=partner-list] > :nth-child(1)').find('img').should('have.attr', 'alt', 'กระทรวงการคลัง')
    cy.get('[data-cy=partner-list] > :nth-child(1) > a').should('have.attr', 'href', 'https://www.mof.go.th/th/home')
    cy.get('[data-cy=partner-list] > :nth-child(2)').find('img').should('have.attr', 'alt', 'สำนักงานเศรษฐกิจ กระทรวงการคลัง')
    cy.get('[data-cy=partner-list] > :nth-child(2) > a').should('have.attr', 'href', 'http://www.fpo.go.th/main')
    cy.get('[data-cy=partner-list] > :nth-child(3)').find('img').should('have.attr', 'alt', 'กรมบัญชีกลาง')
    cy.get('[data-cy=partner-list] > :nth-child(3) > a').should('have.attr', 'href', 'https://www.cgd.go.th/')
    cy.get('[data-cy=partner-list] > :nth-child(4)').find('img').should('have.attr', 'alt', 'ธนาคารกรุงไทย')
    cy.get('[data-cy=partner-list] > :nth-child(4) > a').should('have.attr', 'href', 'https://www.ktb.co.th/th/personal')
    cy.get('[data-cy=partner-list] > :nth-child(5)').find('img').should('have.attr', 'alt', 'กระทรวงการท่องเที่ยวและกีฬา')
    cy.get('[data-cy=partner-list] > :nth-child(5) > a').should('have.attr', 'href', 'https://www.mots.go.th/')
    cy.get('[data-cy=partner-list] > :nth-child(6)').find('img').should('have.attr', 'alt', 'กระทรวงการท่องเที่ยวแห่งประเทศไทย')
    cy.get('[data-cy=partner-list] > :nth-child(6) > a').should('have.attr', 'href', 'https://landing.tourismthailand.org/')
  })
})
