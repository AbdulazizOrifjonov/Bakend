const { Schema, model } = require("mongoose");

const stuffModel = new Schema({
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    login: { type: String, required: true },
    is_active: { type: Boolean },
})
const Stuff = model("stuff", stuffModel);

module.exports = { Stuff }          