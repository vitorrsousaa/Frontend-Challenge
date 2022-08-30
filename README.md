# MKS - Frontend Challenge

<h4 align="center">
	🚧  MKS Frontend Challenge 🚀 Em andamento ..... 🚧
</h4>

## Tópicos

<div>
 • <a href="#-sobre-o-frontend-challenge">Sobre o Frontend Challenge</a> </br>
 • <a href="#-tecnologias">Tecnologias</a> </br>
 • <a href="#-ferramentas-requeridas">Ferramentas requeridas</a> </br>
 • <a href="#-estrutura-de-pastas">Estrutura de pastas</a> </br>
 • <a href="#-como-executar-o-projeto">Como executar</a> </br>
 • <a href="#-autor">Autor</a> </br>
 • <a href="#user-content--licença">Licença</a></br>
</div>

## 💻 Sobre o Frontend Challenge

Para esse desafio, você deve consumir nossa API REST de produtos para exibir a lista de produtos da loja.

A aplicação deve conter apenas uma página/rota e um carrinho.

Loja: A lista de produtos deve ser buscada de nossa API, use um shimmer/skeleton enquanto estiver em loading.

Carrinho: O carrinho deve conter todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto selecionado.

Use do Jest e a testing-library para realizar os testes unitários.

Com o objetivo de avaliar sua capacidade de escrever código limpo, bem testado e reutilizável.

## 🚀 Tecnologias

Tecnologias e ferramentas utilizadas no desenvolvimento do projeto:

#### **Website** ( [Next](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) )

- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://github.com/axios/axios)
- [StyledComponents](https://styled-components.com/)
- [React Redux](https://react-redux.js.org/)
- [React Toolkit](https://redux-toolkit.js.org/)
- [React Loading Skeleton](https://github.com/dvtng/react-loading-skeleton)

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** → **[Protótipo (Frontend Challenge](https://www.figma.com/file/Z4z8osDbK1ET7cjNzFRMrK/MKS-Front-end-challenge?node-id=0%3A1)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[Prettier](https://prettier.io/)**
- Fontes: **[Montserrat](https://fonts.google.com/specimen/Montserrat)**
- Versionamento: **[Git](https://git-scm.com)**

## 🛠️ Ferramentas requeridas

- [x] TypeScript;
- [x] NextJS;
- [x] Redux Toolkit;
- [x] Styled Components;
- [ ] Jest;

## 📂 Estrutura de pastas e componentes

Afim de facilitar a organização e manutenção do código, foi definido um padrão para organização das pastas neste projeto.

→ \_assets: Contém a estilização global, icones, UI e Imagens; <br />
→ components: Todos os componentes globais do projeto; <br />
→ context: Armazena os contextos da aplicação; <br />
→ pages: Armazena as páginas da aplicação; <br />
→ services: Todos os acessos externos da aplicação; <br />
→ interfaces: Armazena todas as interfaces globais da aplicaçao dentro de um arquivo index; <br />
→ redux: Vai armazenar cada features do estado global do reducer; <br />

Todos os componentes criados vão seguir uma mesma estrutura de organização:
→ index.tsx: Responsável por exportar o componente; <br />
→ interface.ts: Responsável por exportar as interfaces; <br />
→ style.ts: StyledComponents do componente; <br />

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/vitorrsousaa/BeautyPlanner-Client.git

# Vá para a pasta da aplicação Front End
$ cd client

# Instale as dependências
yarn install

# Rode a aplicação
yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

## 🧑🏻 Autor

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/94024958?v=4" width="100px;" alt=""/>
 <b>Vitor Sousa</b>🚀
<br />

Feito por Vitor Sousa 👋🏻 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Vitor%20Sousa-ff512f?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitorr-sousaa//)](https://www.linkedin.com/in/vitorr-sousaa//)
[![Gmail Badge](https://img.shields.io/badge/-v.sousa.cf@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:v.sousa.cf@gmail.com)](mailto:v.sousa.cf@gmail.com)

## 📝 Licença
