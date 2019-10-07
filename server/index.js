'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./router');
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, (err) => {
  if (err) console.log('Error connecting to the db', err);
  else console.log(`Server listening on port ${port}`);
});
