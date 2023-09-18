
const express=require('express');
const router=express.Router()
const mongoose=require('mongoose');
const signUpTemplateCopie=require("../models/signupmodel");


router.get("/fetchall",(req,res)=>
{
    signUpTemplateCopie.find({})
   .then(users=>res.json(users))
   .catch(err=>res.json(err))

})
router.get("/fetchall/:studentid",(req,res)=>
{ let upid=req.params.studentid
    let upnm=req.body.studentname
    let upag=req.body.studentage
    let upad=req.body.studentaddress
    let un=req.body.studentmobileno
    let dep=req.body.studentdepartment
    signUpTemplateCopie.findOneAndUpdate({studentid:upid},{$set:{studentname:upnm,studentage:upag,studentaddress:upad,
    studentmobileno:un,studentdepartment:dep   }},{new:true}) .then(user=>res.json(user))
    .catch(err=>res.json(err))
       
})
router.put("/updateuser/:studentid",(req,res)=>
{ let upid=req.params.studentid
    let upnm=req.body.studentname
    let upag=req.body.studentage
    let upad=req.body.studentaddress
    let un=req.body.studentmobileno
    let dep=req.body.studentdepartment
    signUpTemplateCopie.findOneAndUpdate({studentid:upid},{$set:{studentname:upnm,studentage:upag,studentaddress:upad,
    studentmobileno:un,studentdepartment:dep   }},{new:true}) .then(user=>res.json(user))
    .catch(err=>res.json(err))
       
})

router.delete("/delete/:studentid",(req,res)=>
{
    let delid=req.params.studentid
    signUpTemplateCopie.findOneAndDelete({studentid:delid}) 
    .then(user=>res.json(user))
    .catch(err=>res.json(err))

})

router.post("/signup",(request,response)=>
{
    const signedUpUser=new signUpTemplateCopie({

        studentid:request.body.studentid,
        studentname:request.body.studentname,
        studentage:request.body.studentage,
        studentaddress:request.body.studentaddress,
        studentmobileno:request.body.studentmobileno,
        studentdepartment:request.body.studentdepartment,

    })
    signedUpUser.save().then(data=>
        {
            response.json(data);
        }).catch(error=>
            {
                response.json(error)
            })
})


module.exports=router;