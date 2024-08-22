    const Joi = require("joi");
    const stageValidationSchema  = Joi.object({
        name: Joi.string().min(5).max(12).required(),
    })
    module.exports = stageValidationSchema