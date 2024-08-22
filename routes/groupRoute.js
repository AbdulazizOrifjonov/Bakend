const { Router } = require("express");
const group = Router();

const { 
    createGroup,
    getAllGroup,
    updateGroup,
    deleteGroup,
    getGroupById
} = require("../controllers/groupControllers")
const groupValidationSchema = require("../validation/groupRouteValidation");

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
 *   name: Groups
 *   description: API endpoints for managing groups
 */

/**
 * @swagger
 * /group/createGroup:
 *   post:
 *     summary: Create a new group
 *     tags: [Groups]
 *     description: Create a new group with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Group'
 *     responses:
 *       '200':
 *         description: Group created successfully
 *       '400':
 *         description: Bad request due to validation error
 */
group.post("/createGroup", validationSchema(groupValidationSchema), createGroup);

/**
 * @swagger
 * /group/getAllGroup:
 *   get:
 *     summary: Get all groups
 *     tags: [Groups]
 *     description: Retrieve a list of all groups
 *     responses:
 *       '200':
 *         description: A list of groups
 *       '500':
 *         description: Internal server error
 */
group.get("/getAllGroup", getAllGroup);

/**
 * @swagger
 * /group/getGroupById/{id}:
 *   get:
 *     summary: Get a group by ID
 *     tags: [Groups]
 *     description: Retrieve a group by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A group object
 *       '404':
 *         description: Group not found
 */
group.get("/getGroupById/:id", getGroupById);

/**
 * @swagger
 * /group/updateGroup/{id}:
 *   put:
 *     summary: Update a group
 *     tags: [Groups]
 *     description: Update an existing group with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the group to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Group'
 *     responses:
 *       '200':
 *         description: Group updated successfully
 *       '400':
 *         description: Bad request due to validation error
 *       '404':
 *         description: Group not found
 */
group.put("/updateGroup/:id", validationSchema(groupValidationSchema), updateGroup);

/**
 * @swagger
 * /group/deleteGroup/{id}:
 *   delete:
 *     summary: Delete a group
 *     tags: [Groups]
 *     description: Delete a group by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Group deleted successfully
 *       '404':
 *         description: Group not found
 */
group.delete("/deleteGroup/:id", deleteGroup);

module.exports = { group };

















// const { Router } = require("express");
// const group = Router();

// const { 
//     createGroup,
//     getAllGroup,
//     updateGroup,
//     deleteGroup,
//     getGroupById
// } = require("../controllers/groupControllers")
// const groupValidationSchema = require("../validation/groupRouteValidation");

// const validationSchema = (schema) => (req, res, next) => {
//     const validationResult = schema.validate(req.body);
//     if (validationResult.error) {
//         return res.status(400).send(validationResult.error.details[0].message);
//     }
//     next();
// };
// group.post("/createGroup",validationSchema(groupValidationSchema), createGroup)
// group.get("/getAllGroup", getAllGroup)
// group.get("/getGroupById/:id", getGroupById)
// group.put("/updateGroup/:id",validationSchema(groupValidationSchema), updateGroup)
// group.delete("/deleteGroup/:id", deleteGroup)


// module.exports = { group }




 