const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT ;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/v1/compile', require('./Routes/Compiler.js'));

app.get('/status', (req, res) => {
  console.log("running")
  res.json({ msg: "working fine" });
});

app.listen(port, () => {
  console.log('Server running at port ' + port);
});
