//================================================================================================================
// SERVER CONFIGURATION
//================================================================================================================
const express = require('express');
const path = require('path');
const router = require('./routes/index.js');

const PORT = 8080;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api', router);


app.listen(PORT, () => {
  console.log(`To get started, visit: http://localhost:${PORT}`);
});

//================================================================================================================
// TEST SERVER CONNECTION
//================================================================================================================

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})