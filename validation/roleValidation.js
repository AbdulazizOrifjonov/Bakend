const Joi = require('joi');

const roleValidatioSchema = Joi.object({
    name: Joi.string().min(6).max(15).required()

})
module.exports = roleValidatioSchema; 
//ajw