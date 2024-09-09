/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    afterEach(() => {
        cy.screenshot();
    });    

    it('Deve realizar login com sucesso', () =>{
        cy.get('#username').type('fabio.teste@teste.com.br');
        cy.get('#password').type('teste@123');
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, fabio.teste (não é fabio.teste? Sair');
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{
        cy.get('#username').type('fabio@teste.com.br');
        cy.get('#password').type('teste@123');
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-error')
            .should('exist')
            .should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário');  
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.get('#username').type('fabio.teste@teste.com.br');
        cy.get('#password').type('teste@1234');
        cy.get('.woocommerce-form > .button').click();

       cy.get('.woocommerce-error')
            .should('exist')
            .should('contain', 'Erro: A senha fornecida para o e-mail fabio.teste@teste.com.br está incorreta. Perdeu a senha?');
    });
});