const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QueueSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    tel: { type: String, required: true },
    cartype: { type: String, required: true },
    car_plate: { type: String, required: true },
    queue_number:{ type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Queue", QueueSchema);
