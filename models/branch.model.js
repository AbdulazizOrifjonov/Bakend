const { Schema, model } = require("mongoose");


const branchModel = new Schema({
    name:         { type: String, required: true, trim: true },
    address:      { type: String, required: true },
    call_number:  { type: Number, required: true },
})

const Branch = model("branch", branchModel);

module.exports = { Branch }
