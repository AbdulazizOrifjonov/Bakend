const { Router } = require("express");
const role = Router();

const {
    createRole,
    updateRole,
    deleteRole,
    getAllRoles
} = require("../controllers/roleControllers");

const roleValidationSchema = require("../validation/roleValidation");
const roleValidation = (schema) => (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }
    next();
};

/**
 * @swagger
 * tags:
 *   name: Role
 *   description: API endpoints for managing roles
 */

/**
 * @swagger
 * /role/getAllRoles:
 *   get:
 *     summary: Get all roles
 *     tags: [Role]
 *     description: Retrieve a list of all roles
 *     responses:
 *       '200':
 *         description: A successful response with a list of roles 
 *       '500':
 *         description: Internal server error
 */
role.get("/getAllRoles", getAllRoles);

/**
 * @swagger
 * /role/createRole:
 *   post:
 *     summary: Create a new role
 *     tags: [Role]
 *     description: Create a new role with the provided name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Role created successfully
 *       '400':
 *         description: Bad request due to validation error
 *       '500':
 *         description: Internal server error
 */
role.post("/createRole", roleValidation(roleValidationSchema), createRole);

/**
 * @swagger
 * /role/deleteRole/{id}:
 *   delete:
 *     summary: Delete a role
 *     tags: [Role]
 *     description: Delete a role by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Role deleted successfully
 *       '404':
 *         description: Role not found
 *       '500':
 *         description: Internal server error
 */
role.delete("/deleteRole/:id", deleteRole);

/**
 * @swagger
 * /role/updateRole/{id}:
 *   put:
 *     summary: Update a role
 *     tags: [Role]
 *     description: Update a role by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Role updated successfully
 *       '404':
 *         description: Role not found
 *       '500':
 *         description: Internal server error
 */
role.put("/updateRole/:id", roleValidation(roleValidationSchema), updateRole);

module.exports = { role };













// const { Router } = require("express");
// const role = Router();

// const {
//     createRole,
//     updateRole,
//     deleteRole,
//     getAllRoles
// } = require("../controllers/roleControllers");

// const roleValidatioSchema = require("../validation/roleValidation"); // O'zgaruvchilar yuqori qismga o'tkazildi

// const roleValidation = (schema) => (req, res, next) => {
//     const validationResult = schema.validate(req.body);
//     if (validationResult.error) {
//         return res.status(400).send(validationResult.error.details[0].message);
//     }
//     next();
// };
 
// role.get("/getAllRoles", getAllRoles);

 
// role.post("/createRole", roleValidation(roleValidatioSchema), createRole);


// role.delete("/deleteRole/:id", deleteRole);
// role.put("/updateRole/:id", roleValidation(roleValidatioSchema), updateRole);

// module.exports = { role };
