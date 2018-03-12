const express = require('express');
const API = express.Router();

API.all('/auth/signin', (req, res, next) => {
  if(!req.query.token) {
    res.redirect(403, 'http://localhost:3000');
  } else {
    res.send(`authorized with token id: ${req.query.token}`);
    next();
  }
});

API.all('/auth/signup/:username/:login/:pwd', (req, res, next) => {
  let {username, login, pwd} =  req.params;
  res.send([username, login, pwd])
});

API.route('/chats')
  .get((req, res) => {
      res.send('userID');
    })
  .post((req, res) => {
      res.send('name, participants');
    });

API.route('/api/chat/:id')
  .get((req, res) => {
      res.send(req.params.id);
    })
  .put((req, res) => {
      console.log(req.params.id, res.data);
    })
  .delete((req, res) => {
      console.log(req.params.id);
  });

module.exports = API;