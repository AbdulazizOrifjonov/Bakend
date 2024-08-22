const { Router } = require("express");
const status = Router();

const {
    createLid_Status,
    updateLid_Status,
    deleteLid_Status,
    getAllLid_Status
} = require("../controllers/lidStatusControllrs")
const LidStatusValidationSchema = require("../validation/LidStatusValidation")
const validationSchema = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
}

/**
 * @swagger
 * tags:
 *   name: Lid_Status
 *   description: API endpoints for managing Lid status
 */

/**
 * @swagger
 * /status/createLid_Status:
 *   post:
 *     summary: Create a new Lid status
 *     tags: [Lid_Status]
 *     description: Create a new Lid status with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LidStatus'
 *     responses:
 *       '200':
 *         description: Lid status created successfully
 *       '400':
 *         description: Bad request due to validation error
 */
status.post("/createLid_Status", validationSchema(LidStatusValidationSchema), createLid_Status),

/**
 * @swagger
 * /status/updateLid_Status/{id}:
 *   put:
 *     summary: Update a Lid status
 *     tags: [Lid_Status]
 *     description: Update an existing Lid status with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Lid status to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LidStatus'
 *     responses:
 *       '200':
 *         description: Lid status updated successfully
 *       '400':
 *         description: Bad request due to validation error
 *       '404':
 *         description: Lid status not found
 */
status.put("/updateLid_Status/:id", validationSchema(LidStatusValidationSchema), updateLid_Status),

/**
 * @swagger
 * /status/deleteLid_Status/{id}:
 *   delete:
 *     summary: Delete a Lid status
 *     tags: [Lid_Status]
 *     description: Delete a Lid status by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lid status deleted successfully
 *       '404':
 *         description: Lid status not found
 */
status.delete("/deleteLid_Status/:id", deleteLid_Status),

/**
 * @swagger
 * /status/getAllLid_Status:
 *   get:
 *     summary: Get all Lid statuses
 *     tags: [Lid_Status]
 *     description: Retrieve a list of all Lid statuses
 *     responses:
 *       '200':
 *         description: A list of Lid statuses
 *       '500':
 *         description: Internal server error
 */
status.get("/getAllLid_Status", getAllLid_Status),

module.exports = { status };













// const { Router } = require("express");
// const status = Router();

// const {
//     createLid_Status,
//     updateLid_Status,
//     deleteLid_Status,
//     getAllLid_Status
// } = require("../controllers/lidStatusControllrs")
// const LidStatusValidationSchema = require("../validation/LidStatusValidation")
// const validationSchema = (schema) => (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }
//     next();
// }
// status.post("/createLid_Status", validationSchema(LidStatusValidationSchema), createLid_Status),
//     status.put("/updateLid_Status/:id", validationSchema(LidStatusValidationSchema), updateLid_Status),
//     status.delete("/deleteLid_Status/:id", deleteLid_Status),
//     status.get("/getAllLid_Status", getAllLid_Status),

//     module.exports = { status };




