const express = require("express");
const registerRouter = express.Router();
const {
  registerController,
} = require("../controllers/register");

const validation = require("../validation/validationMiddleware");
const valSchema = require("../validation/validationSchema");

registerRouter.post("/", validation(valSchema.authorSchema), registerController
);

module.exports = registerRouter;