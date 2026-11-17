/// <reference types="cypress" />

context('Validação de logins válidos', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Validar login padrão', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should('have.text', 'Products')    
    
    });
});