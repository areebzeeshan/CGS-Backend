// ProjectModel.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  deleiveryDate: { type: Date, required: true },
  platform: { type: String, required: true },
  department: { type: String, required: true },
  nature: { type: String, required: true },
  profile: { type: String },
  salesPerson: { type: String, required: true },
  amount: { type: Number, required: true },
  clientName: { type: String, required: true },
  description: { type: String, required: true },
  attachments: { type: String },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
