const { Schema, model } = require("mongoose");
const { Stage } = require("./stage.models");
const { Branch } = require("./branch.model");

const groupModel = new Schema({
    group_name: { type: String, required: true, trim: true },
    lesson_start_name: { type: String, required: true },
    lesson_continuous: { type: String, required: true },
    lesson_week_day: { type: String, required: true },
    group_stage_id: { type: Schema.Types.ObjectId, ref: Stage },
    room_number: { type: String, required: true },
    room_floor: { type: String, required: true },
    branch_id: { type: Schema.Types.ObjectId, ref: Branch },
    lesson_quantity: { type: String, required: true },
    is_Active: { type: Boolean, required: true },

});

const Group = model("Group", groupModel);

module.exports = { Group };