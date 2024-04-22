## Testes para um site de sistema de cadastros

Este repositório contém um projeto de automação de testes para um sistema de cadastro de pacientes. O projeto utiliza Cypress para implementar testes end-to-end.

## Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end.
- **Node.js**: Ambiente de execução JavaScript.

## Configuração Inicial

Antes de começar a usar é preciso configurar o ambiente local. Siga as instruções abaixo para configurar.

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Caso não tenha, você pode instalar através do [site oficial do Node.js](https://nodejs.org/).

### Instalação

Clone o repositório para sua máquina local usando:

```bash
git clone https://github.com/erikorsolin/testes-cadastros-de-pacientes.git
```

## Navegue até o diretório do projeto

Abra o terminal e execute o seguinte comando para navegar até o diretório do projeto:

```bash
cd testes-cadastros-de-pacientes
```

## Instale as dependências do projeto

```bash
npm install cypress
```

## Executando os testes
Para executar os testes automatizados, utilize o seguinte comando:
```bash
npx cypress open

```

Isso abrirá a interface do Cypress, onde é possível executar e visualizar os resultados dos testes. Use `e2e`, os testes estarão em `integration` 