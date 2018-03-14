const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

const API = require('./router');
const db = require('./db');

app.use(cors());
app.use(bodyParser.json());
app.use(API);

app.get('/', function(req, res){
  console.log(res)
  res.json({hell: 'world'})
});

db.sequelize.sync({force:true})
.then(()=>{
  app.listen(3000);
})
.catch((e)=>{
  console.log(e)
});