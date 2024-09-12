const fs = require('fs');
const path = require('path');

/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            .contains('Apollo Running Short').click();

        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });
});