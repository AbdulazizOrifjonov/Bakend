const { Router } = require("express");
const branch = Router();

const {
    createBranch,
    updateBranch,
    deleteBranch,
    getAllBranch
} = require("../controllers/branchControllers")

const branchValidation = require("../validation/branchValidation")

const validationSchema = (schema) => (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }
    next();
};

/**
 * @swagger
 * tags:
 *   name: Branches
 *   description: API endpoints for managing branches
 */

/**
 * @swagger
 * /branch/createBranch:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     description: Create a new branch with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *     responses:
 *       '200':
 *         description: Branch created successfully
 *       '400':
 *         description: Bad request due to validation error
 */
branch.post("/createBranch", validationSchema(branchValidation), createBranch);

/**
 * @swagger
 * /branch/updateBranch/{id}:
 *   put:
 *     summary: Update a branch
 *     tags: [Branches]
 *     description: Update an existing branch with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the branch to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *     responses:
 *       '200':
 *         description: Branch updated successfully
 *       '400':
 *         description: Bad request due to validation error
 *       '404':
 *         description: Branch not found
 */
branch.put("/updateBranch/:id", validationSchema(branchValidation), updateBranch);

/**
 * @swagger
 * /branch/deleteBranch/{id}:
 *   delete:
 *     summary: Delete a branch
 *     tags: [Branches]
 *     description: Delete a branch by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Branch deleted successfully
 *       '404':
 *         description: Branch not found
 */
branch.delete("/deleteBranch/:id", deleteBranch);

/**
 * @swagger
 * /branch/getAllBranch:
 *   get:
 *     summary: Get all branches
 *     tags: [Branches]
 *     description: Retrieve a list of all branches
 *     responses:
 *       '200':
 *         description: A list of branches
 *       '500':
 *         description: Internal server error
 */
branch.get("/getAllBranch", getAllBranch);

module.exports = { branch };















// const { Router } = require("express");
// const branch = Router();

// const {
//     createBranch,
//     updateBranch,
//     deleteBranch,
//     getAllBranch
// } = require("../controllers/branchControllers")
// const branchValidation = require("../validation/branchValidation")
// const validationSchema = (schema) => (req, res, next) => {
//     const validationResult = schema.validate(req.body);
//     if (validationResult.error) {
//         return res.status(400).send(validationResult.error.details[0].message);
//     }
//     next();
// };
// branch.post("/createBranch",validationSchema(branchValidation), createBranch),
//     branch.put("/updateBranch/:id",validationSchema(branchValidation),  updateBranch),
//     branch.delete("/deleteBranch/:id", deleteBranch),
//     branch.get("/getAllBranch", getAllBranch),

//     module.exports = { branch };







