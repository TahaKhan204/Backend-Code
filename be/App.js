require('./db/db').connect()
const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser = require('body-parser')
const Student=require('./model/student')
var ObjectId = require('mongodb').ObjectID;
const Book=require('./model/Book')
app.use(express.json());

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json())
app.listen(5000,(req,res)=>{
    console.log('server is listening at 9000');
})


app.get('/',(req,res)=>{
    res.send('Hello, fe.')
})
app.get('/showStudent',async(req,res)=>{
    console.log('from show student');
    const s= await Student.find({})
    // console.log(s[0].firstName);
    res.json({message:s})
})
app.post('/registerStudent',async(req,res)=>{
    console.log(req.body);
    const {firstName,lastName}=req.body
    if(firstName && lastName)
    {
        try{
            const student=await Student.create({
                firstName,lastName
            })
            if(student)
            {
                console.log('inserted');
                res.json({message:'inserted'})
            }
        }
        catch{

        }
    }

})


app.post('/updateStudent',async(req,res)=>{
    console.log(req.body);
    // const {firstName,lastName}=req.body
    firstName=req.body.firstName
    lastName=req.body.lastName
    const _id=req.body.id
    // const _id = ObjectId(x)
    // console.log(__id);
    if(_id && firstName && lastName)
    {
        console.log('asghar');
        // const z=await Student.findById({_id})
        // console.log(z);
        const updatedStudent=await Student.updateOne({'_id':_id} ,{$set:{firstName,lastName}})
        // ,{$set:{firstName,lastName}}
        res.json({message:'updated'})
    }

})




app.get('/showBook',async(req,res)=>{
    console.log('from show books');
    const s= await Book.find({})
    // console.log(s[0].firstName);
    res.json({message:s})
})
app.post('/registerBook',async(req,res)=>{
    console.log(req.body);
    // const {firstName,lastName}=req.body
    const { bookName,author,borrowedby,dateofborrow,dateofreturn}=req.body
    if( bookName && author )
    {
        try{
            const book=await Book.create({
                bookName,author,borrowedby,dateofborrow,dateofreturn
            })
            if(book)
            {
                console.log('inserted');
                res.json({message:'inserted'})
            }
        }
        catch{

        }
    }

})


app.post('/updateBook',async(req,res)=>{
    console.log(req.body);
    // const {firstName,lastName}=req.body
    const { id,bookName,author,borrowedby,dateofborrow,dateofreturn}=req.body
    //  _id = ObjectId(_id)
    if( bookName && author )
    {
        //  const z=await Book.findById({_id:_id})
        // console.log(z);
        const updatedBook=await Book.updateOne({'_id':id} ,{$set:{bookName,author,borrowedby,dateofborrow,dateofreturn}})
        // ,{$set:{firstName,lastName}}
        if(updatedBook)
        {
            res.json({message:'updated'})

        }
    }
    // firstName=req.body.firstName
    // lastName=req.body.lastName
    // const _id=req.body.id
    // const _id = ObjectId(x)
    // console.log(__id);
    // if(_id && firstName && lastName)
    // {
    //     console.log('asghar');
    //     // const z=await Student.findById({_id})
    //     // console.log(z);
    //     const updatedStudent=await Student.updateOne({'_id':_id} ,{$set:{firstName,lastName}})
    //     // ,{$set:{firstName,lastName}}
    //     res.json({message:'updated'})
    // }

})