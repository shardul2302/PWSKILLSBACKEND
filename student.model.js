//define schema 
const mongoose = require("mongoose")


//schema

const stuentschema = new mongoose.Schema({

    name: String,
    age: Number
})

//go head 
  module.exports = mongoose.model("student",stuentschema)