const { Stage } = require('../models/stage.models');

// Barcha rollarni olish
const getAllStages = async (req, res) => {
    try {
        const stages = await Stage.find({});
        res.json({ success: true, message: "Barcha rollar muvaffaqiyatli olingan.", stages });
    } catch (error) {
        res.status(500).json({ success: false, message: "Rollarni olishda xatolik yuz berdi.", error: error.message });
    }
};

// Stage yaratish
const createStage = async (req, res) => {
    try {
        const { name } = req.body;

        // Shunday nomli rol allaqachon mavjudligini tekshirish
        const existingStage = await Stage.findOne({ name });
        if (existingStage) {
            return res.status(400).json({ message: "Bu nomdagi rol allaqachon mavjud.", success: false });
        }

        // Yangi rol yaratish
        const newStage = new Stage({ name });
        await newStage.save();

        res.status(201).json({ message: "Stage muvaffaqiyatli yaratildi.", success: true, stage: newStage });
    } catch (error) {
        res.status(500).json({ message: "Stage yaratishda xatolik yuz berdi.", success: false, error: error.message });
    }
};

// Rolni yangilash
const updateStage = async (req, res) => {
    try {
        const { name } = req.body;
        const stageId = req.params.id;

        // Rolning mavjudligini tekshirish
        const existingStage = await Stage.findById(stageId);
        if (!existingStage) {
            return res.status(404).json({ message: "Stage topilmadi.", success: false });
        }

        // Stage nomini yangilash
        existingStage.name = name;
        await existingStage.save();

        res.json({ message: "Stage muvaffaqiyatli yangilandi.", success: true, stage: existingStage });
    } catch (error) {
        res.status(500).json({ message: "Rolni yangilashda xatolik.", success: false, error: error.message });
    }
};


// Rolni o'chirish
const deleteStage = async (req, res) => {
    try {
        const stageId = req.params.id;

        // Rolning mavjudligini tekshirish
        const existingStage = await Stage.findById(stageId);
        if (!existingStage) {
            return res.status(404).json({ message: "Stage topilmadi.", success: false });
        }

        // Stage o'chirilishi mumkinligini tekshirish (masalan, faqat bir rol emas)
        const deletable = true; // Bu yerda logikangizni amalga oshiring

        if (!deletable) {
            return res.status(400).json({ message: "Bu rol o'chirib bo'lmaydi.", success: false });
        }

        // Rolni o'chirish
        await Stage.findByIdAndDelete(stageId);
        res.json({ message: "Stage muvaffaqiyatli o'chirildi.", success: true });
    } catch (error) {
        res.status(500).json({ message: "Rolni o'chirishda xatolik yuz berdi.", success: false, error: error.message });
    }
};

module.exports = {
    createStage,
    updateStage,
    deleteStage,
    getAllStages
};
