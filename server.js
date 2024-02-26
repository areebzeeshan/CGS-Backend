const { dbConn } = require("./src/Config/db");
const app = require("./src/app");
require("dotenv").config();
// const https = require('https');http://localhost:4000/

const PORT = process.env.PORT || 5000;
dbConn();

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
