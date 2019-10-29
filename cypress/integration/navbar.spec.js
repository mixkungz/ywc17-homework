describe('Navbar Test', function() {
  it('Navbar should has 3 menus', function() {
    cy.visit('http://localhost:8000/')
    cy.get('[data-cy=menu]').children().should('have.length', 3)
  })
  it('Each menu should has correct label and link', function() {
    cy.visit('http://localhost:8000/')
    cy.get('[data-cy=menu] > :nth-child(1)').should('contain', 'ลงทะเบียนเข้าร่วมมาตรการ')
    cy.get('[data-cy=menu] > :nth-child(1)').should('have.attr', 'href', 'https://regist.ชิมช้อปใช้.com/Register/')

    cy.get('[data-cy=menu] > :nth-child(2)').should('contain', 'ขั้นตอนการเข้าร่วม')
    cy.get('[data-cy=menu] > :nth-child(2)').should('have.attr', 'href', 'https://www2.ชิมช้อปใช้.com/howto-register')

    cy.get('[data-cy=menu] > :nth-child(3)').should('contain', 'ร้านค้าที่เข้าร่วม')
    cy.get('[data-cy=menu] > :nth-child(3)').should('have.attr', 'href', 'https://www2.ชิมช้อปใช้.com/thung-ngern-shop-province')
  })
})
