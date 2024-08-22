const Joi = require('joi');

const studentLessonValidationSchema = Joi.object({
    lesson_id: Joi.string().min(8).max(25).required(),
    student_id: Joi.string().required(),
    is_there: Joi.string().required(),
    reason: Joi.string().required(),
    be_paid: Joi.string().required()
});

module.exports = studentLessonValidationSchema;
