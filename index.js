const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

dotenv.config();

const app = express();
app.use(express.json());

const ownerRoutes = require('./routes/ownerRoutes');
const carRoutes = require('./routes/carRoutes');

app.use('/owners', ownerRoutes);
app.use('/cars', carRoutes);

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('A conexão com o banco de dados foi estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
});
