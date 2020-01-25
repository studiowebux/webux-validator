# Webux Validator

This module is a wrapper around the Joi module.

## Installation

### Linux

```bash
npm i --save @studiowebux/validator
```

### Windows

```bash
npm i --save @studiowebux/validator
```

### Mac

```bash
npm i --save @studiowebux/validator
```

## Usage

### Available validators

#### Body (req.body)

```javascript
Body(Schema)(req, res, next)=>{...};
```

#### MongoID (req.params.id)

```javascript
MongoID(Schema)(req, res, next)=>{...};
```

#### MongoIdOrURL (req.params.id_url)

```javascript
MongoIdOrURL(Schema)(req, res, next)=>{...};
```

#### User (req.user)

```javascript
User(Schema)(req, res, next)=>{...};
```

#### Headers (req.headers)

```javascript
Headers(Schema)(req, res, next)=>{...};
```

#### Files (req.files)

```javascript
Files(Schema)(req, res, next)=>{...};
```

#### Custom (object)

```javascript
Custom(Schema, object);
```

## Usage

### validator

To get more information about validator, please consult the Joi documentation,  
Inside the **validators** directory,

#### validators/language.js

A schema exemple for _Create_ and _MongoID_,

```javascript
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

Check the /examples directory.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

SEE LICENSE IN license.txt
