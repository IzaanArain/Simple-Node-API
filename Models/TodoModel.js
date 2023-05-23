const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please Enter first name"],
    },
    lname: {
      type: String,
      required: [true, "Please Enter last name"],
    },
    email: {
      type: String,
      required: [true, "please enter email"],
    },
    age: {
      type: Number,
      requied: [true, "Please Enter your age"],
      default: 0,
    },
    duration: {
      type: Number,
      required: false,
    },
    contact: {
      type: String,
      requied: false,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    activityType: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Todo=mongoose.model("Todo",todoSchema)

module.exports=Todo;