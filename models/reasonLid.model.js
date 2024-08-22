    const { Schema, model } = require("mongoose");

    const Reason_LidModel = new Schema({
        reason_lid: { type: String, required: true, trim: true },

    })
    const Reason_Lid = model("Reason_Lid", Reason_LidModel);

    module.exports = { Reason_Lid } 



    