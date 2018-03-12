const express = require('express');
const cors = require('cors');
const app = express();

const API = require('./router');

app.use(cors());
app.use(API);

app.get('/', function(req, res){
  console.log(res)
  res.json({hell: 'world'})
});


app.listen(3000);