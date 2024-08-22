const { Group } = require("../models/group.models");

// ------------------ Get All Group  ---------------------
const getAllGroup = async (req, res) => {
    try {
        const groups = await Group.find({});
        res.json({ message: "Barch Gurpalar muvoffaqiyatli olindi ", success: true, groups })
    } catch (error) {
        res.status(500).json({ message: "Gruhlarni olishda hetolik yuz berdi", success: false, error: error.message })
    }
}
//-----------------------Gurpa Yaratish-------------------------
const createGroup = async (req, res) => {
    try {
        // Destructure and obtain all required fields from req.body
        const {
            group_name,
            lesson_start_name,
            lesson_continuous,
            lesson_week_day,
            group_stage_id,
            room_number,
            room_floor,
            branch_id,
            lesson_quantity,
            is_Active
        } = req.body;

        // Check if a group with the same attributes already exists
        const existingGroup = await Group.findOne({
            group_name,
            lesson_start_name,
            lesson_continuous,
            lesson_week_day,
            group_stage_id,
            room_number,
            room_floor,
            branch_id,
            lesson_quantity,
            is_Active
        });

        // If an existing group is found, return an error
        if (existingGroup) {
            return res.status(400).json({ message: 'Bu gurpa allaqachon mavjud.', success: false });
        }

        // Create a new group if no existing group is found
        const newGroup = new Group({
            group_name,
            lesson_start_name,
            lesson_continuous,
            lesson_week_day,
            group_stage_id,
            room_number,
            room_floor,
            branch_id,
            lesson_quantity,
            is_Active
        });

        // Save the new group to the database
        await newGroup.save();

        // Send a success response back to the client
        res.status(201).json({
            message: "Yangi gurpa muvaffaqiyatli yaratildi",
            success: true,
            group: newGroup
        });
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({
            message: "Gurpa yaratishda hatolik yuz berdi",
            success: false,
            error: error.message
        });
    }
}

// -------------------------gurpani yangilaish---------------------

const updateGroup = async (req, res) => {
    try {
        const { id } = req.params; // Guruh IDsi URL'dan olinadi.
        const {
            group_name,
            lesson_start_name,
            lesson_continuous,
            lesson_week_day,
            group_stage_id,
            room_number,
            room_floor,
            branch_id,
            lesson_quantity,
            is_Active
        } = req.body; // Yangilanishi kerak bo'lgan barcha maydonlar req.body dan olinadi.

        // findByIdAndUpdate metodini chaqirish, bu yerda yangilanishlarni to'plamiz va yangilangan hujjatni qaytarish uchun {new: true} opsiyasidan foydalanamiz.
        const updatedGroup = await Group.findByIdAndUpdate(id, {
            group_name,
            lesson_start_name,
            lesson_continuous,
            lesson_week_day,
            group_stage_id,
            room_number,
            room_floor,
            branch_id,
            lesson_quantity,
            is_Active
        }, { new: true });

        if (!updatedGroup) {
            return res.status(404).json({ message: "Guruh topilmadi", success: false });
        }

        // Yangilangan guruh ma'lumotlari bilan javob qaytaramiz.
        res.json({ message: "Guruh muvaffaqiyatli yangilandi", success: true, group: updatedGroup });
    } catch (error) {
        res.status(500).json({
            message: "Guruhni o'zgartirishda xatolik yuz berdi",
            error: error.message // Xatolik tafsilotlari bilan javob qaytaramiz.
        });
    }
};
// ------------------- gruppani o'chirish -----------
const deleteGroup = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedGroup = await Group.findById(id)
        if (!deletedGroup) {
            return res.status(404).json({ message: " Bu  gurpani o'chirib bo'lmaydi", success: false })
        }
        await Group.findByIdAndDelete(id);
        res.json({ message: "gurpa muvoffaqiyatlim o'chirildi ", success: true })
    } catch (error) {
        res.status(404).json({
            message: "gurpani o'chirishlik fda hatolik yuz berdi ",
            success: false
        })
    }
}

const getGroupById = async (req, res) => {
    try {
        const group_id = req.params.id;
        const group = await Group.findById(group_id).populate("group_stage_id branch_id");
        if (!group) {
            return res.status(404).json({
                message: "Group not found",
                success: false
            });
        }
        res.json({
            message: "Group retrieved successfully",
            success: true,
            group: group
        });
    } catch (error) {
        res.status(500).json({
            message: "Error occurred while fetching group",
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    createGroup,
    getAllGroup,
    updateGroup,
    deleteGroup,
    getGroupById
}
