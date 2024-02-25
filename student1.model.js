//define schema 
const mongoose = require("mongoose")


//schema

const stuentschema = new mongoose.Schema({

    name: {

        type: String  ,

        required :  true
    } ,
    age:{
        type: Number,
        min : 19 },
    email :{
         type : String,
         required : true,
         min :15


    },
    subject : [String],
    createdAt:{

        type : Date,
        immutable :true,
        default : () =>  {
              return Date.now()
        }
    }
},{versionKey : false , timestamps : true})

//go head 
  module.exports = mongoose.model("student",stuentschema)