const { Router } = require("express");
const payment = Router();

const {
    createStudent,
    getAllStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentsControllers")

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: API endpoints for managing payments
 */

/**
 * @swagger
 * /payment/createStudent:
 *   post:
 *     summary: Create a new student payment
 *     tags: [Payment]
 *     description: Create a new student payment with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       '200':
 *         description: Student payment created successfully
 *       '400':
 *         description: Bad request
 */
payment.post("/createStudent", createStudent),

/**
 * @swagger
 * /payment/updateStudent/{id}:
 *   put:
 *     summary: Update a student payment
 *     tags: [Payment]
 *     description: Update an existing student payment with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the student payment to update
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
 *         description: Student payment updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Student payment not found
 */
payment.put("/updateStudent/:id", updateStudent),

/**
 * @swagger
 * /payment/deleteStudent/{id}:
 *   delete:
 *     summary: Delete a student payment
 *     tags: [Payment]
 *     description: Delete a student payment by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Student payment deleted successfully
 *       '404':
 *         description: Student payment not found
 */
payment.delete("/deleteStudent/:id", deleteStudent),

/**
 * @swagger
 * /payment/getAllStudent:
 *   get:
 *     summary: Get all student payments
 *     tags: [Payment]
 *     description: Retrieve a list of all student payments
 *     responses:
 *       '200':
 *         description: A list of student payments
 *       '500':
 *         description: Internal server error
 */
payment.get("/getAllStudent", getAllStudent),

module.exports = { payment };














// const { Router } = require("express");
// const payment = Router();

// const {
//     createStudent,
//     getAllStudent,
//     updateStudent,
//     deleteStudent
// } = require("../controllers/stpaymentudentsControllers")


// payment.post("/createStudent", createStudent),
//     payment.delete("/deleteStudent/:id", deleteStudent),
//     payment.put("/updateStudent/:id", updateStudent),
//     payment.get("/getAllStudent", getAllStudent),

//     module.exports = { payment };









