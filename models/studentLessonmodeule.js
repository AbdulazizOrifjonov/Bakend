const { Schema, model } = require("mongoose");
const { Lesson } = require("./lesson.model");
const { Student } = require("./student.models");

const StudentLessonSchema = new Schema({
    lesson_id: { type: Schema.Types.ObjectId, ref: Lesson, required: true },
    student_id: { type: Schema.Types.ObjectId, ref: Student, required: true },
    is_there: { type: String, required: true },
    reason: { type: String, required: true },
    be_paid: { type: String, required: true }
});

const Student_Lesson = model("Student_Lesson", StudentLessonSchema);

module.exports = { Student_Lesson };
