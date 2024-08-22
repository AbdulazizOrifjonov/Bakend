const Joi = require("joi");

 const fstrukture = Joi.string().min(8).max(30).required()
const groupValidationSchema = Joi.object({
    group_name: fstrukture,
    lesson_start_name: fstrukture,
    lesson_continuous: Joi.string().min(8).max(30).required(),
    lesson_week_day: Joi.string().min(8).max(30).required(),
    group_stage_id: fstrukture,
    room_number: Joi.string().min(8).max(30).required(),
    room_floor: Joi.string().min(8).max(30).required(),
    branch_id: fstrukture,
    lesson_quantity: Joi.string().min(8).max(30).required(),
    is_Active: Joi.string().min(8).max(30).required(),
});

module.exports = groupValidationSchema;
