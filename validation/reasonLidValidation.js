const Joi = require("joi");
const reasonLidValidation = Joi.object({
    reason_lid: Joi.string().min(8).max(30).required(),
 
});

 
module.exports = reasonLidValidation 