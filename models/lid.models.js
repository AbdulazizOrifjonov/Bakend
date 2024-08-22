const { Schema, model } = require("mongoose");
const { Lid_Status } = require("./lidStatus.modul")
const { Stage } = require("./stage.models")
const { Group } = require("./group.models");
const { Reason_Lid } = require("./reasonLid.model");

const lidModel = new Schema({
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    phone_number: { type: Number, required: true, trim: true },
    lid_stage_id: { type: Schema.Types.ObjectId, ref: Stage, required: true, trim: true },
    test_date: { type: String, required: true },
    trial_lesson_date: { type: String, required: true },
    trial_lesson_time: { type: String, required: true },
    trial_lesson_group_id: { type: Schema.Types.ObjectId, ref: Group },
    lid_status_id: { type: Schema.Types.ObjectId, ref: Lid_Status },
    cancel_reason_id: { type: Schema.Types.ObjectId, ref: Reason_Lid },
})
const Lid = model("Lid", lidModel);

module.exports = { Lid }




