const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();
const PORT = 8000;

const {
  findCard,
  createCard
} = require('./models/db_functions')
// middleware
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// get ALL
app.get("/cards", (req, res) => {
  findCard(req).then(cards => {
    res.format({
      "application/json":() => res.json(cards)
    });
  });
});

// create
app.post("/new", (req, res) => {
  createCard(req).then(cards => {
  const card = cards[0];

  res.format({
    'application/json': () => res.json(card)
  });
});



app.use('/', (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, console.log('Ready to Serve!'))
