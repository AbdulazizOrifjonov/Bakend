const { Group_Stuff } = require("../models/groupStuff.modul");


const getAllGroup_Stuff = async (req, res) => {
    try {
        const groups = await Group_Stuff.find({});
        res.json({ message: "All groups retrieved successfully", success: true, groups });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve groups", success: false, error: error.message });
    }
};

const createGroup_Stuff = async (req, res) => {
    try {
        const { group_id, stuff_id, } = req.body;

        const existingRole = await Group_Stuff.findOne({
            group_id,
            stuff_id,
        });

        if (existingRole) {
            return res.status(400).json({ message: "Bu nomdagi rol allaqachon mavjud.", success: false });
        }
        const newGroup_Stuff = new Group_Stuff({
            group_id,
            stuff_id,



        });
        await newGroup_Stuff.save();
        res.status(201).json({ message: "New group created successfully", success: true, group: newGroup_Stuff });
    } catch (error) {
        res.status(400).json({ message: "Error: Required field(s) missing or incorrect", success: false });
    }
};

const updateGroup_Stuff = async (req, res) => {
    try {
        const { id } = req.params;
        const { group_id, stuff_id, } = req.body;

        const updatedGroup_Stuff = await Group_Stuff.findByIdAndUpdate(id, {

            group_id,
            stuff_id,


        }, { new: true });

        if (!updatedGroup_Stuff) {
            return res.status(404).json({ message: "Group not found", success: false });
        }

        res.json({ message: "Group updated successfully", success: true, group: updatedGroup_Stuff });
    } catch (error) {
        res.status(500).json({ message: "Failed to update group", success: false, error: error.message });
    }
};

const deleteGroup_Stuff = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedGroup_Stuff = await Group_Stuff.findByIdAndDelete(id);

        if (!deletedGroup_Stuff) {
            return res.status(404).json({ message: "Group not found", success: false });
        }

        res.json({ message: "Group deleted successfully", success: true });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete group", success: false, error: error.message });
    }
};

const getByIdGrop_Stuff = async (req, res) => {
    try {
        const group_stuff_id = req.params.id
        const group_stuff = await Group_Stuff.findById(group_stuff_id).populate("group_id stuff_id");
        if (!group_stuff) {
            return res.status(404).json({ message: "Group not found", success: false });
        }
        res.json({ message: "Group found successfully", success: true, group_stuff: group_stuff });
    } catch (error) {
        res.status(404).json({
            message: "Error getting",
            success: false,
            error: error.message
        });
    }
}
module.exports = {
    createGroup_Stuff,
    getAllGroup_Stuff,
    updateGroup_Stuff,
    deleteGroup_Stuff,
    getByIdGrop_Stuff
};
