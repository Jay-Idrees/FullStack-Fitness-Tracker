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

// UPDATE


app.put("/api/workouts/:id", async (req, res) => {
    //Wait before the exercise object is received
    const exercise = await Exercise.create(req.body);
   // Using the find by id and update mongoose function 
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: exercise._id}},
        {new: true, runValidators: true}
    ).populate("exercises")
        .then(dbWorkout => {
            console.log("\n\n\n")
            console.log(dbWorkout)
            console.log("\n\n\n")
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
})