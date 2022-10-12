const Joi = require('joi');

module.exports = Joi.object({
    city: Joi.string(),
    start_day: Joi.string(),
    end_day: Joi.string(),
    equipment: Joi.string()
}).required();
