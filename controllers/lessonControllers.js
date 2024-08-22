const { Lesson } = require("../models/lesson.model");

// Barcha Lessonlarni olish
const getAllLesson = async (req, res) => {
    try {
        const Lessones = await Lesson.find({});
        res.json({ success: true, message: "Barcha Lessonlar muvaffaqiyatli olindi", Lessones });
    } catch (error) {
        res.status(500).json({ success: false, message: "Barcha Lessonlarni olishda xatolik yuz berdi" });
    }
}

// Yangi Lesson yaratish
const createLesson = async (req, res) => {
    try {
        const { lesson_theme, lesson_number, group_id, lesson_date } = req.body;


        const newLesson = new Lesson({
            lesson_theme: lesson_theme,
            lesson_number: lesson_number,
            group_id: group_id,
            lesson_date: lesson_date,
        });
        await newLesson.save();
        res.status(201).json(newLesson);
    } catch (error) {
        // Xatolik haqida xabarni "validation" xatoligiga o'zgartiring
        res.status(400).json({ message: "Xatolik: Maydon to'ldirish majburiy" });
    }
};


const updateLesson = async (req, res) => {
    const lessonId = req.params.id;
    const { lessonTheme } = req.body;

    try {
        const existingLesson = await Lesson.findById(lessonId);

        if (!existingLesson) {
            return res.status(404).json({ success: false, message: "Dars topilmadi." });
        }

        existingLesson.lessonTheme = lessonTheme;
        await existingLesson.save();

        res.json({
            success: true,
            message: "Dars muvaffaqiyatli yangilandi.",
            lesson: existingLesson
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Darsni yangilashda xatolik yuz berdi.",
            error: error.message
        });
    }
};



// Lessonni o'chirish
const deleteLesson = async (req, res) => {
    try {
        const LessonId = req.params.id;
        const existingLesson = await Lesson.findById(LessonId);
        if (!existingLesson) {
            return res.status(404).json({ success: false, message: "Lesson topilmadi." });
        }
        const deletable = true; // O'chirilishi mumkinligini tekshirish uchun logikani qo'shing
        if (!deletable) {
            return res.status(400).json({ success: false, message: "Bu Lesson o'chirib bo'lmaydi." });
        }
        await Lesson.findByIdAndDelete(LessonId);
        res.json({ success: true, message: "Lesson muvaffaqiyatli o'chirildi." });
    } catch (error) {
        res.status(500).json({ success: false, message: "Lessonni o'chirishda xatolik yuz berdi.", error: error.message });
    }
};
// get by id
const getByIdLesson = async (req, res) => {
    try {
        const lessonid = req.params.id;
        const lesson = await Lesson.findById(lessonid).populate("group_id");
        if (!lesson) {
            return res.status(404).json({ message: "lesson topilmadi" });
        }
        res.status(200).json({ message: "lesson muvaffaqiyatli olindi", lesson });
    } catch (error) {
        res.status(500).json({ message: "lessonni olishda hatolik yozz berdi", error: error.message });
    }
}
module.exports = {
    createLesson,
    updateLesson,
    deleteLesson,
    getAllLesson,
    getByIdLesson
};
