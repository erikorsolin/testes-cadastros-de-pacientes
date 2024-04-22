// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fazerLogin', (usuario, senha) => {
  cy.visit('https://desafio.qa.bridge.ufsc.br');
  cy.get('input[id="usuario"]').type(usuario);
  cy.get('input[id="password"]').type(senha);
  cy.get('input[id="termos-de-uso"]').check();
  cy.get('button.btn-acessar').click();
  cy.url().should('include', '/orientacoes');
  cy.contains('Iniciar desafio').click(); 
  cy.url().should('include', '/cadastro');
});

