const Joi = require("joi");

const lessonValidationSchema = Joi.object({
    lesson_theme: Joi.string().min(6).max(12).required(),
    lesson_number: Joi.string().min(6).max(12).required(),
    group_id: Joi.string().min(6).max(20).required(),
    lesson_date: Joi.string().min(6).max(10).required(),

})

module.exports = lessonValidationSchema