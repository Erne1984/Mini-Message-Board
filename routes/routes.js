const express = require("express");

const routes = express.Router();

const path = require("path");

const Message = require("../models/Message")

routes.get("/", async (req, res, next) => {
  try{
    const messages = await Message.find();
    res.render("index", { messages });
  }catch(err){
    res.status(500).send({ error: err.message });
  } 
})

routes.post("/new", (req, res, next) => {
  const msg = req.body.msg;
  const author = req.body.author;

  messages.push({ text: msg, user: author, added: new Date() });

  res.redirect("/")


})

module.exports = routes;