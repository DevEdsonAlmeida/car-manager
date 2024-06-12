
### README.md

```markdown
# Car Manager API

Este é um projeto de API RESTful para gerenciamento de carros utilizando Node.js, Express, Sequelize e MySQL. A API permite a criação, leitura, atualização e exclusão (CRUD) de proprietários de carros e seus respectivos veículos.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- dotenv
- Nodemon

## Estrutura do Projeto

```plaintext
car-manager/
├── config/
│   └── config.js
├── controllers/
│   ├── carController.js
│   └── ownerController.js
├── migrations/
│   ├── [timestamp]-create-owner.js
│   └── [timestamp]-create-car.js
├── models/
│   ├── car.js
│   ├── index.js
│   └── owner.js
├── routes/
│   ├── carRoutes.js
│   └── ownerRoutes.js
├── seeders/
│   ├── [timestamp]-demo-owner.js
│   └── [timestamp]-demo-car.js
├── .env
├── .sequelizerc
├── index.js
├── package.json
└── package-lock.json
```

## Configuração do Ambiente de Desenvolvimento

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/car-manager.git
   cd car-manager
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o banco de dados:**

   Certifique-se de que o MySQL está instalado e em execução. Crie um banco de dados chamado `car-manager`.

4. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```plaintext
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=car_manager
   DB_DIALECT=mysql
   DB_PORT=3306
   PORT=3000
   ```

5. **Inicialize o Sequelize:**

   Execute as migrações e os seeders para configurar o banco de dados:

   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

6. **Inicie o servidor:**

   Utilize o Nodemon para iniciar o servidor e habilitar recarregamento automático:

   ```bash
   npx nodemon index.js
   ```

## Endpoints da API

### Proprietários

- **Criar Proprietário**

  - **URL:** `/owners`
  - **Método:** POST
  - **Corpo (JSON):**
    ```json
    {
      "name": "João Silva",
      "email": "joao@example.com"
    }
    ```

- **Listar Proprietários**

  - **URL:** `/owners`
  - **Método:** GET

- **Atualizar Proprietário**

  - **URL:** `/owners/:id`
  - **Método:** PUT
  - **Corpo (JSON):**
    ```json
    {
      "name": "João da Silva",
      "email": "joao.silva@example.com"
    }
    ```

- **Excluir Proprietário**

  - **URL:** `/owners/:id`
  - **Método:** DELETE

### Carros

- **Criar Carro**

  - **URL:** `/cars`
  - **Método:** POST
  - **Corpo (JSON):**
    ```json
    {
      "make": "Toyota",
      "model": "Corolla",
      "year": 2022,
      "ownerId": 1
    }
    ```

- **Listar Carros**

  - **URL:** `/cars`
  - **Método:** GET

- **Atualizar Carro**

  - **URL:** `/cars/:id`
  - **Método:** PUT
  - **Corpo (JSON):**
    ```json
    {
      "make": "Toyota",
      "model": "Corolla",
      "year": 2023,
      "ownerId": 1
    }
    ```

- **Excluir Carro**

  - **URL:** `/cars/:id`
  - **Método:** DELETE

## Testando a API com Insomnia

1. **Criar um Proprietário:**

   - Método: POST
   - URL: `http://localhost:3000/owners`
   - Corpo (JSON):
     ```json
     {
       "name": "João Silva",
       "email": "joao@example.com"
     }
     ```

2. **Listar Proprietários:**

   - Método: GET
   - URL: `http://localhost:3000/owners`

3. **Atualizar um Proprietário:**

   - Método: PUT
   - URL: `http://localhost:3000/owners/{id}`
   - Corpo (JSON):
     ```json
     {
       "name": "João da Silva",
       "email": "joao.silva@example.com"
     }
     ```

4. **Excluir um Proprietário:**

   - Método: DELETE
   - URL: `http://localhost:3000/owners/{id}`

5. **Criar um Carro:**

   - Método: POST
   - URL: `http://localhost:3000/cars`
   - Corpo (JSON):
     ```json
     {
       "make": "Toyota",
       "model": "Corolla",
       "year": 2022,
       "ownerId": 1
     }
     ```

6. **Listar Carros:**

   - Método: GET
   - URL: `http://localhost:3000/cars`

7. **Atualizar um Carro:**

   - Método: PUT
   - URL: `http://localhost:3000/cars/{id}`
   - Corpo (JSON):
     ```json
     {
       "make": "Toyota",
       "model": "Corolla",
       "year": 2023,
       "ownerId": 1
     }
     ```

8. **Excluir um Carro:**

   - Método: DELETE
   - URL: `http://localhost:3000/cars/{id}`

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Faça um fork do repositório, crie um branch para suas modificações e envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
```

Esse arquivo `README.md` fornece uma visão geral clara do projeto, instruções de configuração, detalhes sobre como usar a API e informações sobre como contribuir. Coloque esse arquivo na raiz do seu projeto (`car-manager/`) para que outros desenvolvedores possam facilmente entender e utilizar seu projeto.