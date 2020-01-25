const Joi = require("@hapi/joi");
const { Custom } = require("../index");

const scheme = Joi.object().keys({
  language: {
    name: Joi.string().required(),
    shortcuts: Joi.array()
      .items(Joi.string())
      .required(),
    defaultValue: Joi.boolean().required()
  }
});

const obj = {
  language: {
    name: "French",
    shortcuts: ["ca_fr", "fr_fr", "fr"],
    defaultValue: true
  }
};

test("Use the custom validator", async () => {
  const value = await Custom(scheme, obj).catch(e => {
    console.error(e);
  });

  expect(value).toMatchObject(obj);
});
