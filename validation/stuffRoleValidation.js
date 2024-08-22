const Joi = require('joi');

const stuffRoleValidationSchema = Joi.object({
    role_id: Joi.string().min(6).max(25).required(),
    stuff_id: Joi.string().min(6).max(25).required(),
});

module.exports = stuffRoleValidationSchema;
