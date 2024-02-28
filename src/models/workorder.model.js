const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkOrderSchema = new Schema({
firstname : { type: String, required: true},
lastname : { type: String, required: true},
work_id : { type: String, required: true},
detail : { type: String, required: true},
category : {type : String, required: true},
price: {type: Number,required: true},
},{ timestamps:true });

module.exports = mongoose.model("WorkOrder" , WorkOrderSchema);