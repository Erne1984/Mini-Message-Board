const express = require("express");

const routes = express.Router();

const path = require("path");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

routes.get("/", (req, res, next) => {
  res.render("index", { messages });
  //res.sendFile(path.join)
})

routes.post("/new", (req, res, next) => {
  const msg = req.body.msg;
  const author = req.body.author;

  messages.push({ text: msg, user: author, added: new Date() });

  res.redirect("/")


})

module.exports = routes;