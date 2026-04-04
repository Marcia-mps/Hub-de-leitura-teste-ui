/// <reference types= "cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/register.html')
    });

    it('Deve fazer cadastro com sucesso, usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Marcia Silva')
        cy.get('#email').type(email)
        cy.get('#phone').type('11937030208')
        cy.get('#password').type('teste@123')
        cy.get('#confirm-password').type('teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });

});

it('Deve fazer cadastro com sucesso, usando Faker', () => {
    cy.visit('http://localhost:3000/register.html')
    let nome = faker.person.fullName()
    let email = faker.internet.email()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('11937030208')
    cy.get('#password').type('teste@123')
    cy.get('#confirm-password').type('teste@123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', nome)
});

it('Deve preencher cadastro com sucesso - Usando comando customizado ', () => {
    let email = `teste${Date.now()}@teste.com`
    let nome = faker.person.fullName({ sex: 'female'})
    cy.preencherCadastro('nome', email, '11937030208', 'teste@123', 'teste@123')
    cy.url().should('include', 'dashboard')
});

