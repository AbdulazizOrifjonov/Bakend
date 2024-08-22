const Joi = require('joi');

const objectIdValidation = Joi.string().min(8).max(30).required();  // Example of ID length constraint
const LidValidationSchema = Joi.object({
    first_name: Joi.string().min(5).max(12).required(),
    last_name: Joi.string().min(5).max(12).required(),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/),
    lid_stage_id: objectIdValidation,
    test_date: Joi.string().min(1).max(1).required(),
    trial_lesson_date: Joi.date().min(8).max(30).required(),
    trial_lesson_time: Joi.string().min(8).max(30).required(),
    trial_lesson_group_id: objectIdValidation,
    lid_status_id:objectIdValidation,
    cancel_reason_id: objectIdValidation

  

})
module.exports = LidValidationSchema 