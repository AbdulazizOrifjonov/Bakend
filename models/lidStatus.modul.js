const { Schema, model } = require("mongoose");

const lid_statusModel = new Schema({
    status: { type: String, required: true, trim: true },

})
const Lid_Status = model("Lid_Status", lid_statusModel);

module.exports = { Lid_Status } 



 