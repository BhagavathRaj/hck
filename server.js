const express=require('express');
const app=express();
const mongoose=require('mongoose');
const routesUrls=require('./routes/rotes');

const cors=require('cors');
const loginc= require('./models/loogn');
const ft=require('./routes/rotes')
const ut=require('./routes/rotes')
const dt=require('./routes/rotes')




if(mongoose.connect('mongodb+srv://bhagavath54:Bhagavath54!raj@cluster0.lapozfy.mongodb.net/web?retryWrites=true&w=majority'))
{
    console.log('database is connected');
}

app.use(express.json());
app.use(cors())
app.use('/app',routesUrls);
app.use('/app',ft);
app.put('/app',ut);
app.use('/app',dt);

app.post("/login",(req,res)=>
{
    const{name,password}=req.body;
    loginc.findOne({name:name})
    .then(user=>{
        if(user)
        {
            if(user.password=== password){
                res.json("success")
            }
            else{
                res.json("the password is incorect")
            }
        }
        else{
            res.json("No user created ")
        }
    })
})
// app.get('/fetchall',(req,res)=>
// {
// ft.find((err,val)=>{
//     if(err)
//     {
//         console.log(err)
//     }else{
//         res.json(val)
//     }
// })
// })
  
app.post('/register',(req,res)=>
{
    loginc.create(req.body)
    .then(loggi=>res.json(loggi))
    .catch(err=>res.json(err));
})
app.listen(4001,()=>
{
console.log("Server is up and running")
});


