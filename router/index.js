const express = require("express");
const API = express.Router();

const db = require("../db");
API.all("/auth/signin", (req, res, next) => {
  if (!req.query.token) {
    res.redirect(403, "http://localhost:3000");
  } else {
    res.send(`authorized with token id: ${req.query.token}`);
    next();
  }
});

API.post("/auth/signup/", (req, res) => {
  let { username, email, password } = req.body;
  return db.User.create({
    username,
    email,
    password
  })
    .then(user => {
      console.log(req.body);
      res.json({ success: true, user });
    })
    .catch(e => {
      console.log(e);
      res.json({
        success: false,
        e: e.errors.map(err => {
          const { path, message } = err;
          return { path, message };
        })
      });
    });
});

API.route("/chats")
  .get((req, res) => {
    res.send("userID");
  })
  .post((req, res) => {
    res.send("name, participants");
  });

API.route("/api/chat/:id")
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
