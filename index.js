const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("TESTANDO LOG")
  res.send("Rota GET: Olá, mundo!");
});

app.post("/webhook", (req, res) => {
  console.log('chamei no webhook clicksign')
  console.log(req.body);
});

app.post("/webhook/docusign", (req, res) => {
  console.log('chamei no webhook docusign')
  console.log(req.body);
});

app.post("/webhook/pagarme", (req, res) => {
  console.log('chamei no webhook pagarme')
  console.log('MEU BODY', req.body);
  console.log('MINHA DATA', req.body.data);
  return res.json({ goat: 'luix' })
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


