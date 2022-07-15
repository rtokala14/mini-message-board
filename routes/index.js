var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Helo World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
  next();
});

router.get("/new", function (req, res, next) {
  res.render("form");
  next();
});

router.post("/new", function (req, res, next) {
  let data = req.body;
  messages.push({ text: data.message, user: data.name, added: new Date() });
  res.redirect("/");
});

module.exports = router;
