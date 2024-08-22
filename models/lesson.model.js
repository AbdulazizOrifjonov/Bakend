const { Schema, model } = require("mongoose");
const { Group } = require("./group.models");

const LessonModel = new Schema({
    lesson_theme: { type: String, required: true },
    lesson_number: { type: Number, required: true, trim: true },
    group_id: { type: Schema.Types.ObjectId, ref: Group },
    lesson_date: { type: Date },
})

const Lesson = model("Lesson", LessonModel);

module.exports = { Lesson }
