const User = require("../models/user.model");
exports.getUsers = (req, res) => {
  User.find().then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
exports.getUserById = (req, res) => {
  User.findById(req.params.id).then((result) =>{
    res.status(200).json({
      msg:"Search OK",
      data:result,
    });
  });
};

exports.createUser =  async(req, res) => {
  // res.send("Food Created");
  try {
    let user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      tel: req.body.tel,
      address: req.body.address,
      cartype: req.body.cartype,
      car_plate: req.body.address,
      username : req.body.username,
      password: req.body.password
    });
    let createUser = await user.save();
    res.status(200).json({
      msg: "Add a User complete.",
      data: createUser,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    })
  }
};
exports.updateUser = (req, res) => {
  let user = {
    firstname: req.body.firstname,
      lastname: req.body.lastname,
      tel: req.body.tel,
      address: req.body.address,
      cartype: req.body.cartype,
      car_plate: req.body.address,
      username : req.body.username,
      password: req.body.password
  };
  User.findByIdAndUpdate(
    req.params.id,
    user
    ).then((result) => {
      User.findById(req.params.id)
      .then((result) => {
        res.status(200).json({
          msg:"OK",
          data:result,
        });
      });
    });
};
exports.getUsersByUsername = (req, res) => {
  User.find({
    firstname: new RegExp(req.params.firstname)
  }).then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
// exports.getUsersByFullname = (req, res) => {
//   User.find({
//     category: new RegExp(req.params.fullname)
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
//   User.findByIdAndUpdate(req.params.id,reviewData)
//   .then((result) => {
//     User.findById(req.params.id)
//     .then((result) => {
//       res.status(200).json({
//         msg:"OK",
//         data:result,
//       });
//     });
//   });
// };
exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then((result) => {
    res.status(200).json({
      msg:`User id ${req.params.id} is deleted.`,
    });
  });
};
