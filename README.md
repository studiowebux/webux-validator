# Webux Validator

This module is a wrapper around the Joi module.

## Installation

```bash
npm i --save @studiowebux/validator
```

## Usage

### Available validators

- Body (req.body)
- MongoID (req.params.id)
- MongoIdOrURL (req.params.id_url)
- User (req.user)
- Headers (req.headers)
- Files (req.files)

### validator

to know how to create a validator, check the Joi documentation,  
validators/language.js

```
const Joi = require("joi");

const Create = Joi.object().keys({
  language: {
    name: Joi.string().required(),
    shortcuts: Joi.array()
      .items(Joi.string())
      .required(),
    defaultValue: Joi.boolean().required()
  }
});

const MongoID = Joi.string()
  .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
  .required();

module.exports = {
  Create,
  MongoID
};
```

### example

```
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const validator = require("@studiowebux/validator");
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
	"name":"french",
	"shortcuts":["fr"],
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

```

if you need more validators, create a pull request

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

SEE LICENSE IN license.txt
