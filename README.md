## Front-end - Challenge GYPZ

```
Nodejs
node : v10.15.3
yarn  : 1.17.3
```

Front-end para gerenciar solicitações de cartões de crédito.

1. [Instalação](#installation)
2. [Estrutura do Projeto](#concept-of-structure)
    1. [Sobre Public](#public-folder)
    2. [Sobre Assets](#assets-folder)
    3. [Sobre Components](#components-folder)
    4. [Sobre Config](#config-folder)
    5. [Sobre Pages](#pages-folder)
    6. [Sobre Services](#services-folder)
    7. [Sobre Styles](#styles-folder)
3. [Dependências do projeto](#dependencies)


## Instalação

Para instalar as dependências utilize as linhas de comando do [`yarn`](https://yarnpkg.com/en/).

```sh
yarn install
```

Crie o arquivo `.env` de acordo com o arquivo `.env.example`.

No arquivo `.env` é possível utilizar a API que está disponível no endereço [`https://gypzchallenge-backend.herokuapp.com/`](https://gypzchallenge-backend.herokuapp.com/) em um servidor disponível no [Heroku](https://www.heroku.com), ou, se preferir, você pode baixar e configurar a API localmente através deste [repositório](https://github.com/analimazn/gypzchallenge-backend).


Para esse projeto foi utilizado a lib javascript [`React`](https://reactjs.org/).


## Estrutura do projeto

```
├── public
│   ├── dot.png
│   └── index.html
├── README.md
├── src
│   ├── App.js
│   ├── assets
│   │   └── images
│   │       ├── cards-b&w.png
│   │       ├── cards-circle.png
│   │       ├── cards-hand-b&w.png
│   │       ├── cards-hand.png
│   │       └── cards.png
│   ├── components
│   │   ├── Card
│   │   │   ├── Card.js
│   │   │   └── CardStyle.js
│   │   ├── Form
│   │   │   ├── Form.js
│   │   │   └── FormStyle.js
│   │   ├── Header
│   │   │   ├── Header.js
│   │   │   └── HeaderStyle.js
│   │   └── List
│   │       ├── List.js
│   │       └── ListStyle.js
│   ├── config
│   │   └── FormValidation.js
│   ├── index.js
│   ├── pages
│   │   └── Home
│   │       ├── Home.js
│   │       └── HomeStyle.js
│   ├── services
│   │   └── api.js
│   └── styles
│       └── globals.js

```


### Diretório **public**

O diretório `public` armazena o `index.html` utilizado no projeto.


### Diretório **src/assets**

O diretório de `assets` é responsável por armazenar todos os conteúdos estáticos utilizados no projeto.


### Diretório **src/components**

O diretório de `components` é responsável por armazenar todos os componentes criados no projeto. Cada componente possui seu próprio diretório onde temos o arquivo de `style` com as informações de estilização e o arquivo do componente em si, onde as informações necessárias são renderizadas.

Sobre os componentes:

**Card** -> Responsável por renderizar as informações das solicitações que foram realizadas.

**Form** -> Formulário utilizado para que possa ser feito o envio de uma nova solicitação de cartão de crédito. Para validar os dados utiliza-se um objeto `schema` localizado no diretório `config`.

**Header** -> Aqui temos a renderização do logo e demais informações sobre a aplicação.

**List** -> Responsável por renderizar todos os `cards` com as informações das solicitações salvas. Aqui também é possível remover as solicitações.

### Diretório **src/config**

O diretório de `config` contém o `schema` criado a partir da biblioteca [Yup](https://github.com/jquense/yup) para validar os dados da requisição antes de enviar a requisição para a API.


### Diretório **src/pages**

O diretório de `pages` é responsável por renderizar todas as páginas do projeto a partir dos componentes criados em `components`. Toda página possui seu próprio diretório, com arquivo de `style` para estilização e o arquivo da página em si.

**Home** -> Responsável por renderizar todo o conteúdo e verificar qual informação o usuário deseja, se é listar todas as solicitações feitas ou enviar uma nova.


### Diretório **src/services**

O diretório de `services` é responsável por conectar nossa aplicação à API responsável pelas requisições REST do projeto.


### Diretório **src/styles**

O diretório de `styles` é responsável pelos arquivos de estilização que englobam todos os componentes do projeto.

Após a instalação estar completa e o arquivo `.env` estar devidamente preenchido, para rodar o projeto localmente digite o comando:

```sh
yarn start
```

ou

```sh
npm start
```

O projeto rodará localmente no endereço [http://localhost:3000/](http://localhost:3000/) ou [http://localhost:3001/](http://localhost:3001/), caso você esteja rodando a API localmente, mas é possível conferí-lo online no endereço [https://gypzchallenge-frontend.herokuapp.com/](https://gypzchallenge-frontend.herokuapp.com/) onde está armazenado em um servidor no [Heroku](https://www.heroku.com)


## Dependências

- [axios](https://ghub.io/axios): Biblioteca responsável por realizar requisições HTTP.
- [formik](https://ghub.io/formik): Biblioteca responsável por criar e validar formulários.
- [moment](https://ghub.io/moment): Biblioteca responsável po validar e manipular datas.
- [react](https://ghub.io/react): Biblioteca Javascript para construir interfaces.
- [styled-components](https://ghub.io/styled-components): Biblioteca utilizada para renderizar CSS nos componentes do React.
- [yup](https://ghub.io/yup): Objeto com função de `schema` utilizado para validar Objetos Javascript.
