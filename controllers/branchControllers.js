const { Branch } = require("../models/branch.model");

// Barcha branchlarni olish
const getAllBranch = async (req, res) => {
    try {
        const branches = await Branch.find({});
        res.json({ success: true, message: "Barcha branchlar muvaffaqiyatli olindi", branches });
    } catch (error) {
        res.status(500).json({ success: false, message: "Barcha branchlarni olishda xatolik yuz berdi" });
    }
}

// Yangi branch yaratish
const createBranch = async (req, res) => {
    try {
        const { name, address, call_number  } = req.body;


        const newBranch = new Branch({
            name: name,
            address: address,
            call_number: call_number,
        });
        await newBranch.save();
        res.status(201).json(newBranch);
    } catch (error) {
        // Xatolik haqida xabarni "validation" xatoligiga o'zgartiring
        res.status(400).json({ message: "Xatolik: Maydon to'ldirish majburiy" });
    }
};

// Branchni yangilash
// const updateBranch = async (req, res) => {
//     try {
//         const { name } = req.body;
//         const branchId = req.params.id;
//         const existingBranch = await Branch.findById(branchId);
//         if (!existingBranch) {
//             return res.status(404).json({ success: false, message: "Branch topilmadi." });
//         }
//         existingBranch.name = name;
//         await existingBranch.save();
//         res.json({ success: true, message: "Branch muvaffaqiyatli yangilandi.", branch: existingBranch });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Branchni yangilashda xatolik.", error: error.message });
//     }
// };

const updateBranch = async (req, res) => {
    try {
        const { name } = req.body;

        const branchId = req.params.id;

        const existingBranch = await Branch.findById(branchId);

        if (!existingBranch) {
            return res.status(404).json({ success: false, message: "Branch topilmadi." });
        }

        existingBranch.name = name;

        await existingBranch.save();

        res.json({ success: true, message: "Branch muvaffaqiyatli yangilandi.", branch: existingBranch });
    } catch (error) {
        res.status(500).json({ success: false, message: "Branchni yangilashda xatolik.", error: error.message });
    }
};

// Branchni o'chirish
const deleteBranch = async (req, res) => {
    try {
        const branchId = req.params.id;
        const existingBranch = await Branch.findById(branchId);
        if (!existingBranch) {
            return res.status(404).json({ success: false, message: "Branch topilmadi." });
        }
        const deletable = true; // O'chirilishi mumkinligini tekshirish uchun logikani qo'shing
        if (!deletable) {
            return res.status(400).json({ success: false, message: "Bu branch o'chirib bo'lmaydi." });
        }
        await Branch.findByIdAndDelete(branchId);
        res.json({ success: true, message: "Branch muvaffaqiyatli o'chirildi." });
    } catch (error) {
        res.status(500).json({ success: false, message: "Branchni o'chirishda xatolik yuz berdi.", error: error.message });
    }
};

module.exports = {
    createBranch,
    updateBranch,
    deleteBranch,
    getAllBranch
};
