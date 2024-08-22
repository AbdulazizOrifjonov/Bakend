const { Router } = require("express");
const group_stuff = Router();

const {
    createGroup_Stuff,
    getAllGroup_Stuff,
    updateGroup_Stuff,
    deleteGroup_Stuff,
    getByIdGrop_Stuff
} = require("../controllers/groupStuffCotrollers")

const groupStuffValidationSchema = require("../validation/groupStuffVlidation")
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
 *   name: Group_Stuff
 *   description: API endpoints for managing group stuff
 */

/**
 * @swagger
 * /group_stuff/createGroup_Stuff:
 *   post:
 *     summary: Create a new group stuff
 *     tags: [Group_Stuff]
 *     description: Create a new group stuff with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GroupStuff'
 *     responses:
 *       '200':
 *         description: Group stuff created successfully
 *       '400':
 *         description: Bad request due to validation error
 */
group_stuff.post("/createGroup_Stuff", validationSchema(groupStuffValidationSchema), createGroup_Stuff);

/**
 * @swagger
 * /group_stuff/updateGroup_Stuff/{id}:
 *   put:
 *     summary: Update a group stuff
 *     tags: [Group_Stuff]
 *     description: Update an existing group stuff with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the group stuff to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GroupStuff'
 *     responses:
 *       '200':
 *         description: Group stuff updated successfully
 *       '400':
 *         description: Bad request due to validation error
 *       '404':
 *         description: Group stuff not found
 */
group_stuff.put("/updateGroup_Stuff/:id", validationSchema(groupStuffValidationSchema), updateGroup_Stuff);

/**
 * @swagger
 * /group_stuff/deleteGroup_Stuff/{id}:
 *   delete:
 *     summary: Delete a group stuff
 *     tags: [Group_Stuff]
 *     description: Delete a group stuff by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Group stuff deleted successfully
 *       '404':
 *         description: Group stuff not found
 */
group_stuff.delete("/deleteGroup_Stuff/:id", deleteGroup_Stuff);

/**
 * @swagger
 * /group_stuff/getAllGroup_Stuff:
 *   get:
 *     summary: Get all group stuff
 *     tags: [Group_Stuff]
 *     description: Retrieve a list of all group stuff
 *     responses:
 *       '200':
 *         description: A list of group stuff
 *       '500':
 *         description: Internal server error
 */
group_stuff.get("/getAllGroup_Stuff", getAllGroup_Stuff);

/**
 * @swagger
 * /group_stuff/getByIdGrop_Stuf/{id}:
 *   get:
 *     summary: Get a group stuff by ID
 *     tags: [Group_Stuff]
 *     description: Retrieve a group stuff by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A group stuff object
 *       '404':
 *         description: Group stuff not found
 */
group_stuff.get("/getByIdGrop_Stuf/:id", getByIdGrop_Stuff);

module.exports = { group_stuff };



















// const { Router } = require("express");
// const group_stuff = Router();

// const {
//     createGroup_Stuff,
//     getAllGroup_Stuff,
//     updateGroup_Stuff,
//     deleteGroup_Stuff,
//     getByIdGrop_Stuff
// } = require("../controllers/groupStuffCotrollers")

// const groupStuffValidationSchema = require("../validation/groupStuffVlidation")
// const validationSchema = (schema) => (req, res, next) => {
//     const validationResult = schema.validate(req.body);
//     if (validationResult.error) {
//         return res.status(400).send(validationResult.error.details[0].message);
//     }
//     next();
// };
// group_stuff.post("/createGroup_Stuff",validationSchema(groupStuffValidationSchema), createGroup_Stuff);
// group_stuff.put("/updateGroup_Stuff/:id",validationSchema(groupStuffValidationSchema), updateGroup_Stuff);
// group_stuff.delete("/deleteGroup_Stuff/:id", deleteGroup_Stuff);
// group_stuff.get("/getAllGroup_Stuff", getAllGroup_Stuff);
// group_stuff.get("/getByIdGrop_Stuf/:id", getByIdGrop_Stuff);

// module.exports = { group_stuff };
