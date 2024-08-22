const { Stuff_Role } = require("../models/stuffRole.models");
const bcrypt = require("bcrypt");

const getAllStuff_Role = async (req, res) => {
    try {
        const groups = await Stuff_Role.find({});
        res.json({ message: "All groups retrieved successfully", success: true, groups });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve groups", success: false, error: error.message });
    }
};

const createStuff_Role = async (req, res) => {
    try {
        const { role_id, stuff_id } = req.body;

        // Yangi Stuff_Role obyektini yaratish
        const newStuff_Role = new Stuff_Role({
            role_id,
            stuff_id,
        });

        // Yangi obyektni saqlash
        await newStuff_Role.save();

        // Muvaffaqiyatli saqlangan yangi obyektni qaytarish
        res.status(201).json({ message: "Yangi ma'lumot muvaffaqiyatli saqlandi", success: true, stuff_role: newStuff_Role });
    } catch (error) {
        // Xatolikni yaxshilanishi
        res.status(400).json({ message: "Xatolik: Majburiy maydon(lar) mavjud emas yoki noto'g'ri kiritilgan", success: false });
    }
}


const updateStuff_Role = async (req, res) => {
    try {
        const { id } = req.params;
        const { role_id, stuff_id, } = req.body;

        const updatedGroup_Stuff = await Stuff_Role.findByIdAndUpdate(id, {

            role_id,
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

const deleteStuff_Role = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedGroup_Stuff = await Stuff_Role.findByIdAndDelete(id);

        if (!deletedGroup_Stuff) {
            return res.status(404).json({ message: "Group not found", success: false });
        }

        res.json({ message: "Group deleted successfully", success: true });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete group", success: false, error: error.message });
    }
};
const getStufById = async (req, res) => {
    try {
        const stuff_role_id = req.params.id;
        const stuff_role = await Stuff_Role.findById(stuff_role_id).populate(" stuff_id").populate("role_id");
        if (!stuff_role) {
            return res.status(404).json({ message: "Role not found", success: false });
        }
        res.json({ message: "Stuff role retrieved successfully", success: true, stuff_role });

    } catch (error) {
        res.status(404).json({
            message: "Stuff role not found",
            error: error.message,
            success: false
        });
    }
}

module.exports = {
    createStuff_Role,
    getAllStuff_Role,
    updateStuff_Role,
    deleteStuff_Role,
    getStufById
};
