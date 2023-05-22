const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      requied: [true, "Please Enter first name"],
    },
    lname: {
      type: String,
      requied: [true, "Please Enter last name"],
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
      requied: false,
    },
    contact: {
      type: Number,
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
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Todo=mongoose.model("Todo",todoSchema)

module.exports=Todo;