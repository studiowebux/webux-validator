// ██╗   ██╗ █████╗ ██╗     ██╗██████╗  █████╗ ████████╗ ██████╗ ██████╗
// ██║   ██║██╔══██╗██║     ██║██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗
// ██║   ██║███████║██║     ██║██║  ██║███████║   ██║   ██║   ██║██████╔╝
// ╚██╗ ██╔╝██╔══██║██║     ██║██║  ██║██╔══██║   ██║   ██║   ██║██╔══██╗
//  ╚████╔╝ ██║  ██║███████╗██║██████╔╝██║  ██║   ██║   ╚██████╔╝██║  ██║
//   ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝

/**
 * File: language.js
 * Author: Tommy Gingras
 * Date: 2019-02-17
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

const Joi = require("@hapi/joi");

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
  .pattern(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/)
  .required();

module.exports = {
  Create,
  MongoID
};
