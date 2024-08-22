const { Schema, model } = require("mongoose");
const { Stuff_Role } = require("./stuffRole.models");
const { Group } = require("./group.models");

const groupStuffSchema = new Schema({
    stuff_id: { type: Schema.Types.ObjectId, ref: Stuff_Role },
    group_id: { type: Schema.Types.ObjectId, ref: Group }
});

const Group_Stuff = model("Group_Stuff", groupStuffSchema);

module.exports = { Group_Stuff };
