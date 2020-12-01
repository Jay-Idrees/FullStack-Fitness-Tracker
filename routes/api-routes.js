// Defining dependencies
const express = require("express")
const app = express.Router()
const Workout = require("../models/workout.js");
const Exercise = require("../models/exercise");



 ////////////////Create
// Creating a new workout object and sending it to mongoDB for storage in the workout collection
app.post("/api/workouts/", (req, res) => {
   // Note that create is taking forminput regarding the workout  and then storing it as an individual workout object insde the global workout collection that is creating a workout object inside the workout collection table/global workout object

   // note that the first line here is turning the form input into an object
    Workout.create(req.body)
   // The next line is passing this new individual workout object to the workout 'table/collection/global object' called workout
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err)
        })
});

// READ

app.get("/api/workouts/range", (req, res) => {
    // Find all workouts but limit the result to 5
    Workout.find({}).limit(5)
        .then(workouts => {
            res.json(workouts)
        })
        .catch(err => {
            res.json(err);
        })
})
