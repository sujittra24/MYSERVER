require('dotenv').config({ path: './config.env'});
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./db.js")(app);
const workOrderRoute = require('./routes/workorder.route');
app.use("/workorder", workOrderRoute);
const userRoute = require('./routes/user.route');
app.use("/user", userRoute);
const queueRoute = require('./routes/queue.route');
app.use("/queue", queueRoute);

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/contact", (req, res) => {
    res.send("Contact");
  });
  app.get("/people", (req, res) => {
    res.send("People");
  });

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});
