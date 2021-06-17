<h1 align="center">
  $$ Dollar Quote $$
  <br></br>
<p align="center">
<img alt="Node.js" src="https://img.shields.io/badge/-Node.js-43853d?style=for-the-badge&logo=Node-dot-js&logoColor=white" />
<img alt="GraphQL" src="https://img.shields.io/badge/-GraphQL-E434AA?style=for-the-badge&logo=graphql&logoColor=white" />
<img alt="SQLite" src="https://img.shields.io/badge/-SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" />
<img alt="Insomnia" src="https://img.shields.io/badge/-Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white" />
</p>
</h1>

This consists of an API used to get the dollar quote on a given day. The requests are logged in a sqlite database. 

## Demo
### Successfull Response
<p align="center">
    <img src="./docs/response-ok.png" width="100%"/>
</p>

### Quote Not Found
<p align="center">
    <img src="./docs/response-not-found.png" width="100%" />
</p>

## Getting Started

### **Prerequisites**

- It is **necessary** to have **[Node.js](https://nodejs.org/en/)** installed on the machine;
- Also, it is **necessary** to have a package manager either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**;

### **Running**

1. Make a clone:

```sh
   git clone https://github.com/amintasvrp/dollar-quote.git
```

2. Running the Application:

```sh
  cd dollar-quote
  # Install dependencies
  npm install
  # Launch the API
  npm start
```

3. (OPTIONAL) Running the Application as Docker containers:

```sh
  cd core
  # Build image
  docker build -t dollar-quote .
  # Run API container
  docker run -d -it -p 4000:4000 --name dollar-quote dollar-quote
```

## Contributing

Make a pull request and make clear what changes have been made and which bugs persist. Do not introduce bugs, be proactive!

## Licenses

- **MIT License** - [_Ver detalhes_](./LICENSE.txt)
