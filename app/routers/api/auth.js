const express = require('express');
const router = express.Router();

// JS VALIDATION
const validate = require('../../validation/validator');
const userCreateSchema = require('../../validation/schemas/auth/userCreateSchema');
const userLoginSchema = require ('../../validation/schemas/auth/userLoginSchema');

// JWT VALIDATION
const verifySignup  = require("../../middleware/verifySignup");

// ERROR HANDLER
const controllerHandler = require('../../helpers/controllerHandler');

// CONTROLLER
const {userController: controller} = require("../../controllers/api");


//~ ---------- POST
router.post("/auth/signup", [verifySignup.checkDuplicateEmail, validate('body', userCreateSchema)], controllerHandler(controller.signup));

router.post("/auth/login", validate('body', userLoginSchema), controllerHandler(controller.login));


module.exports = router;