const { Reason_Lid } = require('../models/reasonLid.model');

// Retrieve all entries
const getAllReason_Lid = async (req, res) => {
    try {
        const reasons = await Reason_Lid.find({});
        res.json({ message: "Barcha sabablar muvaffaqiyatli olingan.", success: true, reasons });
    } catch (error) {
        res.status(500).json({ message: "Sabablarni olishda xatolik yuz berdi.", success: false, error: error.message });
    }
};

// Create a new entry
const createReason_Lid = async (req, res) => {
    try {
        const { reason_lid } = req.body;

        // Check if the entry already exists
        const existingReason_Lid = await Reason_Lid.findOne({ reason_lid });
        if (existingReason_Lid) {
            return res.status(400).json({ message: "Bu nomdagi sabab allaqachon mavjud.", success: false });
        }

        // Create a new entry
        const newReason_Lid = new Reason_Lid({ reason_lid });
        await newReason_Lid.save();

        res.status(201).json({ message: "Sabab muvaffaqiyatli yaratildi.", success: true, reason: newReason_Lid });
    } catch (error) {
        res.status(500).json({ message: "Sabab yaratishda xatolik yuz berdi.", success: false, error: error.message });
    }
};

// Update an existing entry
const updateReason_Lid = async (req, res) => {
    try {
        const { reason_lid } = req.body;
        const reasonId = req.params.id;

        // Check if the entry exists
        const existingReason_Lid = await Reason_Lid.findById(reasonId);
        if (!existingReason_Lid) {
            return res.status(404).json({ message: "Sabab topilmadi.", success: false });
        }

        // Update the entry
        existingReason_Lid.reason_lid = reason_lid;
        await existingReason_Lid.save();

        res.json({ message: "Sabab muvaffaqiyatli yangilandi.", success: true, reason: existingReason_Lid });
    } catch (error) {
        res.status(500).json({ message: "Sababni yangilashda xatolik.", success: false, error: error.message });
    }
};

// Delete an entry
const deleteReason_Lid = async (req, res) => {
    try {
        const reasonId = req.params.id;

        // Check if the entry exists
        const existingReason_Lid = await Reason_Lid.findById(reasonId);
        if (!existingReason_Lid) {
            return res.status(404).json({ message: "Sabab topilmadi.", success: false });
        }

        // Check if the entry is deletable (implement your logic here if needed)
        const deletable = true;

        if (!deletable) {
            return res.status(400).json({ message: "Bu sabab o'chirib bo'lmaydi.", success: false });
        }

        // Delete the entry
        await Reason_Lid.findByIdAndDelete(reasonId);
        res.json({ message: "Sabab muvaffaqiyatli o'chirildi.", success: true });
    } catch (error) {
        res.status(500).json({ message: "Sababni o'chirishda xatolik yuz berdi.", success: false, error: error.message });
    }
};

module.exports = {
    createReason_Lid,
    updateReason_Lid,
    deleteReason_Lid,
    getAllReason_Lid
};
