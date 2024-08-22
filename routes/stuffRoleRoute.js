const express = require('express');
const stuffRoleValidationSchema = require('../validation/stuffRoleValidation');
const { Router } = express;
const stuff_role = Router();

const {
    createStuff_Role,
    getAllStuff_Role,
    updateStuff_Role,
    deleteStuff_Role,
    getStufById
} = require("../controllers/stuffRoleControllers");

// Validation middleware
const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};

/**
 * @swagger
 * tags:
 *   name: Stuff_Role
 *   description: API endpoints for managing stuff roles
 */

/**
 * @swagger
 * /stuff_role/createStuff_Role:
 *   post:
 *     summary: Create a new stuff role
 *     tags: [Stuff_Role]
 *     description: Create a new stuff role with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StuffRole'
 *     responses:
 *       '201':
 *         description: Stuff role created successfully
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
stuff_role.post("/createStuff_Role", validate(stuffRoleValidationSchema), createStuff_Role);

/**
 * @swagger
 * /stuff_role/updateStuff_Role/{id}:
 *   put:
 *     summary: Update a stuff role
 *     tags: [Stuff_Role]
 *     description: Update an existing stuff role with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the stuff role to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StuffRole'
 *     responses:
 *       '200':
 *         description: Stuff role updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Stuff role not found
 *       '500':
 *         description: Internal server error
 */
stuff_role.put("/updateStuff_Role/:id", validate(stuffRoleValidationSchema), updateStuff_Role);

/**
 * @swagger
 * /stuff_role/deleteStuff_Role/{id}:
 *   delete:
 *     summary: Delete a stuff role
 *     tags: [Stuff_Role]
 *     description: Delete a stuff role by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Stuff role deleted successfully
 *       '404':
 *         description: Stuff role not found
 *       '500':
 *         description: Internal server error
 */
stuff_role.delete("/deleteStuff_Role/:id", deleteStuff_Role);

/**
 * @swagger
 * /stuff_role/getStufById/{id}:
 *   get:
 *     summary: Get a stuff role by ID
 *     tags: [Stuff_Role]
 *     description: Get a stuff role by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A stuff role object
 *       '404':
 *         description: Stuff role not found
 *       '500':
 *         description: Internal server error
 */
stuff_role.get("/getStufById/:id", getStufById);

/**
 * @swagger
 * /stuff_role/getAllStuff_Role:
 *   get:
 *     summary: Get all stuff roles
 *     tags: [Stuff_Role]
 *     description: Retrieve a list of all stuff roles
 *     responses:
 *       '200':
 *         description: A successful response with a list of stuff roles
 *       '500':
 *         description: Internal server error
 */
stuff_role.get("/getAllStuff_Role", getAllStuff_Role);

module.exports = { stuff_role };








// const express = require('express');
// const stuffRoleValidationSchema = require('../validation/stuffRoleValidation');
// const { Router } = express;
// const stuff_role = Router();

// const {
//     createStuff_Role,
//     getAllStuff_Role,
//     updateStuff_Role,
//     deleteStuff_Role,
//     getStufById
// } = require("../controllers/stuffRoleControllers");

// // Validation middleware
// const validate = (schema) => (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }
//     next();
// };

// // Routes with validation middleware
// stuff_role.post("/createStuff_Role", validate(stuffRoleValidationSchema), createStuff_Role);
// stuff_role.put("/updateStuff_Role/:id", validate(stuffRoleValidationSchema), updateStuff_Role);
// stuff_role.delete("/deleteStuff_Role/:id", deleteStuff_Role);
// stuff_role.get("/getStufById/:id", getStufById);
// stuff_role.get("/getAllStuff_Role", getAllStuff_Role);

// module.exports = { stuff_role };
