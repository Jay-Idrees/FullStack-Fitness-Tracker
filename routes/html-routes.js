
// DEPENDENCIES
const express = require("express")
const app = express.Router();
// path module
const path = require("path")

// exercise route
app.get("/exercise", ({body}, res) => {
    // send file
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

// stats route
app.get("/stats", ({body}, res) => {
    // send file
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

module.exports = app;











// // DEPENDENCIES
// const express = require("express")
// const app = express.Router();
// // path module
// const path = require("path")

// // exercise route
// app.get("/exercise", ({body}, res) => {
//     // send file
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
// })

// // stats route
// app.get("/stats", ({body}, res) => {
//     // send file
//     res.sendFile(path.join(__dirname, "../public/stats.html"));
// })

// module.exports = app;
