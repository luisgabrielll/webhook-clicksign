const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Rota GET: Olá, mundo!");
});

app.post("/webhook", (req, res) => {
  console.log(req.body);
  res.send(`Rota POST: Mensagem recebida: ${mensagem}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
