const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();
const PORT = 8000;

// middleware
app.use(morgan('combined'));

app.use('/', (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, console.log('Ready to Serve!'))
