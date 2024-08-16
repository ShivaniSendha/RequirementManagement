/* eslint-disable no-undef */
// server.js
const express = require('express');
const portfinder = require('portfinder');
const cors = require('cors');
const app = express();
const Users = require('../Modules/User');
require('../db/connection');

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.post('/', async (req, res) => {
  try {
    const user = new Users(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

portfinder.getPortPromise().then((port) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('Error finding port:', err);
});
