context('search page', () => {
  it('visit', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/buscar')
    cy.contains('Agendar uma consulta')
    cy.get('.search-input').type('ansiedade')
    cy.get(':nth-child(2) > .ant-select-selector').find('span').contains('Experiência')
    cy.get('.search-input').clear()
    cy.get('.search-input').type('borderline')
  })
})