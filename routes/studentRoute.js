const { Router } = require("express");
const student = Router();

const {
    createStudent,
    getAllStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentsControllers");
const { studentValidationSchema } = require("../validation/studentValidation");

const studentValidation = (schema) => (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }
    next();
};

/**
 * @swagger
 * tags:
 *   name: Student
 *   description: API endpoints for managing students
 */

/**
 * @swagger
 * /student/createStudent:
 *   post:
 *     summary: Create a new student
 *     tags: [Student]
 *     description: Create a new student with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       '201':
 *         description: Student created successfully
 *       '400':
 *         description: Bad request
 */
student.post("/createStudent", studentValidation(studentValidationSchema), createStudent);

/**
 * @swagger
 * /student/updateStudent/{id}:
 *   put:
 *     summary: Update a student
 *     tags: [Student]
 *     description: Update an existing student with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the student to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       '200':
 *         description: Student updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Student not found
 */
student.put("/updateStudent/:id", studentValidation(studentValidationSchema), updateStudent);

/**
 * @swagger
 * /student/deleteStudent/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags: [Student]
 *     description: Delete a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Student deleted successfully
 *       '404':
 *         description: Student not found
 */
student.delete("/deleteStudent/:id", deleteStudent);

/**
 * @swagger
 * /student/getAllStudent:
 *   get:
 *     summary: Get all students
 *     tags: [Student]
 *     description: Retrieve a list of all students
 *     responses:
 *       '200':
 *         description: A list of students
 *       '500':
 *         description: Internal server error
 */
student.get("/getAllStudent", getAllStudent);

module.exports = { student };













// const { Router } = require("express");
// const student = Router();

// const {
//     createStudent,
//     getAllStudent,
//     updateStudent,
//     deleteStudent
// } = require("../controllers/studentsControllers")
// const {studentValidationSchema} = require("..//validation/studentValidation")
// const studentValidation = (schema) => (req, res, next) => {
//     const validationResult = schema.validate(req.body);
//     if (validationResult.error) {
//         return res.status(400).send(validationResult.error.details[0].message);
//     }
//     next();
// };

// student.post("/createStudent", studentValidation(studentValidationSchema), createStudent),
//     student.delete("/deleteStudent/:id", deleteStudent),
//     student.put("/updateStudent/:id",studentValidation(studentValidationSchema), updateStudent),
//     student.get("/getAllStudent", getAllStudent),

//     module.exports = { student };









