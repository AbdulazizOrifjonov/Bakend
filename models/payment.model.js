const { Schema, model } = require("mongoose");
const StudentModel = new Schema({
    lid_id: { type: String, required: true, trim: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    birthday: { type: String, required: true }

});

const Student = model("student", StudentModel);

module.exports = { Student };
    