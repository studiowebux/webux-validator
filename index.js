// ███╗   ███╗██╗██████╗ ██████╗ ██╗     ███████╗██╗    ██╗ █████╗ ██████╗ ███████╗
// ████╗ ████║██║██╔══██╗██╔══██╗██║     ██╔════╝██║    ██║██╔══██╗██╔══██╗██╔════╝
// ██╔████╔██║██║██║  ██║██║  ██║██║     █████╗  ██║ █╗ ██║███████║██████╔╝█████╗
// ██║╚██╔╝██║██║██║  ██║██║  ██║██║     ██╔══╝  ██║███╗██║██╔══██║██╔══██╗██╔══╝
// ██║ ╚═╝ ██║██║██████╔╝██████╔╝███████╗███████╗╚███╔███╔╝██║  ██║██║  ██║███████╗
// ╚═╝     ╚═╝╚═╝╚═════╝ ╚═════╝ ╚══════╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

/**
 * File: index.js
 * Author: Tommy Gingras
 * Date: 2019-02-16
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

const { errorHandler } = require("webux-errorhandler");

/**
 * this function check the body
 * @param {Object} schema The JOI schema, mandatory
 * @return {Function} return a middleware function
 */
const Body = schema => {
  if (!schema || typeof schema !== "object") {
    throw new Error(
      "The schema parameter is required and must be a JOI object"
    );
  }
  return (req, res, next) => {
    schema.validate(
      req.body,
      {
        allowUnknown: false
      },
      err => {
        if (err) {
          return next(
            errorHandler(
              400,
              err.details[0].message,
              { type: "Body Schema Validator" },
              err
            )
          );
        }
        return next();
      }
    );
  };
};

/**
 * this function check the params id
 * @param {Object} schema The JOI schema, mandatory
 * @return {Function} return a middleware function
 */
const MongoID = schema => {
  if (!schema || typeof schema !== "object") {
    throw new Error(
      "The schema parameter is required and must be a JOI object"
    );
  }
  return (req, res, next) => {
    schema.validate(
      req.params.id,
      {
        allowUnknown: false
      },
      err => {
        if (err) {
          return next(
            errorHandler(
              400,
              err.details[0].message,
              { type: "MongoID Schema Validator" },
              err
            )
          );
        }
        return next();
      }
    );
  };
};

/**
 * this function check the params id_url to check if it is a valid URL or mongo ID
 * @param {Object} schema The JOI schema, mandatory
 * @return {Function} return a middleware function
 */
const MongoIdOrURL = schema => {
  if (!schema || typeof schema !== "object") {
    throw new Error(
      "The schema parameter is required and must be a JOI object"
    );
  }
  return (req, res, next) => {
    schema.validate(
      req.params.id_url,
      {
        allowUnknown: false
      },
      err => {
        if (err) {
          return next(
            errorHandler(
              400,
              err.details[0].message,
              { type: "MongoIDOrURL Schema Validator" },
              err
            )
          );
        }
        return next();
      }
    );
  };
};

/**
 * this function check the user
 * @param {Object} schema The JOI schema, mandatory
 * @return {Function} return a middleware function
 */
const User = schema => {
  if (!schema || typeof schema !== "object") {
    throw new Error(
      "The schema parameter is required and must be a JOI object"
    );
  }
  return (req, res, next) => {
    schema.validate(
      req.user,
      {
        allowUnknown: true
      },
      err => {
        if (err) {
          return next(
            errorHandler(
              400,
              err.details[0].message,
              { type: "User Schema Validator" },
              err
            )
          );
        }
        return next();
      }
    );
  };
};

/**
 * this function check the headers
 * @param {Object} schema The JOI schema, mandatory
 * @return {Function} return a middleware function
 */
const Headers = schema => {
  if (!schema || typeof schema !== "object") {
    throw new Error(
      "The schema parameter is required and must be a JOI object"
    );
  }
  return (req, res, next) => {
    schema.validate(
      req.headers,
      {
        allowUnknown: true
      },
      err => {
        if (err) {
          return next(
            errorHandler(
              400,
              err.details[0].message,
              { type: "Headers Schema Validator" },
              err
            )
          );
        }
        return next();
      }
    );
  };
};

/**
 * this function check the files
 * @param {Object} schema The JOI schema, mandatory
 * @return {Function} return a middleware function
 */
const Files = schema => {
  if (!schema || typeof schema !== "object") {
    throw new Error(
      "The schema parameter is required and must be a JOI object"
    );
  }
  return (req, res, next) => {
    schema.validate(
      req.files,
      {
        allowUnknown: true
      },
      err => {
        if (err) {
          return next(
            errorHandler(
              400,
              err.details[0].message,
              { type: "Files Schema Validator" },
              err
            )
          );
        }
        return next();
      }
    );
  };
};

/**
 * this function check a given object
 * @param {Object} schema The JOI schema, mandatory
 * @return {Function} return a function
 */
const Custom = schema => {
  if (!schema || typeof schema !== "object") {
    throw new Error(
      "The schema parameter is required and must be a JOI object"
    );
  }
  return (object) => {
    schema.validate(
      object,
      {
        allowUnknown: false
      },
      err => {
        if (err) {
          return next(
            errorHandler(
              400,
              err.details[0].message,
              { type: "Object Schema Validator" },
              err
            )
          );
        }
        return next();
      }
    );
  };
};

module.exports = {
  Body,
  User,
  MongoID,
  MongoIdOrURL,
  Headers,
  Files,
  Custom
};
