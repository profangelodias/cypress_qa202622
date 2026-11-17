/// <reference types="cypress" />

context('Validação de logins inválidos', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Validar usuário em branco', () => {
        cy.get('[data-test="username"]').clear()
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')    
    
    });

    it('Validar senha em branco', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').clear()
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')    
    
    });
});