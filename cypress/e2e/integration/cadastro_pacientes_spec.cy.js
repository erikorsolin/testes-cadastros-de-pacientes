describe('Cadastro de Pacientes', () => {
  beforeEach(() => {
    cy.fazerLogin('depaulaerik670@gmail.com', '2o73Zx9Du0C2EJ2UihUKdY');
  });


  it('Realiza um cadastro com CPF válido', () => {
    cy.get('input[name="cpf"]').type('70902006479');  
    cy.get('input[name="cns"]').type('931009011920004'); 
    cy.get('input[name="nomeCompleto"]').type('Ana Beatriz');
    cy.get('input[name="dataNascimento"]').type('1992-04-15');  
    cy.get('input[name="sexo"]').type('feminino');
    cy.get('input[name="telefoneResidencial"]').type('(32) 3025-6712');
    cy.get('input[name="telefoneCelular"]').type('(32) 99865-2145');
    cy.contains('Salvar').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro com CPF inválido', () => {
    cy.get('input[name="cpf"]').type('12345678999');  
    cy.get('input[name="cns"]').type('980236174580001'); 
    cy.get('input[name="nomeCompleto"]').type('Carlos Eduardo');
    cy.get('input[name="dataNascimento"]').type('1990-12-31');  
    cy.get('input[name="sexo"]').type('masculino');
    cy.get('input[name="telefoneResidencial"]').type('(21) 3256-7890');
    cy.get('input[name="telefoneCelular"]').type('(21) 99456-7890');
    cy.contains('Salvar').click();
    cy.contains('CPF inválido').should('be.visible');
  });


  it('Realiza um cadastro com CNS válido', () => {
    cy.get('input[name="cpf"]').type('45302207613');  
    cy.get('input[name="cns"]').type('238813652950006'); 
    cy.get('input[name="nomeCompleto"]').type('Maria Clara');
    cy.get('input[name="dataNascimento"]').type('1985-07-29');  
    cy.get('input[name="sexo"]').type('feminino');
    cy.get('input[name="telefoneResidencial"]').type('(11) 2564-9873');
    cy.get('input[name="telefoneCelular"]').type('(11) 99765-4789');
    cy.contains('Salvar').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro com CNS inválido', () => {
    cy.get('input[name="cpf"]').type('04562988002');  
    cy.get('input[name="cns"]').type('12345678901234'); // CNS com dígitos faltando
    cy.get('input[name="nomeCompleto"]').type('Pedro Alcântara');
    cy.get('input[name="dataNascimento"]').type('1989-03-14');  
    cy.get('input[name="sexo"]').type('masculino');
    cy.get('input[name="telefoneResidencial"]').type('(21) 3345-6789');
    cy.get('input[name="telefoneCelular"]').type('(21) 99567-8890');
    cy.contains('Salvar').click();
    cy.contains('CNS inválido').should('be.visible');
  });

  
  it('Realiza um cadastro com data de nascimento válida', () => {
    cy.get('input[name="cpf"]').type('04562988002');  
    cy.get('input[name="cns"]').type('238813652950006'); 
    cy.get('input[name="nomeCompleto"]').type('Lucas Martins');
    cy.get('input[name="dataNascimento"]').type('1996-08-15');  
    cy.get('input[name="sexo"]').type('masculino');
    cy.get('input[name="telefoneResidencial"]').type('(31) 3456-7890');
    cy.get('input[name="telefoneCelular"]').type('(31) 98765-4321');
    cy.contains('Salvar').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro com data de nascimento inválida', () => {
    cy.get('input[name="cpf"]').type('04562988002');  
    cy.get('input[name="cns"]').type('238813652950006'); 
    cy.get('input[name="nomeCompleto"]').type('Fernanda Costa');
    cy.get('input[name="dataNascimento"]').type('2500-10-04'); 
    cy.get('input[name="sexo"]').type('feminino');
    cy.get('input[name="telefoneResidencial"]').type('(35) 3421-7890');
    cy.get('input[name="telefoneCelular"]').type('(35) 97865-4567');
    cy.contains('Salvar').click();
    cy.contains('Data de nascimento inválida').should('be.visible');
  });


  it('Realiza um cadastro com telefone residencial válido', () => {
    cy.get('input[name="cpf"]').type('71828285102');  
    cy.get('input[name="cns"]').type('183510903310001'); 
    cy.get('input[name="nomeCompleto"]').type('João Silva');
    cy.get('input[name="dataNascimento"]').type('2000-05-20');  
    cy.get('input[name="sexo"]').type('masculino');
    cy.get('input[name="telefoneResidencial"]').type('(24) 3186-4685');
    cy.get('input[name="telefoneCelular"]').type('(55) 99968-2682');
    cy.contains('Salvar').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro com telefone residencial válido', () => {
    cy.get('input[name="cpf"]').type('71828285102');  
    cy.get('input[name="cns"]').type('183510903310001'); 
    cy.get('input[name="nomeCompleto"]').type('João Silva');
    cy.get('input[name="dataNascimento"]').type('2000-05-20');  
    cy.get('input[name="sexo"]').type('masculino');
    cy.get('input[name="telefoneResidencial"]').type('2431864685'); 
    cy.get('input[name="telefoneCelular"]').type('55999682682');    
    cy.contains('Salvar').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro com telefone residencial inválido', () => {
    cy.get('input[name="cpf"]').type('71828285102');  
    cy.get('input[name="cns"]').type('183510903310001'); 
    cy.get('input[name="nomeCompleto"]').type('João Silva');
    cy.get('input[name="dataNascimento"]').type('2000-05-20');  
    cy.get('input[name="sexo"]').type('masculino');
    cy.get('input[name="telefoneResidencial"]').type('24318646855'); 
    cy.get('input[name="telefoneCelular"]').type('55999682682');    
    cy.contains('Salvar').click();
    cy.contains('Telefone residencial inválido').should('be.visible');
  });

  
  it('Realiza um cadastro com telefone residencial e telefone celular inválidos ', () => {
    cy.get('input[name="cpf"]').type('71828285102');  
    cy.get('input[name="cns"]').type('183510903310001'); 
    cy.get('input[name="nomeCompleto"]').type('João Silva');
    cy.get('input[name="dataNascimento"]').type('2000-05-20');  
    cy.get('input[name="sexo"]').type('masculino');
    cy.get('input[name="telefoneResidencial"]').type('aaaa55337259687'); 
    cy.get('input[name="telefoneCelular"]').type('55999682682baba');    
    cy.contains('Salvar').click();
    cy.contains('Telefone residencial inválido').should('be.visible');
  });


  it('Realiza um cadastro sem o campo opcional Telefone Residencial', () => {
    cy.get('input[name="cpf"]').type('71828285102');  
    cy.get('input[name="cns"]').type('183510903310001'); 
    cy.get('input[name="nomeCompleto"]').type('João Silva');
    cy.get('input[name="dataNascimento"]').type('2000-05-20');  
    cy.get('input[name="sexo"]').type('masculino');
    cy.get('input[name="telefoneCelular"]').type('(55) 99968-2682');
    cy.contains('Salvar').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro sem o campo opcional Telefone Celular', () => {
    cy.get('input[name="cpf"]').type('71828285102');  
    cy.get('input[name="cns"]').type('183510903310001'); 
    cy.get('input[name="nomeCompleto"]').type('João Silva');
    cy.get('input[name="dataNascimento"]').type('2000-05-20');  
    cy.get('input[name="sexo"]').type('masculino');
    cy.get('input[name="telefoneResidencial"]').type('(24) 3186-4685');
    cy.contains('Salvar').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });


  it('Realiza um cadastro sem preencher nenhum campo', () => {
    cy.contains('Salvar').click();
    cy.contains('Existem campos obrigatórios não preenchidos.').should('be.visible');
  });


});



