<h1 align="center">
  <img width="200" src=".github/images/logo.png" alt="logo"/>
  <br>
  <br>
  <a href="https://github.com/LuizPedroSousa/Test-filmed-backend/issues">
    <img src="https://img.shields.io/github/issues/LuizPedroSousa/Test-filmed-backend?color=0DBF97&style=for-the-badge" alt="GitHub Issues"/>
  </a>
  <a href="https://github.com/LuizPedroSousa/Test-filmed-backend/stargazers">
    <img src="https://img.shields.io/github/stars/LuizPedroSousa/Test-filmed-backend?color=0DBF97&style=for-the-badge" alt="GitHub Stars"/>
  </a>
  <a href="https://github.com/LuizPedroSousa/Test-filmed-backend/network">
    <img src="https://img.shields.io/github/forks/LuizPedroSousa/Test-filmed-backend?color=0DBF97&style=for-the-badge" alt="GitHub Forks"/>
  </a>
</h1>

<p align="center">
  <a href="#page_facing_up-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#closed_book-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#clipboard-road-map">Road map</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#man-author">Author</a>
</p>

## :page_facing_up: Sobre

Este projeto é uma simples api para controle de usuários,
da qual foi feita com carinho. 😸

Deploy feito em https://test-filmed-backend.herokuapp.com/

**OBS**
este projeto não tem a rota principal, mas você pode testar em [/ping](https://test-filmed-backend.herokuapp.com/ping)
<br/>

## :closed_book: Instalação

### Pré-Requisitos

#### Para rodar este projeto você vai precisar das seguintes ferramentas:

- <a target="_blank" href="https://git-scm.com/downloads">
    Git <img src=".github/images/git.svg" width="10"  alt="Git"/>
  </a>
- <a target="_blank" href="https://nodejs.org/pt-br/">
    Node <img src=".github/images/node-js.svg" width="10" alt="Git"/>
  </a>
- <a target="_blank" href="https://www.npmjs.com/">Npm <img src=".github/images/npm.svg" width="10" alt="Npm"/></a>
- ou <a target="_blank" href="https://yarnpkg.com/getting-started/install">Yarn <img src=".github/images/yarn.svg" width="10" alt="Yarn"/></a>
- um bom editor de código como o
  <a target="_blank" href="https://code.visualstudio.com/">
  VsCode <img src=".github/images/visualstudiocode.svg" alt="vscode" width="10"/>
  </a>
- um software para testes de api rest como <a target="_blank" href="https://insomnia.rest/">
  Insomnia <img src=".github/images/insomnia.png" alt="insomnia" width="10"/>
  </a>
- E por fim uma SMTP para desenvolvimento de preferencia
  <a target="_blank" href="https://code.visualstudio.com/">
  Mailtrap <img src=".github/images/mailtrap.svg" alt="mailtrap" width="10"/>
  </a>

### Rodando

```bash

# Clone este repositório
$ git clone https://github.com/LuizPedroSousa/Test-filmed-backend.git

# Entre na pasta
$ cd ./Test-filmed-backend

```

<p align="center">

```bash
# Com yarn

# Instale as dependências
$ yarn

# inicie o projeto!
$ yarn dev

```

```bash
# Com Npm

# Instale as dependências
$ npm install

# inicie o projeto!
$ npm run dev

```

</p>

<br/>

## 🛠 Tecnologias

- <a target="_blank" href="https://expressjs.com/">
  Express <img width="10" src=".github/images/express.svg"/>
  </a>

- <a target="_blank" href="https://www.prisma.io/">
  Prisma <img width="10" src=".github/images/prisma.png"/>
  </a>

- <a target="_blank" href="https://github.com/jquense/yup">
  Yup <img width="10" src=".github/images/yup.png"/>
  </a>

- <a target="_blank" href="https://jwt.io/">
  JsonWebToken <img width="10" src=".github/images/jwt.svg"/>
  </a>

- <a target="_blank" href="https://www.mongodb.com/pt-br">
  Mongodb <img width="10" src=".github/images/mongodb.svg"/>
  </a>

- <a target="_blank" href="https://www.typescriptlang.org/">
  Typescript <img width="10" src=".github/images/typescript.svg"/>
  </a>

<br/>

## :clipboard: Road map

- [x] Configuração de desenvolvimento
  - [x] Adicionar typescript
  - [x] Adicionar configuração para eslint e prettier
- [x] Inicio de desenvolvimento
  - [x] Configuração de Cors
  - [x] Configuração de DotEnv
  - [x] Configuração e conexão de banco de dados.
  - [x] A primeira versão deste projeto foi finalizada e feito deploy. 🎉🎉🎉
    - [x] Deploy realizado na heroku e sua url é: https://test-filmed-backend.herokuapp.com/
- [x] Utilizar arquitetura S.O.L.I.D
- [x] Aplicar pattern Singleton em repositorios
- [x] Aplicar pattern package-by-feature em useCases
- [x] Separar respostas das requisições em views
- [x] Fazer autenticação com jwt
- [x] Fazer envio de email para reset de senha
- [x] Rotas
    - [x] Autenticação com email e senha
    - [x] Cadastro de usuários
    - [x] Mostrar dados do usuário autenticado
    - [x] Deletar usuário quando autenticado
    - [x] Mostrar todos os usuários com query dinamica(id, name, email) quando autenticado
    - [x] Mostrar apenas um usuário pelo id quando autenticado
    - [x] Atualizar dados de usuário autenticado
    - [x] Rota de troca do qual apenas autentica e envia um token para o email do usuário.
    - [x] Rota de troca do qual com o token, reseta a senha do usuário.
<br/>

## :man: Author

<a target="_blank" href="https://github.com/LuizPedroSousa">
  <img src="https://avatars.githubusercontent.com/u/62396753?s=460&u=2b00598abce2cd6c536d26c2ee8f45b6de332527&v=4" alt ="avatar" style="border-radius: 50%;" width="100px">
  <br/>
</a>
<p>Feito com 💜 por <a href="https://github.com/LuizPedroSousa">Luiz Pedro</a> 😸 Entre em contanto!</p>

[![Gmail Badge](https://img.shields.io/badge/-luizpedrosousa64@gmail.com-5965E0?style=flat-square&logo=Gmail&logoColor=white&link=mailto:luizpedrosousa64@gmail.com)](mailto:luizpedrosousa64@gmail.com)
