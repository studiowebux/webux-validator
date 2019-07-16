const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const validator = require("../index");
const languageValidator = require("./validators/language");

app.use(
  bodyParser.json({
    limit: "1mb"
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "1mb",
    extended: true
  })
);

/*
req.body 
===
{"language":{
	"name":"5cf0524c29b376c575e6005b",
	"shortcuts":["Door Open"],
	"defaultValue":true
}}
*/
app.post(
  "/language",
  validator.Body(languageValidator.Create),
  (req, res, next) => {
    res.status(201).json({ language: { text: "language 1" } });
  }
);

app.post("/language/custom", async (req, res, next) => {
  try {
    await validator.Custom(languageValidator.Create, req.body);

    res.status(201).json({ language: { text: "language 1" } });
  } catch (e) {
    res.status(400).json(e);
  }
});

//5cf0524c29b376c575e6005b
app.get(
  "/language/:id",
  validator.MongoID(languageValidator.MongoID),
  (req, res, next) => {
    res.status(200).json({ language: { text: "language 1" } });
  }
);

app.use("*", (error, req, res, next) => {
  res.status(error.code).json(error);
});

app.listen(1337);
