/// <reference types="cypress" />

describe('Testando a aplicação da agenda-contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve adicionar um novo contato a lista', () => {
    cy.get('[type="text"]').type('Teste')
    cy.get('[type="email"]').type('teste@teste.com')
    cy.get('[type="tel"]').type('11914572381')
    cy.get('.adicionar').click()

    cy.contains('Teste').should('exist')
    cy.contains('teste@teste.com').should('exist')
    cy.contains('11914572381').should('exist')
    cy.screenshot('teste-inclusao')
  })

  it('Deve alterar o nome do contato adicionado no teste de inclusão', () => {
    cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear().type('Teste alterado')
    cy.get('[type="email"]').clear().type('alterado@alterado.com')
    cy.get('[type="tel"]').clear().type('11987654321')
    cy.get('.alterar').click()

    cy.contains('Teste alterado').should('exist')
    cy.contains('alterado@alterado.com').should('exist')
    cy.contains('11987654321').should('exist')
    cy.screenshot('alterando-teste-inclusao')
  })

  it('Deve remover o teste alterado', () => {
    cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()

    cy.contains('Teste alterado').should('not.exist')
    cy.screenshot('removendo-teste-alterado')
  })
})