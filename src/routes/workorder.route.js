const express = require('express');
const app = express.Router();
const controller = require('../controllers/workorder.controller')

app.get("/", controller.getCars);

app.get("/:id", controller.getById);

app.post("/", controller.createWorkOrder);

app.put("/:id", controller.updateWorkOrder);

// app.patch("/:id", controller.addReview);

app.delete("/:id", controller.deleteWorkOrder);

app.get("/name/:name", controller.getWorkOrderByName);

// app.get("/category/:category", controller.getFoodMenusByCategory);

module.exports = app;
