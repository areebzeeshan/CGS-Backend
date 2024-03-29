const mongoose = require("mongoose");

const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error)  {
    throw new Error(error);
  }
};

module.exports = { dbConn };
