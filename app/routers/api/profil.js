const express = require('express');
const router = express.Router();


// JS VALIDATION
const validate = require('../../validation/validator');
const profilUpdateSchema = require('../../validation/schemas/profil/profilUpdateSchema');

// JWT VALIDATION
const verifyAccesRight = require('../../middleware/verifyAccessRight');

// ERROR HANDLER
const controllerHandler = require('../../helpers/controllerHandler');

// CONTROLLER
const { profilController } = require("../../controllers/api");


//~ ---------- GET
router.get("/personalspace/:id(\\d+)/profil",[verifyAccesRight.verifyToken, verifyAccesRight.isAuthenticate], controllerHandler(profilController.findPersonalspaceById));

//~ ---------- PATCH
router.patch("/personalspace/:id(\\d+)/profil",[validate('body', profilUpdateSchema), verifyAccesRight.verifyToken, verifyAccesRight.isAuthenticate], controllerHandler(profilController.updatePersonalspace));

//~ ---------- DELETE
// router.delete("/personalspace/:id(\\d+)/profil", controllerHandler());


module.exports = router;