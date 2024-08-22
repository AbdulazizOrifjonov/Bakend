const { Router } = require("express");
const reason_lid = Router();

const {
    createReason_Lid,
    updateReason_Lid,
    deleteReason_Lid,
    getAllReason_Lid
} = require("../controllers/reasonLidControllers")
const reasonLidValidation = require("../validation/reasonLidValidation")
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
 *   name: Reason_Lid
 *   description: API endpoints for managing reasons related to Lid
 */

/**
 * @swagger
 * /reason_lid/createReason_Lid:
 *   post:
 *     summary: Create a new reason related to Lid
 *     tags: [Reason_Lid]
 *     description: Create a new reason related to Lid with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReasonLid'
 *     responses:
 *       '200':
 *         description: Reason related to Lid created successfully
 *       '400':
 *         description: Bad request due to validation error
 */
reason_lid.post("/createReason_Lid", validationSchema(reasonLidValidation), createReason_Lid),

/**
 * @swagger
 * /reason_lid/updateReason_Lid/{id}:
 *   put:
 *     summary: Update a reason related to Lid
 *     tags: [Reason_Lid]
 *     description: Update an existing reason related to Lid with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the reason related to Lid to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReasonLid'
 *     responses:
 *       '200':
 *         description: Reason related to Lid updated successfully
 *       '400':
 *         description: Bad request due to validation error
 *       '404':
 *         description: Reason related to Lid not found
 */
reason_lid.put("/updateReason_Lid/:id", validationSchema(reasonLidValidation), updateReason_Lid),

/**
 * @swagger
 * /reason_lid/deleteReason_Lid/{id}:
 *   delete:
 *     summary: Delete a reason related to Lid
 *     tags: [Reason_Lid]
 *     description: Delete a reason related to Lid by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Reason related to Lid deleted successfully
 *       '404':
 *         description: Reason related to Lid not found
 */
reason_lid.delete("/deleteReason_Lid/:id", deleteReason_Lid),

/**
 * @swagger
 * /reason_lid/getAllReason_Lid:
 *   get:
 *     summary: Get all reasons related to Lid
 *     tags: [Reason_Lid]
 *     description: Retrieve a list of all reasons related to Lid
 *     responses:
 *       '200':
 *         description: A list of reasons related to Lid
 *       '500':
 *         description: Internal server error
 */
reason_lid.get("/getAllReason_Lid", getAllReason_Lid),

module.exports = { reason_lid };











// const { Router } = require("express");
// const reason_lid = Router();

// const {
//     createReason_Lid,
//     updateReason_Lid,
//     deleteReason_Lid,
//     getAllReason_Lid
// } = require("../controllers/reasonLidControllers")
// const reasonLidValidation = require("../validation/reasonLidValidation")
// const validationSchema = (schema) => (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }
//     next();
// }

// reason_lid.post("/createReason_Lid", validationSchema(reasonLidValidation), createReason_Lid),
//     reason_lid.put("/updateReason_Lid/:id", validationSchema(reasonLidValidation), updateReason_Lid),
//     reason_lid.delete("/deleteReason_Lid/:id", deleteReason_Lid),
//     reason_lid.get("/getAllReason_Lid", getAllReason_Lid),

//     module.exports = { reason_lid };










