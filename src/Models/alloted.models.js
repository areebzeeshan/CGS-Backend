const mongoose = require("mongoose");

const allotedSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  startDate: { type: String, required: true },
  deliveryDate: { type: String, required: true },
  platform: { type: String, required: true },
  department: { type: String, required: true },
  status: { type: String, required: true },
  nature: { type: String, required: true },
  profile: { type: String },
  salesPerson: { type: String, required: true },
  amount: { type: Number, required: true },
  clientName: { type: String, required: true },
  description: { type: String, required: true },
  attachments: { type: String },
});

const Alloted = mongoose.model("Alloted", allotedSchema);

module.exports = Alloted;
