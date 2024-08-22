const { Schema, model } = require("mongoose");
const { Student } = require("./student.models");
const { Group } = require("./group.models");

const StudentGroupSchema = new Schema({
    student_id: { type: Schema.Types.ObjectId, ref: Student, required: true, trim: true },
    group_id: { type: Schema.Types.ObjectId, ref: Group, required: true, trim: true },
});

const Student_Group = model("Student_Group", StudentGroupSchema);

module.exports = { Student_Group };
