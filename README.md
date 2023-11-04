# cypress-api
Projeto de teste de API cypress

## Estrutura de diretórios

- [cypress](cypress) - Projeto de automação;

## Projeto de automação

### Instalação e Pré-Requisitos

#### Pré-requisitos:
- NodeJS.
- Editor de Texto (Vscode, Atom, Notepad++, Sublime, etc...)
- NPM
- git
- Instalar as dependencias do projeto: npm i

### Execução dos testes

Prontp de comando:
Navegar até a pasta do projeto ex:'`cd cypress-api' e executar um dos comando abaixo:

`npx cypress open` ou `npm run open`: Abrir a IDE do Cypress e apartir de lá executar os testes

`npx cypress run --reporter null` : executar os testes em headless
`npx cypress run --reporter null --spec cypress/integration/exemplo.spec.js` : executar os testes de arquivo específico em headless

`clean_reports`: "rm -rf cypress/reports && rm -rf results.json",

`clean_screenshots`: "rm -rf cypress/screenshots",