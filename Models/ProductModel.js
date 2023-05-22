const mongoose=require("mongoose")

const propductSchema=mongoose.Schema({
    fname:{
        type: String,
        requied:[true,"Please Enter first name"]
    },
    lname:{
        type: String,
        requied:[true,"Please Enter last name"]
    },
    age:{
        type: Number,
        requied:[true,"Please Enter your age"],
        default:0,
    },
    duration:{
        type: Number,
        requied:false,
    }
},
{
   timestamps:true
}
)