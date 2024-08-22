const Joi = require("joi");

const LidStatusValidationSchema = Joi.object({
    status: Joi.string().min(5).max(12).required()
})

module.exports = LidStatusValidationSchema