const Queue = require("../models/queue.model");
exports.getAllQueue = (req, res) => {
    Queue.find().then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
exports.getQueueById = (req, res) => {
    Queue.findById(req.params.id).then((result) =>{
    res.status(200).json({
      msg:"Search OK",
      data:result,
    });
  });
};

exports.createQueue =  async(req, res) => {
  // res.send("Food Created");
  try {
    let queue = new Queue({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      tel: req.body.tel,
      cartype: req.body.cartype,
      car_plate: req.body.car_plate,
      queue_number: req.body.queue_number
    });
    let createQueue = await queue.save();
    res.status(200).json({
      msg: "Add a Queue complete.",
      data: createQueue,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    })
  }
};
exports.updateQueue = (req, res) => {
  let queue = {
    firstname: req.body.firstname,
      lastname: req.body.lastname,
      tel: req.body.tel,
      cartype: req.body.cartype,
      car_plate: req.body.car_plate,
      queue_number: req.body.queue_number
  };
  Queue.findByIdAndUpdate(
    req.params.id,
    queue
    ).then((result) => {
      Queue.findById(req.params.id)
      .then((result) => {
        res.status(200).json({
          msg:"OK",
          data:result,
        });
      });
    });
};
exports.getUsersByQueueNumber = (req, res) => {
  Queue.find({
    queue_number: new RegExp(req.params.queue_number)
  }).then((result) => {
    res.status(200).json({
      msg:"search OK",
      data:result,
    });
  });
};
exports.deleteQueue = (req, res) => {
  Queue.findByIdAndDelete(req.params.id)
  .then((result) => {
    res.status(200).json({
      msg:`Queue id ${req.params.id} is deleted.`,
    });
  });
};
