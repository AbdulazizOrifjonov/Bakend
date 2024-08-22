const { Router } = require("express");
const stage = Router();

const {
    getAllStages,
    createStage,
    updateStage,
    deleteStage
} = require("../controllers/stageControllers")
const stageValidationSchema = require("../validation/stageValidation")
const validationSchema = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
    }
    else{
        next();
    }
}

/**
 * @swagger
 * tags:
 *   name: Stages
 *   description: API endpoints for managing stages
 */

/**
 * @swagger
 * /stage/createStage:
 *   post:
 *     summary: Create a new stage
 *     tags: [Stages]
 *     description: Create a new stage with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Stage'
 *     responses:
 *       '200':
 *         description: Stage created successfully
 *       '400':
 *         description: Bad request due to validation error
 */
stage.post("/createStage", validationSchema(stageValidationSchema), createStage),

/**
 * @swagger
 * /stage/updateStage/{id}:
 *   put:
 *     summary: Update a stage
 *     tags: [Stages]
 *     description: Update an existing stage with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the stage to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Stage'
 *     responses:
 *       '200':
 *         description: Stage updated successfully
 *       '400':
 *         description: Bad request due to validation error
 *       '404':
 *         description: Stage not found
 */
stage.put("/updateStage/:id", validationSchema(stageValidationSchema), updateStage),

/**
 * @swagger
 * /stage/deleteStage/{id}:
 *   delete:
 *     summary: Delete a stage
 *     tags: [Stages]
 *     description: Delete a stage by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Stage deleted successfully
 *       '404':
 *         description: Stage not found
 */
stage.delete("/deleteStage/:id", deleteStage),

/**
 * @swagger
 * /stage/getAllStages:
 *   get:
 *     summary: Get all stages
 *     tags: [Stages]
 *     description: Retrieve a list of all stages
 *     responses:
 *       '200':
 *         description: A list of stages
 *       '500':
 *         description: Internal server error
 */
stage.get("/getAllStages", getAllStages),

module.exports = { stage };












// const { Router } = require("express");
// const stage = Router();

// const {
//     getAllStages,
//     createStage,
//     updateStage,
//     deleteStage
// } = require("../controllers/stageControllers")
// const stageValidationSchema = require("../validation/stageValidation")
// const validationSchema = (schema) => (req, res, next) => {
//     const {error} = schema.validate(req.body);
//     if(error){
//         res.status(400).send(error.details[0].message);
//     }
//     else{
//         next();
//     }
// }
// stage.post("/createStage",validationSchema(stageValidationSchema), createStage),
//     stage.put("/updateStage/:id",validationSchema(stageValidationSchema), updateStage),
//     stage.delete("/deleteStage/:id", deleteStage),
//     stage.get("/getAllStages", getAllStages),

//     module.exports = { stage };








