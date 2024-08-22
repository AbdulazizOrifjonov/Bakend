const { Student_Lesson } = require("../models/studentLessonmodeule");

// ------------------ Get All Student_Lesson  ---------------------
const getAllStudent_Lesson = async (req, res) => {
    try {
        const groups = await Student_Lesson.find({});
        res.json({ message: "Barch studentlar muvoffaqiyatli olindi ", success: true, groups })
    } catch (error) {
        res.status(500).json({ message: "Gruhlarni olishda hetolik yuz berdi", success: false, error: error.message })
    }
}
//-----------------------student Yaratish-------------------------
const createStudent_Lesson = async (req, res) => {
    try {
        const { 
            is_there,
            lesson_id,
            student_id,
            reason,
            be_paid

        } = req.body;

        const existingStudednt = await Student_Lesson.findOne({
            is_there,
            lesson_id,
            student_id,
            reason,
            be_paid

        });
        if (existingStudednt) {
            return res.status(404).json({ message: 'Bu student mavjud emas', success: false });
        }
        //Yangi student yratish
        const newStudent_Lesson = new Student_Lesson({
            is_there,
            lesson_id,
            student_id,
            reason,
            be_paid


        });
        await newStudent_Lesson.save();
        res.status(201).json({ message: "Yangi student muvaffaqiyatli yaratildi", success: true, group: newStudent_Lesson });
    } catch (error) {
        res.status(500).json({ message: "student yaratishda hatolik yuz berdi", success: false, error: error.message })
    }
}

// -------------------------studentni yangilaish---------------------

const updateStudent_Lesson = async (req, res) => {
    try {
        const { id } = req.params; // Guruh IDsi URL'dan olinadi.
        const {
            is_there,
            lesson_id,
            student_id,
            reason,
            be_paid


        } = req.body; // Yangilanishi kerak bo'lgan barcha maydonlar req.body dan olinadi.

        // findByIdAndUpdate metodini chaqirish, bu yerda yangilanishlarni to'plamiz va yangilangan hujjatni qaytarish uchun {new: true} opsiyasidan foydalanamiz.
        const updatedStudednt = await Student_Lesson.findByIdAndUpdate(id, {
            is_there,
            lesson_id,
            student_id,
            reason,
            be_paid


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
const deleteStudent_Lesson = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedStudent_Lesson = await Student_Lesson.findById(id)
        if (!deletedStudent_Lesson) {
            return res.status(404).json({ message: " Bu  studentni o'chirib bo'lmaydi", success: false })
        }
        await Student_Lesson.findByIdAndDelete(id);
        res.json({ message: "student muvoffaqiyatlim o'chirildi ", success: true })
    } catch (error) {
        res.status(404).json({
            message: "studentni o'chirishlik fda hatolik yuz berdi ",
            success: false
        })
    }
}
// ------------------- Get Student by ID ---------
const getByIdStudent_Lesson = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student_Lesson.findById(id).populate("lesson_id student_id");
        if (!student) {
            return res.status(404).json({ message: "Berilgan ID'ga ega student topilmadi", success: false });
        }
        res.json({ message: "Student muvoffaqiyatli topildi", success: true, student: student });
    } catch (error) {
        res.status(500).json({ message: "Studentni topishda xatolik yuz berdi", success: false, error: error.message });
    }
};
module.exports = {
    createStudent_Lesson,
    getAllStudent_Lesson,
    updateStudent_Lesson,
    deleteStudent_Lesson,
    getByIdStudent_Lesson
}
