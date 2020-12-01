// Specifying dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Specifying JSON parsing of data using Express routes

const app = express();
const PORT = process.env.PORT || 3000;

// Setting up the Mongoose conection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


// api/html routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));




// Listener
app.listen(PORT, () => {
    console.log("Welcome to Fitness Trainer, your server is running at http://localhost" +  PORT);
  });