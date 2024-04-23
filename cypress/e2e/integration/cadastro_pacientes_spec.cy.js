describe('Cadastro de Pacientes', () => {
  beforeEach(() => {
    cy.fazerLogin('depaulaerik670@gmail.com', '2o73Zx9Du0C2EJ2UihUKdY');
  });

  function fillRegisterFields(cpf, cns, nomeCompleto, dataNascimento, sexo, telefoneResidencial, telefoneCelular) {
    // ifs para casos de testes em que algum campo não é preenchido
    if (cpf) {cy.get('input[name="cpf"]').type(cpf);}
    if (cns) {cy.get('input[name="cns"]').type(cns);}
    if (nomeCompleto) {cy.get('input[name="nomeCompleto"]').type(nomeCompleto);}
    if (dataNascimento) {cy.get('input[name="dataNascimento"]').type(dataNascimento);}
    if (sexo) {cy.get('input[name="sexo"]').type(sexo);}
    if (telefoneResidencial) {cy.get('input[name="telefoneResidencial"]').type(telefoneResidencial);}
    if (telefoneCelular) {cy.get('input[name="telefoneCelular"]').type(telefoneCelular);}
    cy.contains('Salvar').click();
  }


  it('Realiza um cadastro com CPF válido', () => {
    fillRegisterFields('71828285102', '931009011920004', 'Ana Beatriz', '1992-04-15', 'feminino', '(24) 3186-4685', '(55) 99968-2682');
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro com CPF inválido', () => {
    fillRegisterFields('12345678999', '931009011920004', 'Carlos Eduardo', '1990-12-31', 'masculino', '(24) 3286-4685', '(55) 99568-2682');
    cy.contains('CPF inválido').should('be.visible');
  });


  it('Realiza um cadastro com CNS válido', () => {
    fillRegisterFields('45302207613', '238813652950006', 'Maria Clara', '1985-07-29', 'feminino', '(11) 2564-9873', '(11) 99765-4789');
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro com CNS inválido', () => {
    fillRegisterFields('04562988002', '12345678901234', 'Pedro Alcântara', '1989-03-14', 'masculino', '(21) 3345-6789', '(21) 99567-8890');
    cy.contains('CNS inválido').should('be.visible');
  });

  
  it('Realiza um cadastro com data de nascimento válida', () => {
    fillRegisterFields('04562988002', '238813652950006', 'Lucas Martins', '1996-08-15', 'masculino', '(31) 3456-7890', '(31) 98765-4321');
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro com data de nascimento inválida', () => {
    fillRegisterFields('04562988002', '238813652950006', 'Fernanda Costa', '2500-10-04', 'feminino', '(35) 3421-7890', '(35) 97865-4567');
    cy.contains('Data de nascimento inválida').should('be.visible');
  });


  it('Realiza um cadastro com telefone residencial válido', () => {
    fillRegisterFields('71828285102', '183510903310001', 'João Silva', '2000-05-20', 'masculino', '(24) 3186-4685', '(55) 99968-2682');
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro com telefone residencial válido', () => {
    fillRegisterFields('71828285102', '183510903310001', 'João Silva', '2000-05-20', 'masculino', '2431864685', '55999682682');
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro com telefone residencial inválido', () => {
    fillRegisterFields('71828285102', '183510903310001', 'João Silva', '2000-05-20', 'masculino', '24318646855', '55999682682');
    cy.contains('Telefone residencial inválido').should('be.visible');
  });

  
  it('Realiza um cadastro com telefone residencial e telefone celular inválidos ', () => {
    fillRegisterFields('71828285102', '183510903310001', 'João Silva', '2000-05-20', 'masculino', 'aaaa55337259687', '55999682682baba');
    cy.contains('Telefone residencial inválido').should('be.visible');
  });


  it('Realiza um cadastro sem o campo opcional Telefone Residencial', () => {
    fillRegisterFields('71828285102', '183510903310001', 'João Silva', '2000-05-20', 'masculino', null, '(55) 99968-2682');
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro sem o campo opcional Telefone Celular', () => {
    fillRegisterFields('71828285102', '183510903310001', 'João Silva', '2000-05-20', 'masculino', '(24) 3186-4685', null);
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro sem preencher nenhum campo', () => {
    cy.contains('Salvar').click();
    cy.contains('Existem campos obrigatórios não preenchidos.').should('be.visible');
  });


  it ('Realiza um cadastro sem o campo CPF', () => {
    fillRegisterFields(null, '183510903310001', 'João Silva', '2000-05-20', 'masculino', '(24) 3186-4685', '(55) 99968-2682');
    cy.contains('CPF inválido!').should('be.visible');
  });


  it ('Realiza um cadastro sem o campo CNS', () => {
    fillRegisterFields('71828285102', null, 'João Silva', '2000-05-20', 'masculino', '(24) 3186-4685', '(55) 99968-2682');
    cy.contains('CNS inválido!').should('be.visible');
  });


  it ('Realiza um cadastro sem o campo Nome Completo', () => {
    fillRegisterFields('71828285102', '183510903310001', null, '2000-05-20', 'masculino', '(24) 3186-4685', '(55) 99968-2682');
    cy.contains('Nome inválido!').should('be.visible');
  });


  it ('Realiza um cadastro sem o campo Data de Nascimento', () => {
    fillRegisterFields('71828285102', '183510903310001', 'João Silva', null, 'masculino', '(24) 3186-4685', '(55) 99968-2682');
    cy.contains('Data de nascimento inválida!').should('be.visible');
  });


  it ('Realiza um cadastro sem o campo Sexo', () => {
    fillRegisterFields('71828285102', '183510903310001', 'João Silva', '2000-05-20', null, '(24) 3186-4685', '(55) 99968-2682');
    cy.contains('Sexo inválido').should('be.visible');
  });

});



