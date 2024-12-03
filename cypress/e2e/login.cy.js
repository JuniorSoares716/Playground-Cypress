describe('Login', () => {

  beforeEach(() => {
    cy.viewport(1440, 900)

    cy.visit('https://playground.cyskills.com.br')

    cy.contains('h2', 'Faça login')
  });


  afterEach(() => {

  });

  it('Deve logar com sucesso', () => {

    cy.login('papito@cyskills.com.br', 'showtime')

    cy.get('[data-cy="welcome-title"]')
      .should('be.visible')
      .and('have.text', 'Boas vindas ao Cypress Playground')
  })

  it('Não deve logar com senha invalida', () => {

    cy.login('papito@cyskills.com.br', 'abc123456')

    cy.NoticeHave('Oops!','E-mail ou senha incorretos. Por favor, tente novamente!')
  });

  it('Não deve logar com email não cadastrado', () => {

    cy.login('404@cyskills.com.br', 'abc123456')

    cy.NoticeHave('Oops!','E-mail ou senha incorretos. Por favor, tente novamente!')

  });

  it('Não deve logar com email incorreto', () => {

    cy.login('404Cyskills.com.br', 'abc123456')

    cy.NoticeHave('Oops!','O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
 
  });

})

Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-cy="email"]').type(email)
  cy.get('[data-cy="password"]').type(password)
  cy.get('[data-cy="login-button"]').click()
});

// !cyComm
Cypress.Commands.add('Command name here', () => {
  // Write your command here
});

Cypress.Commands.add('NoticeHave', (texth1, textMsg) => {
  cy.get('.notice h4')
    .should('be.visible')
    .and('have.text', texth1)

  cy.get('.notice p')
    .should('be.visible')
    .and('have.text', textMsg)
});