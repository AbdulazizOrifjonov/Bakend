const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const swaggerJSDoc = require("swagger-jsdoc"); // Corrected variable name
const swaggerUi = require("swagger-ui-express");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB ishlayapti brat"); // Corrected console log message
  } catch (error) {
    console.error("MongoDB qoqilib tushdi turgizish kerek ", error.message);
  }
}
connectToDB();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "API documentation using Swagger"
    },
    servers: [ // Corrected 'servers' field
      {
        url: "http://localhost:9000"
      }
    ]
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions); // Corrected variable name
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Corrected middleware setup

// Routes
app.get("/", (req, res) => {
  res.json("Hi NodeJs!");
});

// Connect routes
const { role } = require("./routes/roleRoute");
const { stuff } = require("./routes/stuffRoute");
const { stage } = require("./routes/stageRoute");
const { branch } = require("./routes/branchRoute");
const { group } = require("./routes/groupRoute");
const { lid } = require("./routes/lidRoute");
const { student } = require("./routes/studentRoute");
const { group_stuff } = require("./routes/groupStuffRoute");
const { stuff_role } = require("./routes/stuffRoleRoute");
const { student_group } = require("./routes/studentGroupRoute");
const { status } = require("./routes/lidStatusRoute");
const { lesson } = require("./routes/lessonRoute");
const { reason_lid } = require("./routes/reasonLidRoute");
const { student_lesson } = require("./routes/studentLessonRoute");

app.use("/role", role);
app.use("/stuff", stuff);
app.use("/stage", stage);
app.use("/branch", branch);
app.use("/group", group);
app.use("/lid", lid);
app.use("/student", student);
app.use("/group_stuff", group_stuff);
app.use("/stuff_role", stuff_role);
app.use("/student_group", student_group);
app.use("/status", status);
app.use("/lesson", lesson);
app.use("/reason_lid", reason_lid);
app.use("/student_lesson", student_lesson);

// Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server uchyapti http://localhost:${PORT}`);
});








































// const express = require("express");
// const { connect } = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const swaggerJsdog = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Database connection
// async function connectToDB() {
//   try {
//     await connect(process.env.MONGO_URL);
//     console.log("MongoDB ishlayabti Brat!");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error.message);
//   }
// }
// connectToDB();
// const swaggerOpitins = {
//   swaggerDefinition: {
//     openapi: "3.0.0",
//     info: {
// title: "Express API with Swagger",
// version: "1.0.0",
// description: "API documuntation using Swagger"
//     },
//     server:[
//       {
//         url : "http://localhost:9000"
//       }
//     ]
//   },
//   apis: ["./routes/*.js"],
// }

// const swaggerDogs = swaggerJsdog(swaggerOpitins);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDogs))
// // Routes
// app.get('/', (req, res) => {
//   res.json("Hi NodeJs!");
// });

// // Connect 
// const { role } = require("./routes/roleRoute");
// const { stuff } = require("./routes/stuffRoute");
// const { stage } = require("./routes/stageRoute");
// const { branch } = require("./routes/branchRoute");
// const { group } = require("./routes/groupRoute");
// const { lid } = require("./routes/lidRoute");
// const { student } = require("./routes/studentRoute");
// const { group_stuff } = require("./routes/groupStuffRoute");
// const { stuff_role } = require("./routes/stuffRoleRoute");
// const { student_group } = require("./routes/studentGroupRoute");
// const { status } = require("./routes/lidStatusRoute");
// const { lesson } = require("./routes/lessonRoute");
// const { reason_lid } = require("./routes/reasonLidRoute");
// const { student_lesson } = require("./routes/studentLessonRoute");
// const { version } = require("joi");
// const { description } = require("./validation/branchValidation");
// app.use("/role", role);
// app.use("/stuff", stuff);
// app.use("/stage", stage);    
// app.use("/branch", branch);
// app.use("/group", group);
// app.use("/lid", lid);
// app.use("/student", student);
// app.use("/group_stuff", group_stuff); 5
// app.use("/stuff_role", stuff_role);
// app.use("/student_group", student_group);
// app.use("/status", status);
// app.use("/lesson", lesson);
// app.use("/reason_lid", reason_lid);
// app.use("/student_lesson", student_lesson);


// // Server 
// const PORT = process.env.PORT || 9000;
// app.listen(PORT, () => {
//   console.log(`Server uchyapti http://localhost:${PORT}`);
// });
