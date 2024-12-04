describe('Login', () => {

  beforeEach(() => {
    cy.goHome()
  });


  afterEach(() => {

  });

  it('Deve logar com sucesso', () => {

    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()

  })

  it('Não deve logar com senha invalida', () => {

    cy.login('papito@cyskills.com.br', 'abc123456')

    cy.NoticeHave('Oops!', 'E-mail ou senha incorretos. Por favor, tente novamente!')
  });

  it('Não deve logar com email não cadastrado', () => {

    cy.login('404@cyskills.com.br', 'abc123456')

    cy.NoticeHave('Oops!', 'E-mail ou senha incorretos. Por favor, tente novamente!')

  });

  it('Não deve logar com email incorreto', () => {

    cy.login('404Cyskills.com.br', 'abc123456')

    cy.NoticeHave('Oops!', 'O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')

  });

})
