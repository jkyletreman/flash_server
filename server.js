const express = require('express');
const app = express();
const PORT = 8000;
const morgan = require('morgan');

// middleware
app.use(morgan('combined'));

app.use('/', (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, console.log('Ready to Serve!'))
