const { Router } = require("express");
const stuff = Router(); // Router o'zgaruvchisini stuff deb o'zgardi

const {
    createStuff,
    login,
    getStuffById,
    updateStuffById,
    deleteStuffById,
    getAllStuff
} = require("../controllers/stuffControlles");

const { StuffregisterValidationSchema } = require("../validation/stuffValidation");

const stuffValidation = (schema) => (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }
    next();
};

/**
 * @swagger
 * tags:
 *   name: Stuff
 *   description: API endpoints for managing stuff
 */

/**
 * @swagger
 * /stuff/createStuff:
 *   post:
 *     summary: Create a new stuff
 *     tags: [Stuff]
 *     description: Create a new stuff with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Specify the properties here (e.g., name, email, etc.)
 *     responses:
 *       '201':
 *         description: Stuff created successfully
 *       '500':
 *         description: Internal server error
 */
stuff.post("/createStuff", stuffValidation(StuffregisterValidationSchema), createStuff);

/**
 * @swagger
 * /stuff/login: 
 *   post:
 *     summary: Log in as a stuff
 *     tags: [Stuff]
 *     description: Log in as a stuff with the provided credentials
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Specify the properties here (e.g., email, password, etc.)
 *     responses:
 *       '200':
 *         description: Logged in successfully
 *       '401':
 *         description: Unauthorized - Invalid credentials
 *       '500':
 *         description: Internal server error
 */
stuff.post("/login", login);

/**
 * @swagger
 * /stuff/getStuffById/{id}:
 *   get:
 *     summary: Get stuff by ID
 *     tags: [Stuff]
 *     description: Retrieve stuff information by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A successful response with stuff information
 *       '404':
 *         description: Stuff not found
 *       '500':
 *         description: Internal server error
 */
stuff.get("/getStuffById/:id", getStuffById);

/**
 * @swagger
 * /stuff/updateStuffById/{id}:
 *   put:
 *     summary: Update stuff by ID
 *     tags: [Stuff]
 *     description: Update stuff information by its ID
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
 *               // Specify the properties here (e.g., name, email, etc.)
 *     responses:
 *       '200':
 *         description: Stuff updated successfully
 *       '404':
 *         description: Stuff not found
 *       '500':
 *         description: Internal server error
 */
stuff.put("/updateStuffById/:id", stuffValidation(StuffregisterValidationSchema), updateStuffById);

/**
 * @swagger
 * /stuff/deleteStuffById/{id}:
 *   delete:
 *     summary: Delete stuff by ID
 *     tags: [Stuff]
 *     description: Delete stuff by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Stuff deleted successfully
 *       '404':
 *         description: Stuff not found
 *       '500':
 *         description: Internal server error
 */
stuff.delete("/deleteStuffById/:id", deleteStuffById);

/**
 * @swagger
 * /stuff/getAllStuff:
 *   get:
 *     summary: Get all stuff
 *     tags: [Stuff]
 *     description: Retrieve a list of all stuff
 *     responses:
 *       '200':
 *         description: A successful response with a list of stuff 
 *       '500':
 *         description: Internal server error
 */
stuff.get("/getAllStuff", getAllStuff);

module.exports = { stuff };

























// const { Router } = require("express");
// const stuff = Router();

// const {
//     createStuff,
//     login,
//     getStuffById,
//     updateStuffById,
//     deleteStuffById,
//     getAllStuff
// } = require("../controllers/stuffControlles");

// const { StuffupdateValidationSchema, StuffregisterValidationSchema } = require("../validation/stuffValidation");

// const stuffValidation = (schema) => (req, res, next) => {
//     const validationResult = schema.validate(req.body);
//     if (validationResult.error) {
//         return res.status(400).send(validationResult.error.details[0].message);
//     }
//     next();
// };

// // Routes
// stuff.post("/createStuff", stuffValidation(StuffregisterValidationSchema), createStuff);
// stuff.post("/login", login);
// stuff.get("/getStuffById/:id", getStuffById);
// stuff.put("/updateStuffById/:id", stuffValidation(StuffupdateValidationSchema), updateStuffById);
// stuff.delete("/deleteStuffById/:id", deleteStuffById);
// stuff.get("/getAllStuff", getAllStuff);

// module.exports = { stuff };
