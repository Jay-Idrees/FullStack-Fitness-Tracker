const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// This code is defining variables in the exercise table object
// Note that is is a constructor function
const ExerciseSchema = new Schema({
    type: {
      type: String,
      trim: true,
      required: "Please select the exercise type"
    },
    name: {
      type: String,
      trim: true,
      required: "Please enter the name of exercise"
    },
    duration: {
      type: Number,
      required: "Please enter the duration (min) for which you will perform the exercise"
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  });