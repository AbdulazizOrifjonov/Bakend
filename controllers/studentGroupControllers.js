const { Student_Group } = require("../models/studentGroup.model");
const bcrypt = require("bcrypt");

const getAllStudent_Group = async (req, res) => {
    try {
        const groups = await Student_Group.find({});
        res.json({ message: "All groups retrieved successfully", success: true, groups });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve groups", success: false, error: error.message });
    }
};

const createStudent_Group = async (req, res) => {
    try {
        const { student_id, group_id, } = req.body;

        // Parolni hash qilish
        // const hashedPassword = await bcrypt.hash(10);

        const newGroup_Stuff = new Student_Group({
            student_id,
            group_id,



        });

        await newGroup_Stuff.save();
        res.status(201).json({ message: "New group created successfully", success: true, group: newGroup_Stuff });
    } catch (error) {
        res.status(400).json({ message: "Error: Required field(s) missing or incorrect", success: false });
    }
};

const updateStudent_Group = async (req, res) => {
    try {
        const { id } = req.params;
        const { student_id, group_id, } = req.body;

        const updatedGroup_Stuff = await Student_Group.findByIdAndUpdate(id, {

            student_id,
            group_id,


        }, { new: true });

        if (!updatedGroup_Stuff) {
            return res.status(404).json({ message: "Group not found", success: false });
        }

        res.json({ message: "Group updated successfully", success: true, group: updatedGroup_Stuff });
    } catch (error) {
        res.status(500).json({ message: "Failed to update group", success: false, error: error.message });
    }
};

const deleteStudent_Group = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedGroup_Stuff = await Student_Group.findByIdAndDelete(id);

        if (!deletedGroup_Stuff) {
            return res.status(404).json({ message: "Group not found", success: false });
        }

        res.json({ message: "Group deleted successfully", success: true });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete group", success: false, error: error.message });
    }
};
// get b ay id ----------------------
const getByIdStudent_Group = async (req, res) => {
    try {
        const student_group = req.params.id;
        // Properly using populate without extra spaces
        const student = await Student_Group.findById(student_group)
            .populate("student_id")
            .populate("group_id");

        if (!student) {
            return res.status(404).json({
                message: "Group not found",
                success: false
            });
        } else {
            res.json({
                message: "Student successfully retrieved",
                success: true,
                student: student
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get group",
            success: false,
            error: error.message
        });
    }
};
module.exports = {
    createStudent_Group,
    getAllStudent_Group,
    updateStudent_Group,
    deleteStudent_Group,
    getByIdStudent_Group
};
