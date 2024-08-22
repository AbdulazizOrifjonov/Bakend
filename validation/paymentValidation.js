 const Joi = require("joi");

const objectIdValidation = Joi.string().min(8).max(30).required();
 const paymentValidationSchema = Joi.object({
    lid_id: objectIdValidation,
    first_name: Joi.string().min(5).max(15).required(),
    last_name: Joi.string().min(5).max(15).required(),
    phone_number: Joi.string().min(10).max(10).required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(5).max(100).required(),

 })

 module.exports = paymentValidationSchema 