const express = require('express');
const app = express.Router();
const controller = require('../controllers/queue.controller')

app.get("/", controller.getAllQueue);

app.get("/:id", controller.getQueueById);

app.post("/", controller.createQueue);

app.put("/:id", controller.updateQueue);

app.delete("/:id", controller.deleteQueue);

app.get("/queuen/:queuen", controller.getUsersByQueueNumber);

module.exports = app;
