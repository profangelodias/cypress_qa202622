/// <reference types="cypress" />

describe('Capturar Elementos', () => {
    it('Inserir um Treinador QUALQUER', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        cy.get('[data-cy="input-username"]').type('Ash')
        cy.get('[data-cy="input-password"]').type('123')
        cy.get('[data-cy="input-pokeinit"]').type('Pikachu')
        cy.get('[data-cy="botao-login"]').click()
        cy.get('#mensagem-feedback').should('have.text','Login de Ash TREINADOR QUALQUER efetuado com sucesso!')
    });

    it('Inserir um Treinador CLÁSSICO', () => {
         cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
         cy.get('[data-cy="input-username"]').type('Ash K');
         cy.get('[data-cy="input-password"]').type('12345');
         cy.get('[data-cy="input-pokeinit"]').type('Pikachu');
         cy.get('[data-cy="botao-login"]').click();
         cy.get('#secao-info p:nth-child(5)').should('have.text', 'Escolha o Treinador Clássico da lista ou digite um qualquer!');
    });
});