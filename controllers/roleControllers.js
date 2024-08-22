const { Role } = require('../models/role.models');

// ----------------Barcha Rollarni Olish-------------------
const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find({});
        res.json({ message: "Barcha rollar muvaffaqiyatli olingan.", success: true, roles });
    } catch (error) {
        res.status(500).json({ message: "Rollarni olishda xatolik yuz berdi.", success: false, error: error.message });
    }
};

// ----------------Rol Yaratish-------------------
const createRole = async (req, res) => {
    try {
        const { name } = req.body;

        // Shunday nomli rol allaqachon mavjudligini tekshirish
        const existingRole = await Role.findOne({ name });
        if (existingRole) {
            return res.status(400).json({ message: "Bu nomdagi rol allaqachon mavjud.", success: false });
        }

        // Yangi rol yaratish
        const newRole = new Role({ name });
        await newRole.save();

        res.status(201).json({ message: "Rol muvaffaqiyatli yaratildi.", success: true, role: newRole });
    } catch (error) {
        res.status(500).json({ message: "Rol yaratishda xatolik yuz berdi.", success: false, error: error.message });
    }
};

// ----------------Rolni Yangilash-------------------
const updateRole = async (req, res) => {
    try {
        const { name } = req.body;
        const roleId = req.params.id;

        // Rolning mavjudligini tekshirish
        const existingRole = await Role.findById(roleId);
        if (!existingRole) {
            return res.status(404).json({ message: "Rol topilmadi.", success: false });
        }

        // Rol nomini yangilash
        existingRole.name = name;
        await existingRole.save();

        res.json({ message: "Rol muvaffaqiyatli yangilandi.", success: true, role: existingRole });
    } catch (error) {
        res.status(500).json({ message: "Rolni yangilashda xatolik.", success: false, error: error.message });
    }
};



// ----------------Rolni O'chirish-------------------
const deleteRole = async (req, res) => {
    try {
        const roleId = req.params.id;

        // Rolning mavjudligini tekshirish
        const existingRole = await Role.findById(roleId);
        if (!existingRole) {
            return res.status(404).json({ message: "Rol topilmadi.", success: false });
        }

        // Rol o'chirilishi mumkinligini tekshirish (masalan, faqat bir rol emas)
        const deletable = true; // Bu yerda logikangizni amalga oshiring

        if (!deletable) {
            return res.status(400).json({ message: "Bu rol o'chirib bo'lmaydi.", success: false });
        }

        // Rolni o'chirish
        await Role.findByIdAndDelete(roleId);
        res.json({ message: "Rol muvaffaqiyatli o'chirildi.", success: true });
    } catch (error) {
        res.status(500).json({ message: "Rolni o'chirishda xatolik yuz berdi.", success: false, error: error.message });
    }
};

module.exports = {
    createRole,
    updateRole,
    deleteRole,
    getAllRoles

};
