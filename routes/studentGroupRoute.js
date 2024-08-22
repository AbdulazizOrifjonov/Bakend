const { Router } = require("express");
const student_group = Router();

const {
    createStudent_Group,
    getAllStudent_Group,
    updateStudent_Group,
    deleteStudent_Group,
    getByIdStudent_Group
} = require("../controllers/studentGroupControllers");

const studentGroupValidationSchema = require("../validation/studentGroupValidaton");

// Middleware for validating data
const validateStudentGroup = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};

/**
 * @swagger
 * tags:
 *   name: StudentGroup
 *   description: API endpoints for managing student groups
 */

/**
 * @swagger
 * /student_group/createStudent_Group:
 *   post:
 *     summary: Create a new student group
 *     tags: [StudentGroup]
 *     description: Create a new student group with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentGroup'
 *     responses:
 *       '201':
 *         description: Student group created successfully
 *       '400':
 *         description: Bad request due to validation error
 */
student_group.post("/createStudent_Group", validateStudentGroup(studentGroupValidationSchema), createStudent_Group);

/**
 * @swagger
 * /student_group/updateStudent_Group/{id}:
 *   put:
 *     summary: Update an existing student group
 *     tags: [StudentGroup]
 *     description: Update student group details for the specified ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the student group to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentGroup'
 *     responses:
 *       '200':
 *         description: Student group updated successfully
 *       '400':
 *         description: Bad request due to validation error
 *       '404':
 *         description: Student group not found
 */
student_group.put("/updateStudent_Group/:id", validateStudentGroup(studentGroupValidationSchema), updateStudent_Group);

/**
 * @swagger
 * /student_group/deleteStudent_Group/{id}:
 *   delete:
 *     summary: Delete a student group
 *     tags: [StudentGroup]
 *     description: Delete the student group with the specified ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Student group deleted successfully
 *       '404':
 *         description: Student group not found
 */
student_group.delete("/deleteStudent_Group/:id", deleteStudent_Group);

/**
 * @swagger
 * /student_group/getAllStudent_Group:
 *   get:
 *     summary: Get all student groups
 *     tags: [StudentGroup]
 *     description: Retrieve a list of all student groups
 *     responses:
 *       '200':
 *         description: List of student groups
 *       '500':
 *         description: Internal server error
 */
student_group.get("/getAllStudent_Group", getAllStudent_Group);

/**
 * @swagger
 * /student_group/getByIdStudent_Group/{id}:
 *   get:
 *     summary: Get a student group by ID
 *     tags: [StudentGroup]
 *     description: Retrieve a student group by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the student group to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Student group retrieved successfully
 *       '404':
 *         description: Student group not found
 *       '500':
 *         description: Internal server error
 */
student_group.get("/getByIdStudent_Group/:id", getByIdStudent_Group);

module.exports = { student_group };














// const { Router } = require("express");
// const student_group = Router();

// const {
//     createStudent_Group,
//     getAllStudent_Group,
//     updateStudent_Group,
//     deleteStudent_Group,
//     getByIdStudent_Group
// } = require("../controllers/studentGroupControllers");

// const studentGroupValidationSchema = require("../validation/studentGroupValidaton");

// // Middleware for validating data
// const validateStudentGroup = (schema) => (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }
//     next();
// };

// // Router setup with validation middleware
// student_group.post("/createStudent_Group", validateStudentGroup(studentGroupValidationSchema), createStudent_Group);
// student_group.put("/updateStudent_Group/:id", validateStudentGroup(studentGroupValidationSchema), updateStudent_Group);
// student_group.delete("/deleteStudent_Group/:id", deleteStudent_Group);
// student_group.get("/getAllStudent_Group", getAllStudent_Group);
// student_group.get("/getByIdStudent_Group/:id", getByIdStudent_Group);

// module.exports = { student_group };
