const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String}
})

module.exports=mongoose.model('student',studentSchema)