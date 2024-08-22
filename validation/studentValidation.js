const Joi = require("joi")

const studentValidationSchema = Joi.object({
    lid_id: Joi.string().min(6).max(20).required(),
    first_name: Joi.string().min(5).max(12).required(),
    last_name: Joi.string().min(5).max(12).required(),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/),
    birthday: Joi.date().min(5).max(12).required(),
})

module.exports = studentValidationSchema; 