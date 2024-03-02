const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoutes = require("./Routes/user.routes");
const employeeRoutes = require("./Routes/employee.routes");
const empHistoryRoutes = require("./Routes/empHistory.routes");
const projNatureRoute = require("./Routes/projNature.routes");
const testFunc = require("./Routes/test.routes");
const salesUserRoutes = require("./Routes/salesUser.routes");
const productionUserRoutes = require("./Routes/productionuser.routes");
const projectRoutes = require("./Routes/project.routes");
const upload = require("./Middlewares/multer.middlewares");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({limit:'500mb',extended:true}));

//ROUTES

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "hello world",
  });
});
app.use("/api", testFunc);

app.use("/api/user", userRoutes);

app.use("/api/salesuser", salesUserRoutes);

app.use("/api/productionUser", productionUserRoutes);

app.use("/api/employee", employeeRoutes);

// app.use("/api/employee", empHistoryRoutes);

app.use("/dropdown", projNatureRoute);

app.use("/api/projects", projectRoutes);

module.exports = app;
