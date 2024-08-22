const Joi = require('joi');

 
const StuffregisterValidationSchema = Joi.object({
    first_name: Joi.string().required().trim().min(5).max(15),
    last_name: Joi.string().required().trim().min(6).max(15),
    phone_number: Joi.string(),
    login: Joi.string().required().trim().min(6).max(15),

    password: Joi.string().required().trim().min(6).max(15),

    is_active: Joi.boolean()
});



module.exports = {
    StuffregisterValidationSchema
};

