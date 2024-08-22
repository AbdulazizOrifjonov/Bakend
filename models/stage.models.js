const { Schema, model } = require("mongoose");

const stageModel = new Schema({
    name: { type: String, required: true, trim: true },

})
const Stage = model("stage", stageModel);

module.exports = { Stage } 



                                