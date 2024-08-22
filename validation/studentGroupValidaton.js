const Joi = require('joi');

const objectIdValidation = Joi.string().min(8).max(30).required();  // Example of ID length constraint

const studentGroupValidationSchema = Joi.object({
    student_id: objectIdValidation,
    group_id: objectIdValidation
});

module.exports = studentGroupValidationSchema;
