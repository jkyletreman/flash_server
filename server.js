const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
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
app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// get ALL
app.get("/cards", (req, res) => {
  findCard(req).then(cards => {
    res.format({
      "application/json":() => res.json(cards)
    });
  });
});

// create
app.post("/create", (req, res) => {
  createCard(req.body).then(cards => {
  const card = cards[0];

  res.format({
    "application/json": () => res.json(card)
    })
  });
});

app.use('/', (req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.PORT || PORT , () => console.log('Ready to Serve!'))
