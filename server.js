const { dbConn } = require("./src/Config/db");
const app = require("./src/app");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
dbConn();

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
