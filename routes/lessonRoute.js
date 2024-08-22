 









const { Router } = require("express");
const lesson = Router();

const {
    createLesson,
    updateLesson,
    deleteLesson,
    getAllLesson,
    getByIdLesson
} = require("../controllers/lessonControllers")
const lessonValidationSchema = require("../validation/lessonValiation");

const lessonValidation = (schema) => (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }
    next();
};
lesson.post("/createLesson", lessonValidation(lessonValidationSchema), createLesson),
    lesson.put("/updateLesson/:id",lessonValidation(lessonValidationSchema), updateLesson),
    lesson.delete("/deleteLesson/:id", deleteLesson),
    lesson.get("/getAllLesson", getAllLesson),
    lesson.get("/getByIdLesson/:id", getByIdLesson),

    module.exports = { lesson };







// lifo fifo firs inpay lid code ride data strukture rekurjen data fstrukture 
     











