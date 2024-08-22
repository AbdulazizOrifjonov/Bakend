const { Student } = require("../models/student.models");

// ------------------ Get All Student  ---------------------
const getAllStudent = async (req, res) => {
    try {
        const groups = await Student.find({});
        res.json({ message: "Barch studentlar muvoffaqiyatli olindi ", success: true, groups })
    } catch (error) {
        res.status(500).json({ message: "Gruhlarni olishda hetolik yuz berdi", success: false, error: error.message })
    }
}
//-----------------------student Yaratish-------------------------
const createStudent = async (req, res) => {
    try {
        const { lid_id,
            first_name,
            last_name,
            phone_number,
            birthday

        } = req.body;

        const existingStudednt = await Student.findOne({
            lid_id,
            first_name,
            last_name,
            phone_number,
            birthday

        });
        if (existingStudednt) {
            return res.status(404).json({ message: 'Bu student mavjud emas', success: false });
        }
        //Yangi student yratish
        const newStudent = new Student({
            lid_id,
            first_name,
            last_name,
            phone_number,
            birthday


        });
        await newStudent.save();
        res.status(201).json({ message: "Yangi student muvaffaqiyatli yaratildi", success: true, group: newStudent });
    } catch (error) {
        res.status(500).json({ message: "student yaratishda hatolik yuz berdi", success: false, error: error.message })
    }
}

// -------------------------studentni yangilaish---------------------

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params; // Guruh IDsi URL'dan olinadi.
        const {
            lid_id,
            first_name,
            last_name,
            phone_number,
            birthday


        } = req.body; // Yangilanishi kerak bo'lgan barcha maydonlar req.body dan olinadi.

        // findByIdAndUpdate metodini chaqirish, bu yerda yangilanishlarni to'plamiz va yangilangan hujjatni qaytarish uchun {new: true} opsiyasidan foydalanamiz.
        const updatedStudednt = await Student.findByIdAndUpdate(id, {
            lid_id,
            first_name,
            last_name,
            phone_number,
            birthday


        }, { new: true });

        if (!updatedStudednt) {
            return res.status(404).json({ message: "Guruh topilmadi", success: false });
        }

        // Yangilangan guruh ma'lumotlari bilan javob qaytaramiz.
        res.json({ message: "Guruh muvaffaqiyatli yangilandi", success: true, group: updatedStudednt });
    } catch (error) {
        res.status(500).json({
            message: "Guruhni o'zgartirishda xatolik yuz berdi",
            error: error.message // Xatolik tafsilotlari bilan javob qaytaramiz.
        });
    }
};
// ------------------- gruppani o'chirish ---------
const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedStudent = await Student.findById(id)
        if (!deletedStudent) {
            return res.status(404).json({ message: " Bu  studentni o'chirib bo'lmaydi", success: false })
        }
        await Student.findByIdAndDelete(id);
        res.json({ message: "student muvoffaqiyatlim o'chirildi ", success: true })
    } catch (error) {
        res.status(404).json({
            message: "studentni o'chirishlik fda hatolik yuz berdi ",
            success: false
        })
    }
}

module.exports = {
    createStudent,
    getAllStudent,
    updateStudent,
    deleteStudent
}
