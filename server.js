const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(express.json());

// Conectar ao banco de dados MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "usuario", // Substitua por seu usuário do MySQL
  password: "senha", // Substitua pela sua senha do MySQL
  database: "notas_academicas", // Substitua pelo nome do seu banco de dados
});

// Verifica se a conexão foi bem-sucedida
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL");
  }
});

// Teste a API com um endpoint simples
app.get("/", (req, res) => {
  res.send("API está funcionando!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
