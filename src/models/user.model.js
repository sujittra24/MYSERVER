const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    tel: { type: String, required: true },
    address: { type: String, required: true },
    cartype: { type: String, required: true },
    car_plate: { type: String, required: true },
    username: {type: String,required:true},
    password: {type:String,required : true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
