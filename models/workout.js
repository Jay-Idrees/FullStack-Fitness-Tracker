
// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the workout table object. 
const WorkoutSchema = new Schema({
// Contains 2 variable objects: day and exercises

  day: {
    type: Date,
    default: () => new Date()
  },

  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "exercise"
    }
  ]
});

// Note that ObjectIds are automatically assigned with mongoose in every schema
const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;