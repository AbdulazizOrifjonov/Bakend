const { Lid } = require("../models/lid.models");

//----------------Get All Lids ----------------
const getAllLid = async (req, res) => {
    try {
        const lids = await Lid.find({});
        res.json({ message: "Barcha Oquvchilar muvoffaqiyatli olindi", success: true, lids })
    } catch (error) {
        res.status(500).json({
            message: "O'quvchini ro'yhatga olishda hatolik yuz berdi",
            success: false,
            error: error.message
        })
    }
}
// -------------------- Create Lid ----------------

const createLid = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reason_id
        } = req.body;

        const existingLid = await Lid.findOne({
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reason_id
        });

        if (existingLid) { // Logika teskari qilindi
            return res.status(404).json({
                message: "Bu yozuv avvalroq mavjud", // O'zgartirilgan xabar
                success: false
            });
        }

        // Yangi O'quvchi qo'shish
        const newLid = new Lid({
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reason_id
        });

        await newLid.save();

        res.status(201).json({
            message: "Yangi o'quvchi muvaffaqiyatli yaratildi",
            success: true,
            lid: newLid
        });

    } catch (error) {
        res.status(409).json({
            message: "O'quvchi yaratishda xatolik yuz berdi", // Matndagi xatolik tuzatildi
            success: false,
            error: error.message
        });
    }
};
// -------------------------gurpani yangilaish---------------------

const updateLid = async (req, res) => {
    try {
        const { id } = req.params; // O'quvchi IDsi URL'dan olinadi.
        const {
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reason_id
        } = req.body; // Yangilanishi kerak bo'lgan barcha maydonlar req.body dan olinadi.

        // findByIdAndUpdate metodini chaqirish, bu yerda yangilanishlarni to'plamiz va yangilangan hujjatni qaytarish uchun {new: true} opsiyasidan foydalanamiz.
        const updatedLid = await Lid.findByIdAndUpdate(id, {
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reason_id
        }, { new: true });

        if (!updatedLid) {
            return res.status(404).json({ message: "O'quvchi topilmadi", success: false });
        }

        // Yangilangan guruh ma'lumotlari bilan javob qaytaramiz.
        res.json({ message: "O'quvchi muvaffaqiyatli yangilandi", success: true, group: updatedLid });
    } catch (error) {
        res.status(500).json({
            message: "Guruhni o'zgartirishda xatolik yuz berdi",
            error: error.message // Xatolik tafsilotlari bilan javob qaytaramiz.
        });
    }
};
// ------------------Delete Lid ----------------
const deleteLid = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedLid = await Lid.findById(id);
        if (!deletedLid) {
            return res.status(404).json({ message: " Bu  gurpani o'chirib bo'lmaydi", success: false })
        }
        await Lid.findByIdAndDelete(id);
        res.json({ message: "gurpa muvoffaqiyatlim o'chirildi ", success: true })
    } catch (error) {
        res.status(400).json({
            message: "Guruhni o'zgartirishda hatolik yuz berdi",
            success: false,
            error: error.message // Xatolik top
        })
    }
}

// ------------------ get bay aydi ------------
const getByIdLid = async (req, res) => {
    const { id } = req.params; // URL'dan o'quvchi ID'sini oling

    try {
        // Mongoose'ning findById metodidan foydalanib, o'quvchini toping va bog'liq maydonlarni populyatsiya qiling
        const lid = await Lid.findById(id)
            .populate('lid_status_id')
            .populate('cancel_reason_id')
            .populate('lid_stage_id')
            .populate('trial_lesson_group_id');

        if (!lid) {
            return res.status(404).json({
                message: "Berilgan ID'ga ega o'quvchi topilmadi",
                success: false
            });
        }

        res.json({
            message: "O'quvchi muvaffaqiyatli topildi",
            success: true,
            lid: lid
        });
    } catch (error) {
        res.status(500).json({
            message: "O'quvchini topishda xatolik yuz berdi",
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    getAllLid,
    createLid,
    updateLid,
    deleteLid,
    getByIdLid
}







