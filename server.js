const express = require('express');
const path = require('path');

var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist'))); //since index.html in dist is static


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html')); //send all requests to our page to dist
});
  
  
const PORT = 4700;

app.listen(PORT, (req, res) => {
  console.log('Running on port ' + PORT);
});
  