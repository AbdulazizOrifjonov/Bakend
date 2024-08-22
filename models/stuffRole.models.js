const { Schema, model } = require("mongoose");
const { Stuff } = require("./stuff.models");
const { Role } = require("./role.models");

const Stuff_RoleSchema = new Schema({
    role_id: { type: Schema.Types.ObjectId, ref: Role },
    stuff_id: { type: Schema.Types.ObjectId, ref: Stuff },

});

const Stuff_Role = model("Stuff_Role", Stuff_RoleSchema);

module.exports = { Stuff_Role };
