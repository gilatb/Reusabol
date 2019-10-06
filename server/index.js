'use strict'

const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./router');
//TODO: do I have to connect the db already here?
// const db = require('./models/index');
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, (err) => {
  if (err) console.log('Error connecting to the db', err)
  else console.log(`Server listening on port ${port}`) //eslint-disable-line no-console
})

//TODO: or this version?
// (async () => {
//   try {
//     await db.mongoose.sync();
//     app.listen(port);
//     console.log(`Server listening on port ${port}`) //eslint-disable-line no-console
//   }
//   catch (err) {
//     console.log('Error connecting to the db', err);
//   }
// })();
