const { Router } = require("express");
const student_lesson = Router();

const {
    createStudent_Lesson,
    getAllStudent_Lesson,
    updateStudent_Lesson,
    deleteStudent_Lesson,
    getByIdStudent_Lesson
} = require("../controllers/studentLessonControllers");

const studentLessonValidationSchema = require("../validation/studentLessonValidation");

// Validation middleware
const validateStudentLesson = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
    
};

/**
 * @swagger
 * tags:
 *   name: StudentLesson
 *   description: API endpoints for managing student lessons
 */

/**
 * @swagger
 * /student_lesson/createStudent_Lesson:
 *   post:
 *     summary: Create a new student lesson
 *     tags: [StudentLesson]
 *     description: Create a new student lesson with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentLesson'
 *     responses:
 *       '201':
 *         description: Student lesson created successfully
 *       '400':
 *         description: Bad request due to validation error
 */
student_lesson.post("/createStudent_Lesson", validateStudentLesson(studentLessonValidationSchema), createStudent_Lesson);

/**
 * @swagger
 * /student_lesson/updateStudent_Lesson/{id}:
 *   put:
 *     summary: Update an existing student lesson
 *     tags: [StudentLesson]
 *     description: Update student lesson details for the specified ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the student lesson to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentLesson'
 *     responses:
 *       '200':
 *         description: Student lesson updated successfully
 *       '400':
 *         description: Bad request due to validation error
 *       '404':
 *         description: Student lesson not found
 */
student_lesson.put("/updateStudent_Lesson/:id", validateStudentLesson(studentLessonValidationSchema), updateStudent_Lesson);

/**
 * @swagger
 * /student_lesson/deleteStudent_Lesson/{id}:
 *   delete:
 *     summary: Delete a student lesson
 *     tags: [StudentLesson]
 *     description: Delete the student lesson with the specified ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Student lesson deleted successfully
 *       '404':
 *         description: Student lesson not found
 */
student_lesson.delete("/deleteStudent_Lesson/:id", deleteStudent_Lesson);

/**
 * @swagger
 * /student_lesson/getAllStudent_Lesson:
 *   get:
 *     summary: Get all student lessons
 *     tags: [StudentLesson]
 *     description: Retrieve a list of all student lessons
 *     responses:
 *       '200':
 *         description: List of student lessons
 *       '500':
 *         description: Internal server error
 */
student_lesson.get("/getAllStudent_Lesson", getAllStudent_Lesson);

/**
 * @swagger
 * /student_lesson/getByIdStudent_Lesson/{id}:
 *   get:
 *     summary: Get a student lesson by ID
 *     tags: [StudentLesson]
 *     description: Retrieve a student lesson by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the student lesson to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Student lesson retrieved successfully
 *       '404':
 *         description: Student lesson not found
 *       '500':
 *         description: Internal server error
 */
student_lesson.get("/getByIdStudent_Lesson/:id", getByIdStudent_Lesson);

module.exports = { student_lesson };












// const { Router } = require("express");
// const student_lesson = Router();

// const {
//     createStudent_Lesson,
//     getAllStudent_Lesson,
//     updateStudent_Lesson,
//     deleteStudent_Lesson,
//     getByIdStudent_Lesson
// } = require("../controllers/studentLessonControllers");

// const studentLessonValidationSchema = require("../validation/studentLessonValidation");

// // Validation middleware
// const validateStudentLesson = (schema) => (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }
//     next();
// };

// // Router setup with validation middleware
// student_lesson.post("/createStudent_Lesson", validateStudentLesson(studentLessonValidationSchema), createStudent_Lesson);
// student_lesson.put("/updateStudent_Lesson/:id", validateStudentLesson(studentLessonValidationSchema), updateStudent_Lesson);
// student_lesson.delete("/deleteStudent_Lesson/:id", deleteStudent_Lesson);
// student_lesson.get("/getAllStudent_Lesson", getAllStudent_Lesson);
// student_lesson.get("/getByIdStudent_Lesson/:id", getByIdStudent_Lesson);

// module.exports = { student_lesson };
