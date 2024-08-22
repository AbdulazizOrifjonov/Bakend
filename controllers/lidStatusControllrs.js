const { Lid_Status } = require('../models/lidStatus.modul');

// ----------------Barcha Rollarni Olish-------------------
const getAllLid_Status = async (req, res) => {
    try {
        const roles = await Lid_Status.find({});
        res.json({ message: "Barcha rollar muvaffaqiyatli olingan.", success: true, roles });
    } catch (error) {
        res.status(500).json({ message: "Rollarni olishda xatolik yuz berdi.", success: false, error: error.message });
    }
};
 
// ----------------Rol Yaratish-------------------
const createLid_Status = async (req, res) => {
    try {   
        const { status } = req.body;

        // Shunday nomli rol allaqachon mavjudligini tekshirish
        const existingLid_Status = await Lid_Status.findOne({ status });
        if (existingLid_Status) {
            return res.status(400).json({ message: "Bu nomdagi rol allaqachon mavjud.", success: false });
        }

        // Yangi rol yaratish
        const newLid_Status = new Lid_Status({ status });
        await newLid_Status.save();

        res.status(201).json({ message: "Rol muvaffaqiyatli yaratildi.", success: true, role: newLid_Status });
    } catch (error) {
        res.status(500).json({ message: "Rol yaratishda xatolik yuz berdi.", success: false, error: error.message });
    }
};

// ----------------Rolni Yangilash-------------------
const updateLid_Status = async (req, res) => {
    try {
        const { status } = req.body;
        const roleId = req.params.id;

        // Rolning mavjudligini tekshirish
        const existingLid_Status = await Lid_Status.findById(roleId);
        if (!existingLid_Status) {
            return res.status(404).json({ message: "Rol topilmadi.", success: false });
        }

        // Rol nomini yangilash
        existingLid_Status.status = status;
        await existingLid_Status.save();

        res.json({ message: "Rol muvaffaqiyatli yangilandi.", success: true, role: existingLid_Status });
    } catch (error) {
        res.status(500).json({ message: "Rolni yangilashda xatolik.", success: false, error: error.message });
    }
};



// ----------------Rolni O'chirish-------------------
const deleteLid_Status = async (req, res) => {
    try {
        const roleId = req.params.id;

        // Rolning mavjudligini tekshirish
        const existingLid_Status = await Lid_Status.findById(roleId);
        if (!existingLid_Status) {
            return res.status(404).json({ message: "Rol topilmadi.", success: false });
        }

        // Rol o'chirilishi mumkinligini tekshirish (masalan, faqat bir rol emas)
        const deletable = true; // Bu yerda logikangizni amalga oshiring

        if (!deletable) {
            return res.status(400).json({ message: "Bu rol o'chirib bo'lmaydi.", success: false });
        }

        // Rolni o'chirish
        await Lid_Status.findByIdAndDelete(roleId);
        res.json({ message: "Rol muvaffaqiyatli o'chirildi.", success: true });
    } catch (error) {
        res.status(500).json({ message: "Rolni o'chirishda xatolik yuz berdi.", success: false, error: error.message });
    }
};
//lid status get data
// const getByIdLid_Status = async (req, res) =>{
//     try {
//         const id = req.params.id;
//         const lidstatus = await Lid_Status.findById(id).populate()
//     } catch (error) {
//         res.status(404).json({ message:"Rolni o'chirldi yuz berdi.", error: error.message   });
//     }
// }
module.exports = {
    createLid_Status,
    updateLid_Status,
    deleteLid_Status,
    getAllLid_Status

};
