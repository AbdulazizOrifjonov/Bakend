const { Schema, model } = require("mongoose");

const rolModel = new Schema({
    name: { type: String, required: true, trim: true },

})
const Role = model("role", rolModel);

module.exports = { Role } 



 