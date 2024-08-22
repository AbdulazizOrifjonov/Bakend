const Joi = require('joi');
 

const branchValidation = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    call_number: Joi.string().pattern(/^\+998\d{9}$/),
})

module.exports = branchValidation