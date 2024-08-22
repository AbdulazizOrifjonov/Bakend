const Joi = require("joi");

 
const groupStuffValidationSchema = Joi.object({
    stuff_id: Joi.string().min(8).max(30).required(),
    group_id: Joi.string().min(8).max(30).required()
});

module.exports = groupStuffValidationSchema;
