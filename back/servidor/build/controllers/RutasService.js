const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let routes = [];

app.get('/routes', (req, res) => {
  res.json(routes);
});

app.post('/routes', (req, res) => {
  routes.push(req.body);
  res.status(201).send();
});

app.listen(3000, () => console.log('Servidor iniciado en puerto 3000'));
