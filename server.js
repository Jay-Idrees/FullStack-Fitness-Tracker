
// Specifying dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Specifying JSON parsing of data using Express routes
const app = express();
const PORT = process.env.PORT || 3000;

// morgan logger
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

 // Setting up the Mongoose conection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Specifying links to api and html routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));



// Express server listener
app.listen(PORT, () => {
  console.log("Welcome to the Fitness Tracker. Your server is running at http://localhost:" +  PORT);
});








// // Specifying dependencies
// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");

// // Specifying JSON parsing of data using Express routes

// const app = express();
// const PORT = process.env.PORT || 3000;


// // morgan logger
// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));






// // Setting up the Mongoose conection
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });


// // api and html routes
// app.use(require("./routes/apiRoutes.js"));
// app.use(require("./routes/htmlRoutes.js"));

// // // api/html routes
// // app.use(require("./routes/api-routes.js"));
// // app.use(require("./routes/html-routes.js"));




// // Listener
// app.listen(PORT, () => {
//     console.log("Welcome to Fitness Trainer, your server is running at http://localhost" +  PORT);
//   });