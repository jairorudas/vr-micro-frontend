const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define o diretório onde os arquivos estáticos serão servidos
const staticDir = path.join(__dirname, 'public');
app.use((req, res, next) => {
  // res.setHeader('Cache-Control', 'max-age=3600');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Configura o middleware para servir arquivos estáticos
app.use(express.static(staticDir));

// Rota para página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
