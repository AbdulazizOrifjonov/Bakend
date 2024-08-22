const { Router } = require("express");
const lid = Router();

const {
    getAllLid,
    createLid,
    updateLid,
    deleteLid,
    getByIdLid
} = require("../controllers/lidControllers")
const LidValidationSchema = require("../validation/lidValidation")
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
 *   name: Lid
 *   description: API endpoints for managing Lid
 */

/**
 * @swagger
 * /lid/getAllLid:
 *   get:
 *     summary: Get all Lid
 *     tags: [Lid]
 *     description: Retrieve a list of all Lid
 *     responses:
 *       '200':
 *         description: A list of Lid
 *       '500':
 *         description: Internal server error
 */
lid.get("/getAllLid", getAllLid),

/**
 * @swagger
 * /lid/createLid:
 *   post:
 *     summary: Create a new Lid
 *     tags: [Lid]
 *     description: Create a new Lid with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lid'
 *     responses:
 *       '200':
 *         description: Lid created successfully
 *       '400':
 *         description: Bad request due to validation error
 */
lid.post("/createLid", validationSchema(LidValidationSchema), createLid),

/**
 * @swagger
 * /lid/updateLid/{id}:
 *   put:
 *     summary: Update a Lid
 *     tags: [Lid]
 *     description: Update an existing Lid with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Lid to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lid'
 *     responses:
 *       '200':
 *         description: Lid updated successfully
 *       '400':
 *         description: Bad request due to validation error
 *       '404':
 *         description: Lid not found
 */
lid.put("/updateLid/:id", validationSchema(LidValidationSchema), updateLid),

/**
 * @swagger
 * /lid/deleteLid/{id}:
 *   delete:
 *     summary: Delete a Lid
 *     tags: [Lid]
 *     description: Delete a Lid by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lid deleted successfully
 *       '404':
 *         description: Lid not found
 */
lid.delete("/deleteLid/:id", deleteLid),

/**
 * @swagger
 * /lid/getByIdLid/{id}:
 *   get:
 *     summary: Get a Lid by ID
 *     tags: [Lid]
 *     description: Get a Lid by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A Lid object
 *       '404':
 *         description: Lid not found
 */
lid.get("/getByIdLid/:id", getByIdLid),

module.exports = { lid };




















// const { Router } = require("express");
// const lid = Router();

// const {
//     getAllLid,
//     createLid,
//     updateLid,
//     deleteLid,
//     getByIdLid
// } = require("../controllers/lidControllers")
// const LidValidationSchema = require("../validation/lidValidation")
// const validationSchema = (schema) => (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }
//     next();
// }
// lid.get("/getAllLid", getAllLid)
// lid.post("/createLid", validationSchema(LidValidationSchema), createLid)
// lid.put("/updateLid/:id", validationSchema(LidValidationSchema), updateLid)
// lid.delete("/d eleteLid/:id", deleteLid)
// lid.get("/getByIdLid/:id", getByIdLid)


// module.exports = { lid }