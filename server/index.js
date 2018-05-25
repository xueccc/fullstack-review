const express = require('express');
const github  = require('../helpers/github');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false}))


app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('---------', req.body);
  // console.log(getReposByUsername);
  github.getReposByUsername(req.body.userName);
  res.send();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

