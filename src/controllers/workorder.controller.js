const WorkOrder = require("../models/workorder.model");
exports.getCars = (req, res) => {
  WorkOrder.find().then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
exports.getById = (req, res) => {
  WorkOrder.findById(req.params.id).then((result) =>{
    res.status(200).json({
      msg:"Search OK",
      data:result,
    });
  });
};

exports.createWorkOrder =  async(req, res) => {
  // res.send("Food Created");
  try {
    let workorder = new WorkOrder({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      work_id: req.body.work_id,
      detail: req.body.detail,
      category: req.body.category,
      price: req.body.price
    });
    let createWorkOrder = await workorder.save();
    res.status(200).json({
      msg: "Add a Work Order complete.",
      data: createWorkOrder,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    })
  }
};
exports.updateWorkOrder  = (req, res) => {
  let workorder = {
    firstname: req.body.firstname,
      lastname: req.body.lastname,
      work_id: req.body.work_id,
      detail: req.body.detail,
      category: req.body.category,
      price: req.body.price
  };
  WorkOrder.findByIdAndUpdate(
    req.params.id,workorder
    ).then((result) => {
      WorkOrder.findById(req.params.id)
      .then((result) => {
        res.status(200).json({
          msg:"OK",
          data:result,
        });
      });
    });
};
exports.getWorkOrderByName = (req, res) => {
  WorkOrder.find({
    name: new RegExp(req.params.name)
  }).then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
// exports.getFoodMenusByCategory = (req, res) => {
//   FoodMenu.find({
//     category: new RegExp(req.params.category)
//   }).then((result) => {
//     res.status(200).json({
//       msg:"search OK",
//       data:result,
//     });
//   });
// };
// exports.addReview = (req, res) => {
//   let reviewData ={
//     $push: {
//       reviews : {
//         star : req.body.star,
//         message: req.body.message,
//       },
//     },
//   };
//   FoodMenu.findByIdAndUpdate(req.params.id,reviewData)
//   .then((result) => {
//     FoodMenu.findById(req.params.id)
//     .then((result) => {
//       res.status(200).json({
//         msg:"OK",
//         data:result,
//       });
//     });
//   });
// };
exports.deleteWorkOrder = (req, res) => {
  WorkOrder.findByIdAndDelete(req.params.id)
  .then((result) => {
    res.status(200).json({
      msg:`Work Order id ${req.params.id} is deleted.`,
    });
  });
};
