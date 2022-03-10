const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    bookName:{type:String},
    author:{type:String},
    borrowedby:{type:String},
    dateofborrow:{type:String},
    dateofreturn:{type:String}



})

module.exports=mongoose.model('book',bookSchema)