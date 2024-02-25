const mongoose = require('mongoose')

const studentmodel = require("./shardulmodels/student1.model")
// we have to connect mongodb so lets write the code

mongoose.connect("mongodb://localhost/shdata");

const db = mongoose.connection//start the connection for db

db.on('erorr',()=> {
    console.log("data base is not connected please check url")
});
db.once('open'  ,() => {
    console.log("connected to mongodb")
    //logic of code
    init()
    dbquries()
});

async function init(){

    //logical insert data

    const student = {

        name:"vishwasir",
        age:45,
        email : "shardul@gmail.com"
             , subject :["maths "  , "sci" ]  }
       const stu_object = await studentmodel.create(student)
console.log(stu_object)
 

}

async function dbquries(){
    console.log("inside dbquries function")
 try{
  const cap =  await  studentmodel.findById("65db8a7d1d9d502688566bf2")
  console.log(cap)
 }catch(err){
    console.log(err) 
 }
  try {

     //const cap2 = await studentmodel.find({ name:"vasir"})
     const cap2 = await studentmodel.findOne({ name:"vishwasir"})
       console.log(cap2) 
    }catch(err){
console.log(err)
    }
 
    
}


